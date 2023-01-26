import { Select, Button, Modal } from "antd";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import WinnersEditor from "../../@common/editor/bdwinners_editor";
import ImageInput from "../../@common/image_input/Image_input";
import { Field, Form, Formik } from "formik";

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: false,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    console.log(info);
    return false;

    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  beforeUpload(file) {
    const isJpgOrPng =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/webp";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG/WEBP file!");
      // setIsError(true);
    }
    const isInSize = file.size / 1024 / 1024 < 2;
    if (!isInSize) {
      message.error(`Image must smaller than 2MB!`);
      // setIsError(true);
    }

    // Prevent upload
    return false;
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

export const ProductAdd = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
                    {/* <div>image picker</div> */}
                    <div>
                      <ImageInput
                        onChange={(e: any) => {
                          console.log("======", e);
                        }}
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
              console.log(values);

              // subscriberForgotPass(values);
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
                    <label className="mb-1">Icon</label>
                    <div>
                      <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                          Click or drag file to this area to upload
                        </p>
                        <p className="ant-upload-hint">
                          Support for a single or bulk upload. Strictly prohibit
                          from uploading company data or other band files
                        </p>
                      </Dragger>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-5">
                  <button type="submit" className="btn btn-primary">
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
