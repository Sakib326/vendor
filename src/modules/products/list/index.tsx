import { message, Popconfirm, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AiOutlineDelete } from "react-icons/ai";
import { FiDelete, FiEdit, FiEye } from "react-icons/fi";
import { HiPlus } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import {
  useDeleteProductMutation,
  useGetAllProductQuery,
} from "../../../redux/product/product_api";

interface DataTypeWinners {
  key: string;
  name: string;
  link: string;
  id: string;
  categories?: any;
}

export const ProductList = () => {
  const { data: allProductList, isLoading } = useGetAllProductQuery<any>({
    pageSize: 1000,
  });
  const [deleteProduct] = useDeleteProductMutation();
  const onDeleteClick = (id: any) => {
    deleteProduct({ id: id }).then((res: any) => {
      if (!res?.error) {
        message.success("Product deleted");
      } else {
        message.error(
          res?.error?.data?.message ??
            "Something went wrong. Try reload the page"
        );
      }
    });
  };
  const columns: ColumnsType<DataTypeWinners> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "categories",
      key: "categories",
      render: (_, col) => <div>{col?.categories?.[0]?.title}</div>,
    },

    {
      title: "Product Link",
      dataIndex: "productLink",
      key: "productLink",
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      render: (_, col) => (
        <>
          <div className="flex items-center">
            <Link
              to={`/profile/products/view/${col?.id}`}
              className="hover:text-primary transition-all p-1"
            >
              <FiEye />
            </Link>
            <Link
              to={`/products/edit/${col?.id}`}
              className="hover:text-primary transition-all p-1"
            >
              <FiEdit />
            </Link>
            <Popconfirm
              placement="right"
              title="Are you sure to delete this ?"
              description="Delete the product"
              onConfirm={(e) => {
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
  return (
    <div className="p-8">
      <div className="max-w-[1170px] mx-auto w-full">
        <div className="border rounded">
          <div className="p-5 flex justify-between items-center">
            <div>
              <div className="text-black font-medium text-lg">Product List</div>
              <div className="text-xs">
                Total Products ({allProductList?.totalItems})
              </div>
            </div>
            <div>
              <Link to="/products/categories" className="btn btn-primary mr-5">
                <span>Category</span>
              </Link>
              <Link to="/products/add" className="btn btn-primary ">
                <HiPlus />
                <span>Add New Product</span>
              </Link>
            </div>
          </div>
          <Table
            size="middle"
            dataSource={allProductList?.results ?? []}
            columns={columns}
            rowClassName={(record, index) =>
              index % 2 === 0 ? "bg-[#F8F8F9]" : "bg-[#fff]"
            }
            rowKey="id"
            loading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
