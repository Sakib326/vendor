import { Dropdown, MenuProps, message, Modal, Popconfirm, Space } from "antd";
import { Field, Form, Formik } from "formik";
import parse from "html-react-parser";
import queryString from "query-string";
import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoArrowRedoOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import {
  useAddFeedMutation,
  useDeleteFeedMutation,
  useGetAllFeedQuery,
  useGetSingleFeedQuery,
  useUpdateFeedMutation,
} from "../../../redux/feed/feed_api";
import { onGetSingleFeed } from "../../../redux/feed/feed_slice";
import { useGetAllProductQuery } from "../../../redux/product/product_api";
import WinnersEditor from "../../@common/editor/bdwinners_editor";
import ImageInput from "../../@common/image_input/Image_input";
import Skeleton from "../../@common/skeleton";

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
  const [deleteFeed] = useDeleteFeedMutation();
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
          singleFeedData: undefined,
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

  //delete data
  const onDeleteClick = (id: any) => {
    deleteFeed({ id: id }).then((res: any) => {
      if (!res?.error) {
        message.success("Post deleted");
      } else {
        message.error(
          res?.error?.data?.message ??
            "Something went wrong. Try reload the page"
        );
      }
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
      {/* left */}
      <div>
        <div className="border rounded p-5 pb-0 mb-5">
          <div className="flex items-center justify-between mb-4">
            <div className="grid grid-cols-[46px_1fr] gap-6 w-full">
              <div className="border rounded-full flex items-center justify-center p-1 h-[46px]">
                <img
                  crossOrigin="anonymous"
                  src={
                    userProfile?.logo !== "" && userProfile?.logo
                      ? `${import.meta.env.VITE_API_URL}/${userProfile?.logo}`
                      : "https://i.ibb.co/grqf3k6/istockphoto-1300845620-612x612.jpg"
                  }
                  alt="user"
                />
              </div>
              <div
                className="p-[13px] bg-[#8082911a] w-full rounded-[6px] cursor-pointer"
                onClick={showModal}
              >
                <div>What's on your mind ?</div>
              </div>
            </div>
          </div>
        </div>
        {/* card */}
        {allFeedLoading ? (
          <div>
            {new Array(8).fill(1).map((_, i) => {
              return <Skeleton height={270} key={i} className="mb-5" />;
            })}
          </div>
        ) : (
          <div>
            {allFeedList && allFeedList?.data?.length > 0 ? (
              <div>
                {allFeedList?.data.map((item: any, i: any) => {
                  return (
                    <div className="border rounded p-5 pb-0 mb-5">
                      <div className="flex items-center justify-between mb-4">
                        <div className="grid grid-cols-[46px_1fr] gap-6">
                          <div className="border rounded-full flex items-center justify-center p-1">
                            <img
                              crossOrigin="anonymous"
                              src={
                                userProfile?.logo !== "" && userProfile?.logo
                                  ? `${import.meta.env.VITE_API_URL}/${
                                      userProfile?.logo
                                    }`
                                  : "https://i.ibb.co/grqf3k6/istockphoto-1300845620-612x612.jpg"
                              }
                              alt="user"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-black">
                              {userProfile?.businessName}
                            </div>
                            <div className="text-sm">Yestarday at 5:06 PM</div>
                          </div>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              setGetSingleFeed(item?.id);
                              showModal();
                            }}
                            className="mr-3"
                          >
                            <FiEdit />
                          </button>
                          <Popconfirm
                            placement="right"
                            title="Are you sure to delete this ?"
                            description="Delete the post"
                            onConfirm={(e) => {
                              onDeleteClick(item?.id);
                            }}
                            okText="Yes"
                            cancelText="No"
                          >
                            <button>
                              <AiOutlineDelete />
                            </button>
                          </Popconfirm>
                        </div>
                      </div>

                      {item?.title &&
                        item?.title !== "" &&
                        item?.title !== null && (
                          <div className="mb-5 text-sm font-medium text-black">
                            {item?.title}
                          </div>
                        )}
                      {item?.description &&
                        item?.description !== "" &&
                        item?.description !== null && (
                          <div className="mb-5 text-sm">
                            {parse(item?.description)}
                          </div>
                        )}
                      {item?.image &&
                        item?.image !== "" &&
                        item?.image !== null && (
                          <div className="mb-4">
                            <img
                              crossOrigin="anonymous"
                              src={`${import.meta.env.VITE_API_URL}/${
                                userProfile?.logo
                              }`}
                              alt={item?.title}
                            />
                          </div>
                        )}

                      <div className="flex items-center gap-4 mb-5">
                        <button
                          type="button"
                          className="flex items-center gap-2"
                        >
                          <FaRegHeart />
                          <span className="text-sm">25</span>
                        </button>
                        <button
                          type="button"
                          className="flex items-center gap-2"
                        >
                          <TiMessages />
                          <span className="text-sm">24</span>
                        </button>
                        <button
                          type="button"
                          className="flex items-center gap-2"
                        >
                          <IoArrowRedoOutline />
                        </button>
                      </div>

                      <div className="reply">
                        <ul>
                          <li className="grid grid-cols-[42px_1fr] gap-3 mb-3">
                            <div className="w-full h-[42px]">
                              <img
                                className="rounded w-full h-full object-cover"
                                src="https://xyz.ir/wp-content/uploads/2021/05/avatar.jpg.320x320px.jpg"
                                alt="user"
                              />
                            </div>
                            <div>
                              <div className="flex items-center justify-between">
                                <div className="mb-1">
                                  <span className="font-medium text-black mr-2">
                                    Shamim Khan
                                  </span>
                                  <span className="text-sm">1 day ago</span>
                                </div>
                                <button type="button" className="text-sm">
                                  Reply
                                </button>
                              </div>
                              <div className="text-[#3F4254] text-sm">
                                They stop you from indulging in poorly
                                thought-out metaphors about driving and keep you
                                focused on the overall
                              </div>
                            </div>
                          </li>
                          <li className="grid grid-cols-[42px_1fr] gap-3 mb-3">
                            <div className="w-full h-[42px]">
                              <img
                                className="rounded w-full h-full object-cover"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGa_Pf4i53Wxs_HrjmSgMEhE1Ac7rPhtFv2FpVCE0nHTHugg_iWgc9T5EqSManZ71nbw&usqp=CAU"
                                alt="user"
                              />
                            </div>
                            <div>
                              <div className="flex items-center justify-between">
                                <div className="mb-1">
                                  <span className="font-medium text-black mr-2">
                                    Mizan Khan
                                  </span>
                                  <span className="text-sm">1 day ago</span>
                                </div>
                                <button type="button" className="text-sm">
                                  Reply
                                </button>
                              </div>
                              <div className="text-[#3F4254] text-sm">
                                They stop you from indulging in poorly
                                thought-out metaphors about driving and keep you
                                focused on the overall
                              </div>
                            </div>
                          </li>
                          <li className="grid grid-cols-[42px_1fr] gap-3 mb-3">
                            <div className="w-full h-[42px]">
                              <img
                                className="rounded w-full h-full object-cover"
                                src="https://t3.ftcdn.net/jpg/02/11/41/90/360_F_211419019_XMsPr1uBdlJGKvlSRLZm5ZYzAEQvfFO2.jpg"
                                alt="user"
                              />
                            </div>
                            <div>
                              <div className="flex items-center justify-between">
                                <div className="mb-1">
                                  <span className="font-medium text-black mr-2">
                                    Sakib Rahman
                                  </span>
                                  <span className="text-sm">1 day ago</span>
                                </div>
                                <button type="button" className="text-sm">
                                  Reply
                                </button>
                              </div>
                              <div className="text-[#3F4254] text-sm">
                                They stop you from indulging in poorly
                                thought-out metaphors about driving and keep you
                                focused on the overall
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="border-t">
                        <textarea
                          className="text-sm p-4"
                          placeholder="Reply..."
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid place-items-center mt-10">
                <img
                  width={500}
                  src="/images/misc/no-data-found.svg"
                  alt="no data found"
                  title="no data found"
                />
                <p>No Data Found !</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* right */}
      <div>
        <div className="border rounded p-5 mb-5">
          <h4 className="mb-3 text-lg">About Company</h4>
          <div className="mb-4">
            {parse(
              userProfile?.overview ? userProfile?.overview : "<p>N/A</p>"
            )}
          </div>
        </div>

        {/* products */}
        {allProductList?.data && allProductList?.data.length > 0 && (
          <div className="mb-5">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg">Product</h4>
              {allProductList?.data && allProductList?.data.length > 10 && (
                <Link to="/products/list" className="text-secondary">
                  View All
                </Link>
              )}
            </div>
            <div className="grid grid-cols-2 gap-5">
              {allProductList?.data.map((item: any, i: any) => {
                return (
                  <div className="flex flex-col" key={i}>
                    <div className="mb-4 w-full h-[170px]">
                      <img
                        crossOrigin="anonymous"
                        className="w-full h-full object-cover"
                        src={
                          item?.image
                            ? `${import.meta.env.VITE_API_URL}/${item?.image}`
                            : "/images/misc/image-placeholder-big.webp"
                        }
                        alt="product"
                      />
                    </div>
                    <div className="text-grey mb-0.5 text-sm">
                      {item?.category}
                    </div>
                    <Link
                      to={`/profile/products/view/${item?.id}`}
                      className="block text-black text-sm mb-1 font-medium"
                    >
                      {item?.name}
                    </Link>

                    <div className="flex items-center gap-2 text-sm">
                      <p className="text-primary font-medium">
                        {item?.discountPrice} BDT
                      </p>
                      {item?.discountPrice !== item?.price && (
                        <p className="line-through">{item?.price}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

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
            // initialValues={{
            //   title: "",
            //   description: "",
            //   shortDescription: "",
            //   status: "Active",
            //   file: undefined,
            // }}
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
