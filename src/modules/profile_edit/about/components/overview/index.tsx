import { Form, message, Modal, Select, Spin } from "antd";
import { HiPlus } from "react-icons/hi";
import WinnersEditor from "../../../../@common/editor/bdwinners_editor";
import { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Field, Formik } from "formik";
import { useSelector } from "react-redux";
import ImageInput from "../../../../@common/image_input/Image_input";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../../../../redux/auth/auth_api";
import * as Yup from "yup";
import Dragger from "antd/es/upload/Dragger";

const ProfileEditOverview = () => {
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const [isProfileGet, setIsProfileGet] = useState(true);
  const { data: profileData } = useGetProfileQuery("init", {
    skip: isProfileGet,
  });
  const { user } = useSelector((state: any) => state.auth);

  const userProfile =
    user !== ""
      ? user
      : JSON.parse(localStorage.getItem("profileInfo")!)?.profileInfo;
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // Validation schema
  const validationSchema = Yup.object().shape({
    businessName: Yup.string()
      .required("Field is required")
      .max(255, "Must be equal or less than 255 character"),
    businessEmail: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),

    mobile: Yup.string()
      .required("Mobile number is required")
      .matches(
        /(^(\+8801|8801|01|008801))[3-9]{1}(\d){8}$/,
        "Mobile number not valid."
      )
      .typeError("Mobile number not valid. Only number allowed"),
    website: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url."
      )
      .nullable(),
  });
  const updateProfileData = async (values: any) => {
    const formArray = new FormData();

    formArray.append("website", values?.website);
    formArray.append("gMapLink", values?.gMapLink);
    formArray.append("overview", values?.overview);
    formArray.append("businessName", values?.businessName);
    formArray.append("businessEmail", values?.businessEmail);
    formArray.append("mobile", values?.mobile);
    formArray.append("province", values?.province);
    formArray.append("city", values?.city);
    formArray.append("area", values?.area);
    formArray.append("landmark", values?.landmark);
    // if (values?.hobbies?.length > 0) {
    //   values?.hobbies?.map((e: any) => {
    //     formArray.append("hobbies[]", e);
    //   });
    // }
    if (values.logo && values?.logo !== "") {
      formArray.append("logo", values.logo);
    }
    if (values.banner && values?.banner !== "") {
      formArray.append("banner", values.banner);
    }
    await updateProfile(formArray).then((res: any) => {
      if (!res?.error) {
        message.success("Profile Updated");
        setIsProfileGet(false);
      } else {
        message.error(
          res?.error?.data?.message ??
            "Something went wrong. Try reload the page"
        );
      }
    });
  };
  return (
    <div>
      <h4 className="mb-4 pb-2 border-b text-lg font-medium">Edit Profile</h4>

      <Formik
        initialValues={userProfile}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          updateProfileData(values);
        }}
      >
        {({
          handleSubmit,
          setFieldValue,
          errors,
          values,
          touched,
          resetForm,
        }: any) => (
          <Form className="w-full">
            <div className="grid grid-cols-[110px_1fr] gap-[44px] mb-3">
              <span>Avatar</span>
              <ImageInput
                onChange={(e: any) => {
                  setFieldValue("logo", e?.file);
                }}
                imageSource={
                  values?.logo !== "" && values?.logo
                    ? `${import.meta.env.VITE_API_URL}/${values?.logo}`
                    : ""
                }
              />
            </div>
            <div className="grid grid-cols-[110px_1fr] gap-[44px] mb-3">
              <span>Banner</span>
              <ImageInput
                onChange={(e: any) => {
                  setFieldValue("banner", e?.file);
                }}
                imageSource={
                  values?.banner !== "" && values?.banner
                    ? `${import.meta.env.VITE_API_URL}/${values?.banner}`
                    : ""
                }
              />
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-[110px_1fr] items-center gap-[44px]">
                <label>Name</label>
                <Field
                  type="text"
                  className={`form_control ${
                    errors?.businessName && touched?.businessName && "error"
                  }`}
                  name="businessName"
                />
                {errors?.businessName && touched?.businessName ? (
                  <div className="error">{errors?.businessName}</div>
                ) : null}
              </div>
            </div>
            <div className=" grid grid-cols-[110px_1fr] gap-[44px] mt-[10px]">
              <span>Overview</span>
              <div className="input_wrapper">
                <WinnersEditor
                  name="overview"
                  height="250"
                  contents={values?.overview ? values?.overview : ""}
                  onChange={(event: any) => {
                    const content = event.target.value.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    );

                    if (content) {
                      setFieldValue("overview", event.target.value);
                    }
                  }}
                />
              </div>
            </div>
            <div className="text-sm">
              <div className="grid grid-cols-1 gap-x-8 gap-y-5 mt-5">
                <div className="col-span-1">
                  <div className="grid grid-cols-[110px_1fr] items-center gap-[44px]">
                    <label>Mobile Number</label>
                    <Field
                      type="text"
                      className={`form_control ${
                        errors?.mobile && touched?.mobile && "error"
                      }`}
                      placeholder="Example: +880 123 456 7890"
                      name="mobile"
                    />
                    {errors?.mobile && touched?.mobile ? (
                      <div className="error">{errors?.mobile}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="grid grid-cols-[110px_1fr] items-center gap-[44px]">
                    <label>Business Email</label>
                    <Field
                      type="email"
                      className={`form_control ${
                        errors?.businessEmail &&
                        touched?.businessEmail &&
                        "error"
                      }`}
                      placeholder="Example: info@m4yours.com"
                      name="businessEmail"
                    />
                    {errors?.businessEmail && touched?.businessEmail ? (
                      <div className="error">{errors?.businessEmail}</div>
                    ) : null}
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="grid grid-cols-[110px_1fr] items-center gap-[44px]">
                    <label>Website</label>
                    <Field
                      type="text"
                      className={`form_control ${
                        errors?.website && touched?.website && "error"
                      }`}
                      placeholder="Example: m4yours.com"
                      name="website"
                    />
                    {errors?.website && touched?.website ? (
                      <div className="error">{errors?.website}</div>
                    ) : null}
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="grid grid-cols-[110px_1fr] items-center gap-[44px]">
                    <label>Province</label>
                    <Select
                      value={
                        values?.province === "" ? undefined : values?.province
                      }
                      placeholder="Select Province"
                      className="form_control_select"
                      onChange={(e) => {
                        setFieldValue("province", e);
                      }}
                      options={[
                        { value: "Dhaka", label: "Dhaka" },
                        { value: "Rajshahi", label: "Rajshahi" },
                        { value: "Barisal", label: "Barisal" },
                        { value: "Rangpur", label: "Rangpur" },
                        { value: "Chattogram", label: "Chattogram" },
                        { value: "Khulna", label: "Khulna" },
                        { value: "Mymensingh", label: "Mymensingh" },
                        { value: "Sylhet", label: "Sylhet" },
                      ]}
                    />
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="grid grid-cols-[110px_1fr] items-center gap-[44px]">
                    <label>City</label>
                    <Field
                      type="text"
                      className="form_control"
                      placeholder="City"
                      name="city"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="grid grid-cols-[110px_1fr] items-center gap-[44px]">
                    <label>Area</label>
                    <Field
                      type="text"
                      className="form_control"
                      placeholder="Area"
                      name="area"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-[110px_1fr] items-center gap-[44px]">
                    <label>Landmark</label>
                    <Field
                      type="text"
                      className="form_control"
                      placeholder="Example: Flat A&B, Level 6, 308"
                      name="landmark"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-[110px_1fr] items-center gap-[44px]">
                    <label>GMap Embed Code</label>
                    <Field
                      type="text"
                      name="gMapLink"
                      className="form_control"
                      placeholder='Example: <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3652.3073221858604!2d90.3841553149811!3d23.73641788459626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c780d8921d%3A0x548a98b9b05efa42!2sM4YOURS%20IT!5e0!3m2!1sen!2sbd!4v1674454474769!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                    />
                  </div>
                </div>

                {/* <div className="grid grid-cols-[110px_1fr] gap-[44px]">
                  <label className="mt-2">Category</label>
                  <div className="flex justify-center gap-[15px]">
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
                        className="btn btn-secondary mt-3 px-2 py-1.5 text-xs"
                      >
                        <HiPlus />
                        <span>Add More</span>
                      </button>
                    </div>
                    <div className="w-full">
                      <Select
                        className="form_control_select w-full"
                        onChange={handleChange}
                        options={[
                          { value: "instagram", label: "Instagram" },
                          { value: "facebook", label: "Facebook" },
                          { value: "whatsapp", label: "Whatsapp" },
                        ]}
                        placeholder="Instagram"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="flex items-center gap-3 mt-[30px]">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  {isLoading && <Spin className="custom_spinner" />}
                  Save Changes
                </button>
                <button
                  onClick={resetForm}
                  type="button"
                  className="btn btn-grey"
                >
                  Discard
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      {/* <Modal
        footer={null}
        title={<div className="text-black ml-1">Create New Category</div>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        wrapClassName="bg-red"
      >
        <div className="mt-4 p-2">
          <form action="#" className="w-full">
            <div className="grid gap-5">
              <div>
                <label className="mb-1">Title</label>
                <input
                  type="text"
                  className="form_control"
                  placeholder="Title"
                />
              </div>

              <div>
                <label className="mb-1">Icon</label>
                <div className="flex flex-col justify-center items-center border-[1px] border-[#EEEEEE] hover:border-[#AC224D] transition-all py-[27px] rounded-[6px]">
                  <p className="text-[48px]">
                    <InboxOutlined />
                  </p>
                  <div className="max-w-[290px] w-full mx-auto">
                    <p className="text-center text-base text-[#181B31] font-medium mb-[10px]">
                      Click or drag file to this area to upload
                    </p>
                    <p className=" text-center text-[12px]">
                      Support for a single or bulk upload. Strictly prohibit
                      from uploading company data or other band files
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <label className="mb-1">Icon</label>
                <div>
                  <Dragger >
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
          </form>
        </div>
      </Modal> */}
    </div>
  );
};

export default ProfileEditOverview;
