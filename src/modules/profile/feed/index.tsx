import { message, Modal } from "antd";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddFeedMutation,
  useGetAllFeedQuery,
  useGetSingleFeedQuery,
  useUpdateFeedMutation,
} from "../../../redux/feed/feed_api";
import { onGetSingleFeed } from "../../../redux/feed/feed_slice";
import { useGetAllProductQuery } from "../../../redux/product/product_api";
import WinnersEditor from "../../@common/editor/bdwinners_editor";
import ImageInput from "../../@common/image_input/Image_input";

import AddStatus from "./components/add_status";
import FeedList from "./components/feed_list";
import Products from "./components/products";

export const ProfileFeed = () => {
  const { user } = useSelector((state: any) => state.auth);

  const userProfile =
    user !== ""
      ? user
      : JSON.parse(localStorage.getItem("profileInfo")!)?.profileInfo;

  //api fetch
  const { data: allProductList, isLoading } = useGetAllProductQuery<any>({
    pageSize: 10,
  });
  const { data: allFeedList, isLoading: allFeedLoading } =
    useGetAllFeedQuery<any>({
      pageSize: 10,
    });
  const { singleFeedData } = useSelector((state: any) => state.feed);
  const [getSingleFeed, setGetSingleFeed] = useState("");
  const { data: singleFeed } = useGetSingleFeedQuery<any>(getSingleFeed, {
    skip: getSingleFeed ? false : true,
  });
  const [addFeed, { isLoading: feedAddLoading }] = useAddFeedMutation();
  const [updateFeed, { isLoading: loadingUpdateFeed }] =
    useUpdateFeedMutation();

  //state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  //Modal functionality
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setGetSingleFeed("");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setGetSingleFeed("");
  };

  useEffect(() => {
    if (!getSingleFeed)
      dispatch(
        onGetSingleFeed({
          singleFeedData: {
            id: undefined,
            title: "",
            description: "",
            shortDescription: "",
            status: "Active",
            image: "",
          },
        })
      );
  }, [getSingleFeed]);

  //api post
  const handleFeed = async (values: any, resetForm: any) => {
    const formArray = new FormData();
    formArray.append("title", values.title);
    formArray.append("status", "Active");
    formArray.append("description", values?.description);

    if (values.file) {
      formArray.append("file", values.file);
    }
    if (values?.id) {
      await updateFeed({ data: formArray, id: values?.id }).then((res: any) => {
        if (!res?.error) {
          resetForm();
          handleCancel();
          message.success("Post updated");
        } else {
          message.error(
            res?.error?.data?.message ??
              "Something went wrong. Try reload the page"
          );
        }
      });
    } else {
      await addFeed(formArray).then((res: any) => {
        if (!res?.error) {
          resetForm();
          handleCancel();
          message.success("Post added");
        } else {
          message.error(
            res?.error?.data?.message ??
              "Something went wrong. Try reload the page"
          );
        }
      });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
      {/* left */}
      <div>
        <AddStatus userProfile={userProfile} showModal={showModal} />
        {/* card */}
        <FeedList
          allPosts={allFeedList}
          isLoading={allFeedLoading}
          userProfile={userProfile}
          setGetSingleFeed={setGetSingleFeed}
          showModal={showModal}
        />
      </div>

      {/* right */}
      <Products userProfile={userProfile} allProductList={allProductList} />

      <Modal
        footer={null}
        title={<div className="text-black ml-1 text-2xl">Post</div>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        wrapClassName="bg-red"
      >
        <div className="mt-4 p-2">
          <Formik
            initialValues={singleFeedData}
            enableReinitialize={true}
            // validationSchema={categoryValidationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);

              handleFeed(values, resetForm);
            }}
          >
            {({
              handleSubmit,
              setFieldValue,
              resetForm,
              errors,
              values,
              touched,
            }: any) => (
              <Form className="w-full">
                <div className="grid gap-5">
                  <div>
                    <label className="mb-1">Post Title</label>
                    <Field
                      type="text"
                      className={`form_control ${
                        errors?.title && touched?.title && "error"
                      }`}
                      placeholder="Type Here"
                      name="title"
                      value={values?.title ?? ""}
                      onChange={(e: any) =>
                        setFieldValue("title", e?.target?.value)
                      }
                    />
                    {errors?.title && touched?.title ? (
                      <div className="error">{errors?.title}</div>
                    ) : null}
                  </div>
                  <div>
                    <label className="mb-1">Description</label>

                    <WinnersEditor
                      onChange={(event: any) => {
                        const content = event.target.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        );

                        if (content) {
                          setFieldValue("description", event.target.value);
                        }
                      }}
                      contents={values?.description ? values?.description : ""}
                      name="description"
                      height="150"
                    />
                    {errors?.description && touched?.description ? (
                      <div className="error">{errors?.description}</div>
                    ) : null}
                  </div>

                  <div>
                    <label>Image</label>
                    <div className="mt-2">
                      <ImageInput
                        onChange={(e: any) => {
                          setFieldValue("file", e?.file);
                        }}
                        imageSource={
                          values?.id && values?.image
                            ? `${import.meta.env.VITE_API_URL}/${values?.image}`
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-5">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn btn-primary px-7"
                  >
                    {values?.id ? "Update" : "Post"}
                  </button>
                  <button
                    onClick={handleCancel}
                    type="button"
                    className="btn btn-grey"
                  >
                    Cancel
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileFeed;
