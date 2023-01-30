import { DatePicker, message, Select, Spin } from "antd";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import WinnersEditor from "../../@common/editor/bdwinners_editor";
import ImageInput from "../../@common/image_input/Image_input";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import moment from "moment";
import { RangePickerProps } from "antd/es/date-picker";
import * as Yup from "yup";
import { useAddCampaignMutation } from "../../../redux/campaign/campaign_api";

const { RangePicker } = DatePicker;

const CampaignAdd = () => {
  const [addCampaign, { isLoading: loadingCampaign, isError: CampaignError }] =
    useAddCampaignMutation();
  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[],
    setFieldValue: Function
  ) => {
    if (dates) {
      setFieldValue("startDate", dateStrings[0]);
      setFieldValue("endDate", dateStrings[1]);
    } else {
      console.log("Clear");
    }
  };
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf("day");
  };
  const campaignValidationSchema = Yup.object().shape({
    name: Yup.string().required("Campaign name is required"),
    giftValue: Yup.number()
      .required("Gift value is required")
      .typeError("Only number allowed"),
    winnerCount: Yup.number()
      .required("Number of winner is required")
      .typeError("Only number allowed"),
  });
  const productAddInit = {
    name: "",
    description: "",
    type: "BRAND_AWARENESS",
    startDate: moment(new Date(), "DD/MM/YYYY"),
    endDate: moment(new Date(), "DD/MM/YYYY"),
    thumbnail: "",
    giftValue: undefined,
    winnerCount: undefined,
    promotionType: "IMAGE",
    promotionValue: "",
  };
  const handleCampaign = async (values: any) => {
    const formArray = new FormData();
    if (values.promotionValue) {
      formArray.append("promotionValue", values.promotionValue);
    }
    if (values.thumbnail) {
      formArray.append("thumbnail", values.thumbnail);
    }
    formArray.append("name", values.name);
    formArray.append("description", values?.description);
    formArray.append("type", values?.type);
    formArray.append("startDate", values?.startDate);
    formArray.append("endDate", values?.endDate);
    formArray.append("giftValue", values?.giftValue);
    formArray.append("winnerCount", values?.winnerCount);
    formArray.append("promotionType", values?.promotionType);

    await addCampaign(formArray).then((res: any) => {
      if (!res?.error) {
        message.success("Campaign created & submitted for review");
      } else {
        message.error(
          res?.error?.data?.message ??
            "Something went wrong. Try reload the page"
        );
      }
    });
  };
  return (
    <div className="p-8">
      <div className="max-w-[1170px] mx-auto w-full text-sm">
        <h4 className="font-medium pb-4 mb-8 border-b">New Campaign</h4>

        <Formik
          initialValues={productAddInit}
          enableReinitialize={false}
          // validationSchema={campaignValidationSchema}
          onSubmit={(values) => {
            // return;
            handleCampaign(values);
          }}
        >
          {({ handleSubmit, setFieldValue, errors, values, touched }) => (
            <Form className="w-full">
              <div className="grid grid-cols-[2fr_1fr] gap-7">
                {/* left */}
                <div className="grid gap-5 self-start">
                  <div className="grid grid-cols-[130px_1fr]">
                    <label className="mt-2">
                      <span>Campaign Name</span>
                      <span className="text-danger">*</span>
                    </label>
                    <div>
                      <Field
                        type="text"
                        className={`form_control ${
                          errors?.name && touched?.name && "error"
                        }`}
                        placeholder="Campaign Name"
                        name="name"
                        value={values?.name ?? ""}
                      />
                      {errors?.name && touched?.name ? (
                        <div className="error">{errors?.name}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="grid grid-cols-[130px_1fr]">
                    <label className="mt-2">
                      Campaign Type <span className="text-danger">*</span>
                    </label>

                    <div className="campaign_type_wrapper max-w-[90%] grid grid-cols-2 gap-5">
                      <label
                        htmlFor="BRAND_AWARENESS "
                        className="cursor-pointer"
                      >
                        <input
                          id="BRAND_AWARENESS "
                          type="radio"
                          name="type"
                          className="hidden campaign_type_input"
                          checked={
                            values?.type === "BRAND_AWARENESS" ? true : false
                          }
                          onChange={(e: any) =>
                            setFieldValue(
                              "type",
                              e?.target?.checked === true
                                ? "BRAND_AWARENESS"
                                : "WEBSITE_PROMOTION"
                            )
                          }
                        />
                        <div className="campaign_type_box border p-4 rounded">
                          <ReactSVG src="/icons/brand-4chan.svg" />
                          <div className="text-black text-base font-medium mt-2 mb-1">
                            Brand Awarness
                          </div>
                          <div>
                            Lorem ipsum dolor sit amet consectetur. Ligula
                            commodo tempor.
                          </div>
                        </div>
                      </label>
                      <label
                        htmlFor="WEBSITE_PROMOTION"
                        className="cursor-pointer"
                      >
                        <input
                          id="WEBSITE_PROMOTION"
                          type="radio"
                          name="type"
                          className="hidden campaign_type_input"
                          checked={
                            values?.type === "WEBSITE_PROMOTION" ? true : false
                          }
                          onChange={(e: any) =>
                            setFieldValue(
                              "type",
                              e?.target?.checked === true
                                ? "WEBSITE_PROMOTION"
                                : "BRAND_AWARENESS"
                            )
                          }
                        />
                        <div className="campaign_type_box border p-4 rounded">
                          <ReactSVG
                            src="/icons/website.svg"
                            className="website_fill"
                          />
                          <div className="text-black text-base font-medium mt-2 mb-1">
                            Website Promotion
                          </div>
                          <div>
                            Lorem ipsum dolor sit amet consectetur. Ligula
                            commodo tempor.
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-[130px_1fr]">
                    <label className="mt-2">Description</label>
                    <div>
                      <WinnersEditor
                        name="description"
                        height="150"
                        contents={
                          values?.description ? values?.description : ""
                        }
                        className={
                          errors?.description &&
                          touched?.description &&
                          `editor_error`
                        }
                        onChange={(event: any) => {
                          const content = event.target.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          );

                          if (content) {
                            setFieldValue("description", event.target.value);
                          }
                        }}
                      />
                      {errors?.description && touched?.description ? (
                        <div className="error">{errors?.description}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <div className="border-t border-b">
                      <p className="py-[10px] text-[#181B31] font-medium">
                        Terms & Conditions
                      </p>
                    </div>
                    <ol className="list-decimal	pl-4 pt-4 flex flex-col gap-2 ">
                      <li className="text-[#808291] text-[14px]">
                        Lorem ipsum dolor sit amet consectetur. Mollis integer
                        condimentum blandit.
                      </li>
                      <li className="text-[#808291] text-[14px]">
                        Lorem ipsum dolor sit amet consectetur. Mollis integer
                        condimentum blandit.
                      </li>
                      <li className="text-[#808291] text-[14px]">
                        Lorem ipsum dolor sit amet consectetur. Mollis integer
                        condimentum blandit.
                      </li>
                      <li className="text-[#808291] text-[14px]">
                        Lorem ipsum dolor sit amet consectetur. Mollis integer
                        condimentum blandit.
                      </li>
                      <li className="text-[#808291] text-[14px]">
                        Lorem ipsum dolor sit amet consectetur. Mollis integer
                        condimentum blandit.
                      </li>
                    </ol>
                  </div>
                </div>
                {/* right */}
                <div className="border rounded p-5 grid self-start">
                  <div className="grid gap-5">
                    <div className="grid grid-cols-[120px_1fr]">
                      <label className="mt-2">
                        <span>
                          Dates <span className="text-danger">*</span>
                        </span>
                        <br />(<span className="text-[11px]">start & end</span>)
                      </label>
                      <div>
                        <RangePicker
                          size={"large"}
                          className="text-sm bg-[#f9f9f9] border-[#f9f9f9]"
                          // defaultValue={[
                          //   dayjs(
                          //     `${moment(values?.startDate, "DD/MM/YYYY")}`,
                          //     "DD/MM/YYYY"
                          //   ),
                          //   dayjs(
                          //     `${moment(values?.endDate, "DD/MM/YYYY")}`,
                          //     "DD/MM/YYYY"
                          //   ),
                          // ]}
                          disabledDate={disabledDate}
                          format="YYYY-MM-DD"
                          onChange={(dates, dateStrings) => {
                            onRangeChange(dates, dateStrings, setFieldValue);
                          }}
                        />
                        {errors?.endDate && touched?.endDate ? (
                          <div className="error">Field is required</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="grid grid-cols-[120px_1fr]">
                      <label className="mt-2">
                        Gift Value <span className="text-danger">*</span>
                      </label>
                      <div>
                        <Field
                          type="number"
                          placeholder="৳"
                          name="giftValue"
                          className={`form_control ${
                            errors?.giftValue && touched?.giftValue && "error"
                          }`}
                          value={values?.giftValue ?? undefined}
                          onWheel={(event: any) => event.currentTarget.blur()}
                        />
                        {errors?.giftValue && touched?.giftValue ? (
                          <div className="error">{errors?.giftValue}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="grid grid-cols-[120px_1fr]">
                      <label className="mt-2">Thumbnail</label>
                      <div>
                        <ImageInput
                          onChange={(e: any) => setFieldValue("thumbnail", e)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-[120px_1fr]">
                      <label className="mt-2">
                        Total Winner <span className="text-danger">*</span>
                      </label>
                      <div>
                        <Field
                          type="number"
                          placeholder="Number of winner"
                          name="winnerCount"
                          className={`form_control ${
                            errors?.winnerCount &&
                            touched?.winnerCount &&
                            "error"
                          }`}
                          value={values?.winnerCount ?? undefined}
                          onWheel={(event: any) => event.currentTarget.blur()}
                        />
                        {errors?.winnerCount && touched?.winnerCount ? (
                          <div className="error">{errors?.winnerCount}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="grid grid-cols-[120px_1fr]">
                      <label className="mt-2">
                        Promotion Type <span className="text-danger">*</span>
                      </label>
                      <div>
                        <Select
                          className="form_control_select w-full"
                          onChange={(e) => {
                            setFieldValue("promotionType", e);
                            setFieldValue("promotionValue", "");
                          }}
                          options={[
                            { value: "IMAGE", label: "Image" },
                            { value: "YOUTUBE", label: "Youtube" },
                            { value: "VIMEO", label: "Vimeo" },
                          ]}
                          placeholder="Select a category"
                          defaultValue={values?.promotionType}
                        />
                        {errors?.promotionType && touched?.promotionType ? (
                          <div className="error">{errors?.promotionType}</div>
                        ) : null}
                      </div>
                    </div>
                    {values?.promotionType == "YOUTUBE" ||
                    values?.promotionType == "VIMEO" ? (
                      <div className="grid grid-cols-[120px_1fr]">
                        <label className="mt-2">
                          <span>
                            {values?.promotionType === "YOUTUBE"
                              ? "Youtube "
                              : "Vimeo "}
                            Link
                          </span>{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <div>
                          <Field
                            type="text"
                            className={`form_control ${
                              errors?.promotionValue &&
                              touched?.promotionValue &&
                              "error"
                            }`}
                            placeholder="Enter link"
                            name="promotionValue"
                            value={values?.promotionValue ?? ""}
                          />
                          {errors?.promotionValue && touched?.promotionValue ? (
                            <div className="error">
                              {errors?.promotionValue}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-[120px_1fr]">
                        <label className="mt-2">Image</label>
                        <div>
                          <ImageInput
                            onChange={(e: any) =>
                              setFieldValue("promotionValue", e)
                            }
                          />
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-[120px_1fr]">
                      <label className="mt-2">Status</label>
                      <div className="px-3 py-2 bg-[#ebebed] w-max rounded text-sm self-center">
                        Draft
                      </div>
                    </div>
                    <button
                      type="submit"
                      // onClick={() => handleSubmit}
                      onClick={() => {
                        handleSubmit();
                      }}
                      disabled={loadingCampaign}
                      className="btn btn-primary"
                    >
                      {loadingCampaign && <Spin className="custom_spinner" />}
                      Publish
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CampaignAdd;
