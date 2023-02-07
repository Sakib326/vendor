import { message, Modal, Popconfirm, Spin, Table } from "antd";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { HiPlus } from "react-icons/hi";
import * as Yup from "yup";

import {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoryQuery,
  useGetSingleCategoryQuery,
  useUpdateCategoryMutation,
} from "../../redux/product/product_api";
import ImageInput from "../@common/image_input/Image_input";

export const AllCategories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState();
  const [categoryState, setCategoryState] = useState({
    title: "",
    file: "",
    image: "",
  });
  const [addCategory, { isLoading: addLoading }] = useAddCategoryMutation();
  const [updateCategory, { isLoading: loadingUpdatecategory }] =
    useUpdateCategoryMutation();
  const { data: singleCategory, isLoading: loadSingleData } =
    useGetSingleCategoryQuery<any>(editId, {
      skip: editId ? false : true,
    });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setCategoryState({
      title: "",
      file: "",
      image: "",
    });
  };
  useEffect(() => {
    if (singleCategory) {
      setCategoryState(singleCategory);
    }
  }, [singleCategory]);
  const { data: categoryList, isLoading: dataLoading } =
    useGetAllCategoryQuery<any>({});
  const [deleteCategory, { isLoading }] = useDeleteCategoryMutation();
  const onDeleteClick = (id: any) => {
    deleteCategory({ id: id }).then((res: any) => {
      if (!res?.error) {
        message.success("Category deleted");
      } else {
        message.error(
          res?.error?.data?.message ??
            "Something went wrong. Try reload the page"
        );
      }
    });
  };
  const columns: any = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Category Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Total Product",
      dataIndex: "products",
      key: "products",
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      render: (_: any, col: any) => (
        <>
          <div className="flex items-center">
            <span
              onClick={() => {
                showModal();
                setEditId(col?.id);
              }}
              className="hover:text-primary transition-all p-1"
            >
              <FiEdit />
            </span>
            <Popconfirm
              placement="right"
              title="Are you sure to delete this ?"
              description="Delete the category"
              onConfirm={(e) => {
                if (col?.products > 0) {
                  message.error(
                    "You can't delete category which contain products."
                  );
                  return;
                }
                onDeleteClick(col?.id);
              }}
              okText="Yes"
              cancelText="No"
            >
              <span className="hover:text-primary transition-all p-1">
                <AiOutlineDelete />
              </span>
            </Popconfirm>
          </div>
        </>
      ),
    },
  ];
  const handleCategory = async (values: any, resetForm: any) => {
    const formArray = new FormData();
    formArray.append("title", values?.title);
    formArray.append("status", "Active");
    formArray.append("description", "");
    formArray.append("parentId", "");
    if (values.file) {
      formArray.append("file", values.file);
    }
    if (values?.id) {
      await updateCategory({ data: formArray, id: values?.id }).then(
        (res: any) => {
          if (!res?.error) {
            resetForm();
            handleCancel();
            message.success("Category updated");
          } else {
            message.error(
              res?.error?.data?.message ??
                "Something went wrong. Try reload the page"
            );
          }
        }
      );
    } else {
      await addCategory(formArray).then((res: any) => {
        if (!res?.error) {
          resetForm();
          handleCancel();
          message.success("Category added");
        } else {
          message.error(
            res?.error?.data?.message ??
              "Something went wrong. Try reload the page"
          );
        }
      });
    }
  };
  const categoryValidationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
  });
  return (
    <div className="p-8">
      <div className="max-w-[1170px] mx-auto w-full">
        <div className="border rounded">
          <div className="p-5 flex justify-between items-center">
            <div>
              <div className="text-black font-medium text-lg">
                Category List
              </div>
              <div className="text-xs">
                Total Category ({categoryList?.totalItems})
              </div>
            </div>
            <span
              onClick={() => {
                showModal();
                setCategoryState({
                  title: "",
                  file: "",
                  image: "",
                });
              }}
              className="btn btn-primary"
            >
              <HiPlus />
              <span>Add New Category</span>
            </span>
          </div>
          <Table
            size="middle"
            dataSource={categoryList?.results ?? []}
            columns={columns}
            rowClassName={(record, index) =>
              index % 2 === 0 ? "bg-[#F8F8F9]" : "bg-[#fff]"
            }
            rowKey="id"
            loading={dataLoading}
          />
        </div>
      </div>
      <Modal
        footer={null}
        title={<div className="text-black ml-1">Category</div>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        wrapClassName="bg-red"
      >
        <div className="mt-4 p-2">
          <Formik
            initialValues={categoryState}
            enableReinitialize={true}
            validationSchema={categoryValidationSchema}
            onSubmit={(values, { resetForm }) => {
              handleCategory(values, resetForm);
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
                    <label className="mb-1">Title</label>
                    <Field
                      type="text"
                      className={`form_control ${
                        errors?.title && touched?.title && "error"
                      }`}
                      placeh
                      placeholder="Title"
                      name="title"
                      value={values?.title ?? ""}
                    />
                    {errors?.title && touched?.title ? (
                      <div className="error">{errors?.title}</div>
                    ) : null}
                  </div>
                  <div>
                    <label className="mb-1">Icon</label>
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

                <div className="flex items-center gap-3 mt-5">
                  <button
                    type="submit"
                    onClick={() => handleSubmit}
                    className="btn btn-primary"
                    disabled={addLoading || loadingUpdatecategory}
                  >
                    {(addLoading ||
                      loadingUpdatecategory ||
                      loadSingleData) && <Spin className="custom_spinner" />}
                    {values?.id ? "Update" : "Create"}
                  </button>
                  <button
                    onClick={() => {
                      handleCancel();
                      resetForm();
                    }}
                    type="button"
                    disabled={addLoading || loadingUpdatecategory}
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

export default AllCategories;
