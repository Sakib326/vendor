import { Form, message, Popconfirm, Select, Spin } from "antd";
import { Field, Formik } from "formik";
import { Fragment, useState } from "react";
import { FiTrash } from "react-icons/fi";
import { HiPlus } from "react-icons/hi";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../../../../redux/auth/auth_api";
import WinnersEditor from "../../../../@common/editor/bdwinners_editor";
import ImageInput from "../../../../@common/image_input/Image_input";

const ProfileEditOverview = () => {
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const [isProfileGet, setIsProfileGet] = useState(true);

  const { data: profileData } = useGetProfileQuery({});
  const { user } = useSelector((state: any) => state.auth);

  const userProfile =
    user !== ""
      ? user
      : JSON.parse(localStorage.getItem("profileInfo")!)?.profileInfo ?? {};
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
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
  let mediaNameSelectOptions = [
    {
      label: "Facebook",
      mediaName: "Facebook",
    },
    {
      label: "Linkedin",
      mediaName: "Linkedin",
    },
    {
      label: "Twitter",
      mediaName: "Twitter",
    },
    {
      label: "Youtube",
      mediaName: "Youtube",
    },
  ];
  const createTuitionOptions = (data: any, mediaNameValue = false) => {
    let exist =
      data && data.length > 0 ? data.map((item: any) => item.label) : [];

    if (mediaNameSelectOptions && mediaNameSelectOptions.length > 0) {
      let mediaNameSelect = [{ label: "Select...", value: "" }];

      if (mediaNameValue) {
        const existItem = mediaNameSelectOptions.filter(
          (exitem: any) => exitem.mediaName == mediaNameValue
        )[0];
        if (existItem && existItem.mediaName != "") {
          mediaNameSelect.push({
            label: existItem.label,
            value: existItem.mediaName,
          });
        }
      }

      mediaNameSelectOptions.map((item) => {
        if (exist && !exist.includes(item.mediaName)) {
          mediaNameSelect.push({
            label: item.label,
            value: item.mediaName,
          });
        }
      });

      return mediaNameSelect;
    }
  };
  const updateProfileData = async (values: any) => {
    console.log(values);
    // return;

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
    if (values?.socialLinks?.length > 0) {
      values?.socialLinks?.map((e: any, index: any) => {
        formArray.append(`socialLinks[${index}]`, JSON?.stringify(e));
      });
    }
    if (
      values.logo &&
      values?.logo !== "" &&
      typeof values?.logo !== "string"
    ) {
      formArray.append("logo", values.logo);
    }
    if (
      values.banner &&
      values?.banner !== "" &&
      typeof values?.banner! == "string"
    ) {
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
  const addMediaItem = (values: any, setFieldValue: any) => {
    setFieldValue("socialLinks", [
      ...values.socialLinks,
      {
        label: "",
        value: "",
      },
    ]);
  };
  //remove item
  const removeMediaItem = (index: any, values: any, setFieldValue: any) => {
    let NewLinks = [...values.socialLinks];
    NewLinks.splice(index, 1);
    setFieldValue("socialLinks", NewLinks);
  };
  //handle media
  const handleSocialMedia = (
    name: any,
    value: any,
    index: any,
    setFieldValue: any
  ) => {
    setFieldValue(`socialLinks.${index}.${name}`, value);
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
            <div className="grid grid-cols-[1fr]  gap-2 md:grid-cols-[110px_1fr] md:gap-[44px] mb-3">
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
            <div className="grid grid-cols-1  gap-2 md:grid-cols-[110px_1fr] md:gap-[44px] mb-3">
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
              <div className="grid grid-cols-1  gap-2 md:grid-cols-[110px_1fr] md:gap-[44px]">
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
            <div className="grid grid-cols-1  gap-2 md:grid-cols-[110px_1fr] md:gap-[44px] mt-[10px]">
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
              <div className="grid grid-cols-[1fr_1fr] gap-x-8 gap-y-5 mt-5">
                <div className="col-span-2 md:col-span-1 ">
                  <div className="grid grid-cols-1 gap-3 lg:grid-cols-[110px_1fr] lg:gap-[44px]">
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
                <div className="col-span-2 md:col-span-1 ">
                  <div className="grid grid-cols-1 gap-3 lg:grid-cols-[110px_1fr] lg:gap-[44px]">
                    <label>Business Email</label>
                    <div>
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
                </div>

                <div className="col-span-2 md:col-span-1">
                  <div className="grid grid-cols-1 gap-3 lg:grid-cols-[110px_1fr] lg:gap-[44px]">
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

                <div className="col-span-2 md:col-span-1">
                  <div className="grid grid-cols-1 gap-3 lg:grid-cols-[110px_1fr] lg:gap-[44px]">
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

                <div className="col-span-2 md:col-span-1">
                  <div className="grid grid-cols-1 gap-3 lg:grid-cols-[110px_1fr] lg:gap-[44px]">
                    <label>City</label>
                    <Field
                      type="text"
                      className="form_control"
                      placeholder="City"
                      name="city"
                    />
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="grid grid-cols-1 gap-3 lg:grid-cols-[110px_1fr] lg:gap-[44px]">
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
                  <div className="grid grid-cols-1 gap-3 lg:grid-cols-[110px_1fr] lg:gap-[44px]">
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
                  <div className="grid grid-cols-1 gap-3 lg:grid-cols-[110px_1fr] lg:gap-[44px]">
                    <label>GMap Embed Code</label>
                    <Field
                      type="text"
                      name="gMapLink"
                      className="form_control"
                      placeholder='Example: <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3652.3073221858604!2d90.3841553149811!3d23.73641788459626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c780d8921d%3A0x548a98b9b05efa42!2sM4YOURS%20IT!5e0!3m2!1sen!2sbd!4v1674454474769!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                    />
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="grid grid-cols-1 gap-3 lg:grid-cols-[110px_1fr] lg:gap-[44px]">
                    <label>Social</label>
                    {/* repeatable fields wrapper */}
                    <div className="grid gap-5">
                      {values.socialLinks &&
                        values.socialLinks.length > 0 &&
                        values.socialLinks.map((item: any, index: any) => {
                          //set value in variable
                          const socialLinksValue =
                            values.socialLinks && values.socialLinks[index]
                              ? values.socialLinks[index]?.label
                              : undefined;
                          let socialMediaNameSelect =
                            createTuitionOptions(
                              values.socialLinks,
                              item?.mediaName
                            ) ?? [];

                          return (
                            <Fragment key={`social_${index}`}>
                              {/* repeatable fields */}
                              <div className="grid grid-cols-[1fr_auto] gap-3 items-center">
                                <div className="grid grid-cols-[1fr_1fr] gap-7">
                                  <div className="grid grid-cols-[40px_1fr] gap-[44px] items-center">
                                    <label>Media</label>
                                    <Select
                                      value={socialLinksValue}
                                      placeholder="Select Province"
                                      className="form_control_select"
                                      onChange={(e) => {
                                        handleSocialMedia(
                                          "label",
                                          e,
                                          index,
                                          setFieldValue
                                        );
                                      }}
                                      options={socialMediaNameSelect}
                                    />
                                  </div>
                                  <div className="grid grid-cols-[40px_1fr] gap-[44px] items-center">
                                    <label>Username</label>
                                    <Field
                                      type="text"
                                      className="form_control"
                                      placeholder="Example: johndoe"
                                      value={
                                        values.socialLinks &&
                                        values.socialLinks[index]
                                          ? values.socialLinks[index]?.value
                                          : undefined
                                      }
                                      name="value"
                                      onChange={(e: any) => {
                                        handleSocialMedia(
                                          "value",
                                          e?.target?.value,
                                          index,
                                          setFieldValue
                                        );
                                      }}
                                    />
                                  </div>
                                </div>
                                {index > 0 && (
                                  <Popconfirm
                                    placement="right"
                                    title="Are you sure to delete this ?"
                                    description="Delete the media"
                                    onConfirm={(e) => {
                                      removeMediaItem(
                                        index,
                                        values,
                                        setFieldValue
                                      );
                                    }}
                                    okText="Yes"
                                    cancelText="No"
                                  >
                                    <button className="hover:text-primary transition-all">
                                      <FiTrash />
                                    </button>
                                  </Popconfirm>
                                )}
                              </div>
                            </Fragment>
                          );
                        })}
                    </div>
                    {/* repeatable fields wrapper end */}
                  </div>
                </div>
              </div>
              {values?.socialLinks?.length < 4 && (
                <div className="flex  justify-end ">
                  <button
                    onClick={(e) => addMediaItem(values, setFieldValue)}
                    type="button"
                    className="btn btn-secondary mt-3 px-2 py-1.5 text-xs "
                  >
                    <HiPlus />
                    <span>Add More</span>
                  </button>
                </div>
              )}
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
    </div>
  );
};

export default ProfileEditOverview;
