import { message, Spin } from "antd";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import {
  useAddServiceMutation,
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
} from "../../../redux/services/service_api";
import { onGetSingleService } from "../../../redux/services/service_slice";
import WinnersEditor from "../../@common/editor/bdwinners_editor";
import ImageInput from "../../@common/image_input/Image_input";

export const ServiceAdd = () => {
  const { id } = useParams();

  const [getSingleService, setGetSingleService] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) setGetSingleService(false);
    else {
      dispatch(
        onGetSingleService({
          singleServiceData: undefined,
        })
      );
    }
  }, [id]);

  const [addService, { isLoading: loadingService }] = useAddServiceMutation();
  const [updateService, { isLoading: loadingUpdateService }] =
    useUpdateServiceMutation();

  const { data: singleService } = useGetSingleServiceQuery<any>(id, {
    skip: getSingleService,
  });
  const { singleServiceData } = useSelector((state: any) => state.service);

  // Validation schema
  const serviceValidationSchema = Yup.object().shape({
    title: Yup.string().required("Service title is required"),
    description: Yup.string().required("Description is required"),
    hasFile: Yup.bool().oneOf([true], "Image is required"),
    link: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url."
      )
      .nullable(),
  });

  const handleService = async (values: any) => {
    const formArray = new FormData();
    formArray.append("title", values.title);
    formArray.append("status", "Active");
    formArray.append("description", values?.description);
    formArray.append("link", values?.link);
    if (values.file) {
      formArray.append("file", values.file);
    }
    if (id) {
      await updateService({ data: formArray, id: id }).then((res: any) => {
        if (!res?.error) {
          message.success("Service updated");
        } else {
          message.error(
            res?.error?.data?.message ??
              "Something went wrong. Try reload the page"
          );
        }
      });
    } else {
      await addService(formArray).then((res: any) => {
        if (!res?.error) {
          navigate("/services/list");
          message.success("Service added");
        } else {
          message.error(
            res?.error?.data?.message ??
              "Something went wrong. Try reload the page"
          );
        }
      });
    }
  };

  const servicesInit = {
    title: "",
    description: "",
    file: "",
    link: "",
    imageSource: "",
    status: "Active",
    hasFile: false,
  };
  return (
    <>
      <div className="p-8">
        <div className="max-w-[1170px] mx-auto w-full text-sm">
          <h4 className="font-medium pb-4 mb-8 border-b">
            {id ? "Edit Service" : "New Service"}
          </h4>
          <Formik
            initialValues={singleServiceData ?? servicesInit}
            enableReinitialize={true}
            validationSchema={serviceValidationSchema}
            onSubmit={(values) => {
              handleService(values);
            }}
          >
            {({
              handleSubmit,
              setFieldValue,
              errors,
              values,
              touched,
            }: any) => (
              <Form className="w-full">
                <div className="grid grid-cols-[2fr_1fr] gap-7">
                  {/* left */}
                  <div className="grid gap-5 self-start">
                    <div className="grid grid-cols-[130px_1fr]">
                      <label className="mt-2">
                        Service Name <span className="text-danger">*</span>
                      </label>
                      <div>
                        <Field
                          type="text"
                          className={`form_control ${
                            errors?.title && touched?.title && "error"
                          }`}
                          placeholder="Service Title"
                          name="title"
                          value={values?.title ?? ""}
                          onChange={(e: any) => {
                            setFieldValue("title", e.target.value);
                          }}
                        />
                        {errors?.title && touched?.title ? (
                          <div className="error">{errors?.title}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="grid grid-cols-[130px_1fr]">
                      <label className="mt-2">
                        Description <span className="text-danger">*</span>
                      </label>
                      <div>
                        <WinnersEditor
                          name="description"
                          height="300"
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

                            setFieldValue("description", event?.target?.value);
                          }}
                        />
                        {errors?.description && touched?.description ? (
                          <div className="error">{errors?.description}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="grid grid-cols-[130px_1fr]">
                      <label className="mt-2">Service Link</label>
                      <div>
                        <Field
                          type="text"
                          placeholder="Service Link"
                          className={`form_control ${
                            errors?.link && touched?.link && "error"
                          }`}
                          name="link"
                          value={values?.link ?? ""}
                        />
                        {errors?.link && touched?.link ? (
                          <div className="error">{errors?.link}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  {/* right */}
                  <div className="border rounded p-5 grid self-start">
                    <div className="grid gap-5">
                      <div className="grid grid-cols-[100px_1fr]">
                        <label className="mt-2">
                          Images <span className="text-danger">*</span>
                        </label>
                        <div>
                          <ImageInput
                            onChange={(e: any) => {
                              setFieldValue("file", e?.file);
                              setFieldValue("hasFile", !e ? false : true);
                            }}
                            imageSource={
                              values?.image
                                ? `${import.meta.env.VITE_API_URL}/${
                                    values?.image
                                  }`
                                : ""
                            }
                            errorMessage={
                              (errors?.hasFile &&
                                touched?.hasFile &&
                                errors?.hasFile) ??
                              undefined
                            }
                            maxSize={300}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-[100px_1fr]">
                        <label className="mt-2">Status</label>
                        <div className="px-3 py-2 bg-[#ebebed] w-max rounded text-sm self-center">
                          Active
                        </div>
                      </div>
                      <button
                        type="submit"
                        onClick={() => handleSubmit()}
                        disabled={loadingService || loadingUpdateService}
                        className="btn btn-primary"
                      >
                        {(loadingService || loadingUpdateService) && (
                          <Spin className="custom_spinner" />
                        )}
                        {id ? "Update Service" : "Add Service"}
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ServiceAdd;
