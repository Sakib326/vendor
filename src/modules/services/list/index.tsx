import { message, Popconfirm, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AiOutlineDelete } from "react-icons/ai";
import { FiDelete, FiEdit, FiEye } from "react-icons/fi";
import { HiPlus } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import {
  useDeleteServiceMutation,
  useGetAllServiceQuery,
} from "../../../redux/services/service_api";

interface DataTypeWinners {
  key: string;
  name: string;
  link: string;
  id: string;
  categories?: any;
}

export const ServiceList = () => {
  const { data: allServiceList, isLoading } = useGetAllServiceQuery<any>({});
  const [deleteService] = useDeleteServiceMutation();
  const onDeleteClick = (id: any) => {
    deleteService({ id: id }).then((res: any) => {
      if (!res?.error) {
        message.success("Service deleted");
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
      title: "Service Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Service Link",
      dataIndex: "link",
      key: "link",
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      render: (_, col) => (
        <>
          <div className="flex items-center">
            <Link
              to={`/profile/services/${col?.id}`}
              className="hover:text-primary transition-all p-1"
            >
              <FiEye />
            </Link>
            <Link
              to={`/services/edit/${col?.id}`}
              className="hover:text-primary transition-all p-1"
            >
              <FiEdit />
            </Link>
            <Popconfirm
              placement="right"
              title="Are you sure to delete this ?"
              description="Delete the services"
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
              <div className="text-black font-medium text-lg">Service List</div>
              <div className="text-xs">
                Total Services ({allServiceList?.pagination?.total ?? 0})
              </div>
            </div>
            <Link to="/services/add" className="btn btn-primary ">
              <HiPlus />
              <span>Add New Service</span>
            </Link>
          </div>
          <Table
            size="middle"
            dataSource={allServiceList?.data ?? []}
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

export default ServiceList;
