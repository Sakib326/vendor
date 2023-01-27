import { Select, Button, Modal } from "antd";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import WinnersEditor from "../../@common/editor/bdwinners_editor";
import ImageInput from "../../@common/image_input/Image_input";
import { Field, Form, Formik } from "formik";
import { useAddCategoryMutation } from "../../../redux/product/product_api";
import Cookies from "js-cookie";
import axios from "axios";

export const ProductAdd = () => {
  const [addCategory, { isLoading, isError }] = useAddCategoryMutation();
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState(false);
  // 1. Get your axios instance ready
  function createAxios() {
    return axios.create({ withCredentials: true });
  }
  const axiosInstance = createAxios();

  // 2. Make sure you save the cookie after login.
  // I'm using an object so that the reference to the cookie is always the same.
  const cookieJar = {
    myCookies: `bhbkhgbhjbhybhyb`,
  };

  // 3. Add the saved cookie to the request.
  async function request() {
    // read the cookie and set it in the headers
    const response = await axiosInstance.get(
      "http://192.168.68.125:4000/categories",
      {
        headers: {
          cookie: cookieJar.myCookies,
        },
      }
    );
    console.log(response.status);
  }

  request().then(() => console.log("hi"));

  // Cookies.set(
  //   "Authentication",
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJodHRwczovL2RldmFwaS5iZHdpbm5lcnMuY29tIiwiYXVkaWVuY2UiOiJodHRwOi8vZGV2LmJkd2lubmVycy5jb20iLCJzdWJqZWN0IjoiMTIiLCJrZXlpZCI6InZlbmRvciIsImlzVHdvRkFBdXRoZW50aWNhdGVkIjpmYWxzZSwiaWF0IjoxNjc0Nzk3MTE3LCJleHAiOjE2NzQ4ODM1MTd9.3L94V6lUsd46QYKjlPjcASQUL5s2VVWySzC098aWIcc"
  // );
  // Cookies.set(
  //   "Refresh",
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJodHRwczovL2RldmFwaS5iZHdpbm5lcnMuY29tIiwiYXVkaWVuY2UiOiJodHRwOi8vZGV2LmJkd2lubmVycy5jb20iLCJzdWJqZWN0IjoiMTIiLCJrZXlpZCI6InZlbmRvciIsImp3dGlkIjoiOSIsImlhdCI6MTY3NDc5NzExNywiZXhwIjoxNjc1NDAxOTE3fQ.hecCbfUPaeKUIojzhx80qjRlbbxUTKeop5CQFNlRNPI"
  // );
  // Cookies.set(
  //   "ExpiresIn",
  //   "Sat Jan 28 2023 05:25:17 GMT+0000 (Coordinated Universal Time)"
  // );

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const addNewCategory = async (values: any) => {
    const formArray = new FormData();
    formArray.append("name", values.name);
    if (values.file) {
      formArray.append("file", values.file);
    }
    await addCategory(formArray).then((res: any) => {
      console.log("=======================", res);

      if (!res?.error) {
        handleCancel();
        message.success("Category added");
      } else {
        message.error(
          res?.error?.data?.message ??
            "Something went wrong. Try reload the page"
        );
      }
    });
  };
  return (
    <>
      <div className="p-8">
        <div className="max-w-[1170px] mx-auto w-full text-sm">
          <h4 className="font-medium pb-4 mb-8 border-b">New Product</h4>
          <form action="#" className="w-full">
            <div className="grid grid-cols-[2fr_1fr] gap-7">
              {/* left */}
              <div className="grid gap-5 self-start">
                <div className="grid grid-cols-[130px_1fr]">
                  <label className="mt-2">Business Name</label>
                  <div>
                    <input
                      type="text"
                      className="form_control error"
                      placeholder="Business Name"
                    />
                    <div className="error">Required field</div>
                  </div>
                </div>
                <div className="grid grid-cols-[130px_1fr]">
                  <label className="mt-2">Description</label>
                  <div>
                    <WinnersEditor
                      name="summary"
                      height="150"
                      contents={description ? description : ""}
                      // className="editor_error"
                      onChange={(event: any) => {
                        const content = event.target.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        );

                        if (content) {
                          setDescription(event.target.value);
                        }
                      }}
                      // onKeyDown={(event: any) => {
                      //   if (event?.key === "Tab") event.preventDefault();
                      // }}
                    />
                    {/* <div className="error">Required field</div> */}
                  </div>
                </div>
                <div className="grid grid-cols-[130px_1fr]">
                  <label className="mt-2">Product Link</label>
                  <div>
                    <input
                      type="text"
                      className="form_control"
                      placeholder="Product Link"
                    />
                    {/* <div className="error">Required field</div> */}
                  </div>
                </div>
              </div>
              {/* right */}
              <div className="border rounded p-5 grid self-start">
                <div className="grid gap-5">
                  <div className="grid grid-cols-[100px_1fr]">
                    <label className="mt-2">Price</label>
                    <div>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Price"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-[100px_1fr]">
                    <label className="mt-2">Category</label>
                    <div>
                      <Select
                        className="form_control_select w-full"
                        onChange={handleChange}
                        options={[
                          { value: "Edu Tech", label: "Edu Tech" },
                          { value: "Service", label: "Service" },
                          { value: "Manufacturing", label: "Manufacturing" },
                        ]}
                        placeholder="Select a category"
                      />
                      <button
                        onClick={showModal}
                        type="button"
                        className="btn btn-primary mt-3 px-2 py-1.5 text-xs"
                      >
                        <HiPlus />
                        <span>Create Category</span>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-[100px_1fr]">
                    <label className="mt-2">Images</label>
                    <div>
                      <ImageInput
                        onChange={(e: any) => {
                          console.log("======", e);
                        }}
                        imageSource="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-[100px_1fr]">
                    <label className="mt-2">Status</label>
                    <div className="px-3 py-2 bg-[#ebebed] w-max rounded text-sm self-center">
                      Draft
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Modal
        footer={null}
        title={<div className="text-black ml-1">Create New Category</div>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        wrapClassName="bg-red"
      >
        <div className="mt-4 p-2">
          <Formik
            initialValues={{
              name: "",
              file: "",
            }}
            enableReinitialize={true}
            // validationSchema={validationSchema}
            onSubmit={(values) => {
              addNewCategory(values);
            }}
          >
            {({ handleSubmit, setFieldValue, errors, values, touched }) => (
              <Form className="w-full">
                <div className="grid gap-5">
                  <div>
                    <label className="mb-1">Title</label>
                    <Field
                      type="text"
                      className="form_control"
                      placeholder="Title"
                      name="name"
                      value={values?.name ?? ""}
                    />
                  </div>

                  <div>
                    {/* <div>
                      <label className="mb-1">Icon</label>
                      <div className="flex flex-col justify-center items-center border-[1px] border-[#EEEEEE] hover:border-[#AC224D] transition-all py-[27px] rounded-[6px]">
                        <p className="text-[48px] mb-5">
                          <RxUpload />
                        </p>
                        <div className="max-w-[290px] w-full mx-auto">
                          <p className="text-center text-base text-[#181B31] font-medium mb-[10px]">
                            Drop files here or click to upload
                          </p>
                          <p className=" text-center text-[12px]">
                            This is just a demo dropzone. Selected files are not
                            actually uploaded.
                          </p>
                        </div>
                      </div>
                    </div> */}
                    <label className="mb-1">Icon</label>
                    <ImageInput
                      onChange={(e: any) => {
                        setFieldValue("file", e);
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-5">
                  <button
                    type="submit"
                    onClick={() => handleSubmit}
                    className="btn btn-primary"
                  >
                    Create
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
    </>
  );
};

export default ProductAdd;
