import { message, Popconfirm, Spin, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit, FiEye } from "react-icons/fi";
import { HiPlus } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import {
  useDeleteCampaignMutation,
  useGetAllCampaignQuery,
} from "../../../redux/campaign/campaign_api";

export const CampaignList = () => {
  const navigate = useNavigate();
  const { data: campaignList, isLoading: dataLoading } =
    useGetAllCampaignQuery<any>({});
  const [deleteCampaign, { isLoading }] = useDeleteCampaignMutation();
  const onDeleteClick = (id: any) => {
    deleteCampaign({ id: id }).then((res: any) => {
      if (!res?.error) {
        message.success("Campaign deleted");
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
      title: "Campaign Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Impression",
      dataIndex: "clicks",
      key: "clicks",
    },
    {
      title: "Take",
      dataIndex: "totalParticipants",
      key: "totalParticipants",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_: any, col: any) => (
        <>
          {(col?.status === "Pending" || col?.status === "Review") && (
            <div className="text-[#FFA800] bg-[#f9ebd1] text-sm px-3 py-1 text-center rounded w-max">
              {col?.status}
            </div>
          )}
          {(col?.status === "Published" || col?.status === "Selection") && (
            <div className="text-[#7367F0] bg-[#e9e7fd] text-sm px-3 py-1 text-center rounded  w-max">
              {col?.status}
            </div>
          )}
          {col?.status === "Completed" && (
            <div className="text-[#28C76F] bg-[#e7f0e3] text-sm px-3 py-1 text-center rounded  w-max">
              {col?.status}
            </div>
          )}
          {(col?.status === "Rejected" || col?.status === "Blocked") && (
            <div className="text-red-700 bg-red-100 text-sm px-3 py-1 text-center rounded  w-max">
              {col?.status}
            </div>
          )}
        </>
      ),
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
                if (col?.status !== ("Published" || "Completed")) {
                  return message.error(
                    `Details available only for published and completed campaign`
                  );
                } else {
                  navigate(`/campaigns/${col?.uuid}`);
                }
              }}
              className="hover:text-primary transition-all p-1"
            >
              <FiEye />
            </span>
            <span
              onClick={() => {
                if (col?.status !== "Pending") {
                  message.error(`You can't edit ${col?.status} campaign`);
                } else {
                  navigate(`/campaigns/edit/${col?.uuid}`);
                }
              }}
              className="hover:text-primary transition-all p-1"
            >
              <FiEdit />
            </span>
            <Popconfirm
              placement="right"
              title="Are you sure to delete this ?"
              description="Delete the campaign"
              onConfirm={(e) => {
                if (col?.status === "ACTIVE") {
                  message.error("You can't delete an active campaign");
                  return;
                }
                onDeleteClick(col?.uuid);
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
              <div className="text-black font-medium text-lg">
                Campaign List
              </div>
              <div className="text-xs">
                Total Campaign ({campaignList?.totalItems})
              </div>
            </div>
            <div>
              <Link to="/campaigns/categories" className="btn btn-primary mr-5">
                <HiPlus />
                <span>Category</span>
              </Link>
              <Link to="/campaigns/add" className="btn btn-primary ">
                <HiPlus />
                <span>Add New Campaign</span>
              </Link>
            </div>
          </div>
          <Table
            size="middle"
            dataSource={campaignList?.results ?? []}
            columns={columns}
            rowClassName={(record, index) =>
              index % 2 === 0 ? "bg-[#F8F8F9]" : "bg-[#fff]"
            }
            rowKey="id"
            loading={dataLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignList;
