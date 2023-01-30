import { message, Modal, Select, Spin } from "antd";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import {
  useAddCategoryMutation,
  useAddProductMutation,
  useGetCategoryQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../../redux/product/product_api";
import { onGetSingleProduct } from "../../../redux/product/product_slice";
import WinnersEditor from "../../@common/editor/bdwinners_editor";
import ImageInput from "../../@common/image_input/Image_input";

export const ProductAdd = () => {
  const { id } = useParams();
  const [getSingleProduct, setGetSingleProduct] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) setGetSingleProduct(false);
    else {
      dispatch(
        onGetSingleProduct({
          singleProductData: undefined,
        })
      );
    }
  }, [id]);

  const [addCategory, { isLoading }] = useAddCategoryMutation();

  const [addProduct, { isLoading: loadingProduct }] = useAddProductMutation();
  const [updateProduct, { isLoading: loadingUpdateProduct }] =
    useUpdateProductMutation();

  const { data: catData } = useGetCategoryQuery<any>({});
  const { data: singleProduct } = useGetSingleProductQuery<any>(`${id}`, {
    skip: getSingleProduct,
  });
  const { singleProductData } = useSelector((state: any) => state.product);

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
  const productValidationSchema = Yup.object().shape({
    name: Yup.string().required("Product name is required"),
    price: Yup.number()
      .required("Product price is required")
      .typeError("Only number allowed"),
    description: Yup.string().required("Description is required"),
    categoryIds: Yup.number().required("Category is required"),
    hasFile: Yup.bool().oneOf([true], "Image is required"),
    productLink: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url."
      )
      .nullable(),
    discountPrice: Yup.number()
      .typeError("Amount To must be a number")
      .nullable(true)
      .min(0, "Minimum value 0")
      .when("price", (price, schema) => {
        return price > 0
          ? schema.max(price - 1, `Amount must be less than ${price}`)
          : schema.min(0);
      }),
  });
  const categoryValidationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
  });
  const addNewCategory = async (values: any, resetForm: any) => {
    const formArray = new FormData();
    formArray.append("title", values?.title);
    formArray.append("status", "Active");
    formArray.append("description", "");
    formArray.append("parentId", "");
    if (values.file) {
      formArray.append("file", values.file);
    }
    await addCategory(formArray).then((res: any) => {
      if (!res?.error) {
        handleCancel();
        resetForm();
        message.success("Category added");
      } else {
        message.error(
          res?.error?.data?.message ??
            "Something went wrong. Try reload the page"
        );
      }
    });
  };
  const handleProduct = async (values: any) => {
    const formArray = new FormData();
    formArray.append("name", values.name);
    formArray.append("status", "Inactive");
    formArray.append("description", values?.description);
    formArray.append("price", values?.price);
    formArray.append("productLink", values?.productLink);
    formArray.append("discountPrice", values?.discountPrice);

    formArray.append("categoryIds[0]", values?.categoryIds);

    if (values.file) {
      formArray.append("file", values.file);
    }
    if (id) {
      await updateProduct({ data: formArray, id: id }).then((res: any) => {
        if (!res?.error) {
          message.success("Product updated");
        } else {
          message.error(
            res?.error?.data?.message ??
              "Something went wrong. Try reload the page"
          );
        }
      });
    } else {
      await addProduct(formArray).then((res: any) => {
        if (!res?.error) {
          navigate("/products/list");
          message.success("Product added");
        } else {
          message.error(
            res?.error?.data?.message ??
              "Something went wrong. Try reload the page"
          );
        }
      });
    }
  };

  const productsInit = {
    name: "",
    description: "",
    price: undefined,
    discountPrice: undefined,
    categoryIds: undefined,
    file: "",
    productLink: "",
    imageSource: "",
    status: "Inactive",
    hasFile: false,
  };
  return (
    <>
      <div className="p-8">
        <div className="max-w-[1170px] mx-auto w-full text-sm">
          <h4 className="font-medium pb-4 mb-8 border-b">
            {id ? "Edit Product" : "New Product"}
          </h4>
          <Formik
            initialValues={singleProductData ?? productsInit}
            enableReinitialize={true}
            validationSchema={productValidationSchema}
            onSubmit={(values) => {
              handleProduct(values);
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
                        Product Name <span className="text-danger">*</span>
                      </label>
                      <div>
                        <Field
                          type="text"
                          className={`form_control ${
                            errors?.name && touched?.name && "error"
                          }`}
                          placeholder="Product Name"
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
                    <div className="grid grid-cols-[130px_1fr]">
                      <label className="mt-2">Product Link</label>
                      <div>
                        <Field
                          type="text"
                          placeholder="Product Link"
                          className={`form_control ${
                            errors?.productLink &&
                            touched?.productLink &&
                            "error"
                          }`}
                          name="productLink"
                          value={values?.productLink ?? ""}
                        />
                        {errors?.productLink && touched?.productLink ? (
                          <div className="error">{errors?.productLink}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  {/* right */}
                  <div className="border rounded p-5 grid self-start">
                    <div className="grid gap-5">
                      <div className="grid grid-cols-[100px_1fr]">
                        <label className="mt-2">
                          Price <span className="text-danger">*</span>
                        </label>
                        <div>
                          <Field
                            type="number"
                            placeholder="Price"
                            className={`form_control ${
                              errors?.price && touched?.price && "error"
                            }`}
                            name="price"
                            value={values?.price ?? ""}
                            onWheel={(event: any) => event.currentTarget.blur()}
                          />
                          {errors?.price && touched?.price ? (
                            <div className="error">{errors?.price}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className="grid grid-cols-[100px_1fr]">
                        <label className="mt-2">Discount Price</label>
                        <div>
                          <Field
                            type="number"
                            className={`form_control ${
                              errors?.discountPrice &&
                              touched?.discountPrice &&
                              "error"
                            }`}
                            placeholder="Discount Price"
                            name="discountPrice"
                            value={values?.discountPrice ?? ""}
                            onWheel={(event: any) => event.currentTarget.blur()}
                          />
                          {errors?.discountPrice && touched?.discountPrice ? (
                            <div className="error">{errors?.discountPrice}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className="grid grid-cols-[100px_1fr]">
                        <label className="mt-2">
                          Category <span className="text-danger">*</span>
                        </label>
                        <div>
                          <Select
                            className="form_control_select w-full"
                            onChange={(e) => setFieldValue("categoryIds", e)}
                            value={
                              values?.categoryIds ??
                              singleProduct?.categories?.[0]?.id
                            }
                            options={
                              catData?.data?.map((e: any) => {
                                return {
                                  value: e?.id,
                                  label: e?.title,
                                };
                              }) ?? []
                            }
                            placeholder="Select a category"
                          />
                          {errors?.categoryIds && touched?.categoryIds ? (
                            <div className="error">{errors?.categoryIds}</div>
                          ) : null}
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
                        onClick={() => handleSubmit}
                        disabled={loadingProduct || loadingUpdateProduct}
                        className="btn btn-primary"
                      >
                        {(loadingProduct || loadingUpdateProduct) && (
                          <Spin className="custom_spinner" />
                        )}
                        {id ? "Update Product" : "Add Product"}
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
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
              title: "",
              file: "",
            }}
            enableReinitialize={true}
            validationSchema={categoryValidationSchema}
            onSubmit={(values, { resetForm }) => {
              addNewCategory(values, resetForm);
            }}
          >
            {({
              handleSubmit,
              setFieldValue,
              resetForm,
              errors,
              values,
              touched,
            }) => (
              <Form className="w-full">
                <div className="grid gap-5">
                  <div>
                    <label className="mb-1">Title</label>
                    <Field
                      type="text"
                      className="form_control"
                      placeholder="Title"
                      name="title"
                      value={values?.title ?? ""}
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
                        setFieldValue("file", e?.file);
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
                    {isLoading && <Spin className="custom_spinner" />}
                    Create
                  </button>
                  <button
                    onClick={() => {
                      handleCancel();
                      resetForm();
                    }}
                    type="button"
                    disabled={isLoading}
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
