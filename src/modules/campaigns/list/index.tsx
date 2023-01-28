import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { FiEdit, FiEye } from "react-icons/fi";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useGetAllCampaignQuery } from "../../../redux/campaign/campaign_api";

interface DataTypeWinners {
  key: string;
  name: string;
  startDate: string;
  endDate: string;
  totalViews: string;
  totalParticipants: string;
  totalTake: string;
  status: string;
}

const data = [
  {
    key: "1",
    id: "01",
    name: "Recognize Misinformation on the Internet",
    startDate: "Apr 09, 2011",
    endDate: "Apr 09, 2011",
    views: "2345",
    impression: "234",
    totalTake: "534",
    status: "pending",
  },
  {
    key: "2",
    id: "02",
    name: "A Steal Might Actually Be a Raw Deal",
    startDate: "Apr 09, 2011",
    endDate: "Apr 09, 2011",
    views: "2345",
    impression: "234",
    totalTake: "534",
    status: "active",
  },
  {
    key: "3",
    id: "03",
    name: "Toxic Trade-Offs at Facebook",
    startDate: "Apr 09, 2011",
    endDate: "Apr 09, 2011",
    views: "2345",
    impression: "234",
    totalTake: "534",
    status: "complete",
  },
  {
    key: "4",
    id: "04",
    name: "You Can’t Find a Laptop. Now What?",
    startDate: "Apr 09, 2011",
    endDate: "Apr 09, 2011",
    views: "2345",
    impression: "234",
    totalTake: "534",
    status: "pending",
  },
  {
    key: "5",
    id: "05",
    name: "A Steal Might Actually Be a Raw Deal",
    startDate: "Apr 09, 2011",
    endDate: "Apr 09, 2011",
    views: "2345",
    impression: "234",
    totalTake: "534",
    status: "active",
  },
  {
    key: "6",
    id: "06",
    name: "Recognize Misinformation on the Internet",
    startDate: "Apr 09, 2011",
    endDate: "Apr 09, 2011",
    views: "2345",
    impression: "234",
    totalTake: "534",
    status: "complete",
  },
  {
    key: "7",
    id: "07",
    name: "A Steal Might Actually Be a Raw Deal",
    startDate: "Apr 09, 2011",
    endDate: "Apr 09, 2011",
    views: "2345",
    impression: "234",
    totalTake: "534",
    status: "pending",
  },
  {
    key: "8",
    id: "08",
    name: "Toxic Trade-Offs at Facebook",
    startDate: "Apr 09, 2011",
    endDate: "Apr 09, 2011",
    views: "2345",
    impression: "234",
    totalTake: "534",
    status: "active",
  },
  {
    key: "9",
    id: "09",
    name: "You Can’t Find a Laptop. Now What?",
    startDate: "Apr 09, 2011",
    endDate: "Apr 09, 2011",
    views: "2345",
    impression: "234",
    totalTake: "534",
    status: "pending",
  },
  {
    key: "10",
    id: "10",
    name: "A Steal Might Actually Be a Raw Deal",
    startDate: "Apr 09, 2011",
    endDate: "Apr 09, 2011",
    views: "2345",
    impression: "234",
    totalTake: "534",
    status: "active",
  },
  {
    key: "11",
    id: "11",
    name: "Recognize Misinformation on the Internet",
    startDate: "Apr 09, 2011",
    endDate: "Apr 09, 2011",
    views: "2345",
    impression: "234",
    totalTake: "534",
    status: "complete",
  },
  {
    key: "12",
    id: "12",
    name: "A Steal Might Actually Be a Raw Deal",
    startDate: "Apr 09, 2011",
    endDate: "Apr 09, 2011",
    views: "2345",
    impression: "234",
    totalTake: "534",
    status: "pending",
  },
  {
    key: "13",
    id: "13",
    name: "Toxic Trade-Offs at Facebook",
    startDate: "Apr 09, 2011",
    endDate: "Apr 09, 2011",
    views: "2345",
    impression: "234",
    totalTake: "534",
    status: "active",
  },
  {
    key: "14",
    id: "14",
    name: "You Can’t Find a Laptop. Now What?",
    startDate: "Apr 09, 2011",
    endDate: "Apr 09, 2011",
    views: "2345",
    impression: "234",
    totalTake: "534",
    status: "pending",
  },
  {
    key: "15",
    id: "15",
    name: "A Steal Might Actually Be a Raw Deal",
    startDate: "Apr 09, 2011",
    endDate: "Apr 09, 2011",
    views: "2345",
    impression: "234",
    totalTake: "534",
    status: "pending",
  },
];

const columns: ColumnsType<DataTypeWinners> = [
  {
    title: "SL",
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
    title: "View",
    dataIndex: "views",
    key: "views",
  },
  {
    title: "Impression",
    dataIndex: "impression",
    key: "impression",
  },
  {
    title: "Take",
    dataIndex: "totalTake",
    key: "totalTake",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (_, col) => (
      <>
        {col?.status === "pending" && (
          <div className="text-[#FFA800] bg-[#f9ebd1] text-sm px-3 py-1 text-center rounded w-max">
            Pending
          </div>
        )}
        {col?.status === "active" && (
          <div className="text-[#7367F0] bg-[#e9e7fd] text-sm px-3 py-1 text-center rounded  w-max">
            Active
          </div>
        )}
        {col?.status === "complete" && (
          <div className="text-[#28C76F] bg-[#e7f0e3] text-sm px-3 py-1 text-center rounded  w-max">
            Complete
          </div>
        )}
      </>
    ),
  },
  {
    title: "Actions",
    dataIndex: "id",
    key: "id",
    render: (_, col) => (
      <>
        <div className="flex items-center">
          <Link
            to="/campaigns/edit/1"
            className="hover:text-primary transition-all p-1"
          >
            <FiEdit />
          </Link>
          <Link
            to="/campaigns/1"
            className="hover:text-primary transition-all p-1"
          >
            <FiEye />
          </Link>
        </div>
      </>
    ),
  },
];

export const CampaignList = () => {
  const { data: campaignList } = useGetAllCampaignQuery<any>({});
  return (
    <div className="p-8">
      <div className="max-w-[1170px] mx-auto w-full">
        <div className="border rounded">
          <div className="p-5 flex justify-between items-center">
            <div>
              <div className="text-black font-medium text-lg">
                Campaign List
              </div>
              <div className="text-xs">Total Campaign (1205)</div>
            </div>
            <Link to="/campaigns/add" className="btn btn-primary ">
              <HiPlus />
              <span>Add New Campaign</span>
            </Link>
          </div>
          {/* <Table
            size="middle"
            dataSource={data}
            columns={columns}
            rowClassName={(record, index) =>
              index % 2 === 0 ? "bg-[#F8F8F9]" : "bg-[#fff]"
            }
          /> */}
        </div>
      </div>
    </div>
  );
};

export default CampaignList;
