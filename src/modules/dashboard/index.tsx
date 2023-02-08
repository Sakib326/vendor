import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import { DatePicker } from "antd";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { BiPlus } from "react-icons/bi";
import { Chart } from "./components/chart";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import {
  useGetAllWinnerListQuery,
  useGetCampaignSummeryQuery,
} from "../../redux/dashboard/dashboard_api";
import { useGetAllCampaignQuery } from "../../redux/campaign/campaign_api";
import moment from "moment";
const { RangePicker } = DatePicker;

interface DataTypeWinners {
  key: string;
  subscriber_avatar: string;
  subscriber_fullName: string;
  campaign_thumbnail: string;
  campaign_name: string;
}

const columns: ColumnsType<DataTypeWinners> = [
  {
    title: "Winners",
    dataIndex: "winner",
    key: "winner",
    render: (_, col) => (
      <div className="flex items-center gap-2">
        <div className="w-[30px] h-[30px]">
          <img
            className="w-full h-full object-cover rounded-full"
            src={
              col?.subscriber_avatar
                ? `${import.meta.env.VITE_API_URL}/${col?.subscriber_avatar}`
                : "https://i.ibb.co/grqf3k6/istockphoto-1300845620-612x612.jpg"
            }
            alt="logo"
            crossOrigin="anonymous"
          />
        </div>
        <span>{col?.subscriber_fullName}</span>
      </div>
    ),
  },
  {
    title: "Campaigns",
    dataIndex: "campaign_name",
    key: "campaign_name",
    render: (_, col) => (
      <div className="flex items-center gap-2">
        <div className="w-[60px] h-[30px] flex-shrink-0">
          <img
            className="w-full h-full object-contain"
            src={
              col?.campaign_thumbnail
                ? `${import.meta.env.VITE_API_URL}/${col?.campaign_thumbnail}`
                : "/images/misc/image-placeholder-big.webp"
            }
            crossOrigin="anonymous"
            alt="logo"
          />
        </div>
        <span className="line-clamp-1" title={col?.campaign_name}>
          {col?.campaign_name}
        </span>
      </div>
    ),
  },

  {
    title: "Address",
    dataIndex: "subscriber_address",
    key: "subscriber_address",
  },
];
interface DataTypeTake {
  key: string;
  winner: { avatar: string; name: string };
  clicks: string;
  name: string;
  thumbnail: string;
  participants: any;
}

const columnsCampaign: ColumnsType<DataTypeTake> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Campaigns",
    dataIndex: "name",
    key: "name",
    render: (_, col) => (
      <div className="flex items-center gap-2">
        <div className="w-[60px] h-[30px] flex-shrink-0">
          <img
            className="w-full h-full object-contain"
            src={
              col?.thumbnail
                ? `${import.meta.env.VITE_API_URL}/${col?.thumbnail}`
                : "/images/misc/image-placeholder-big.webp"
            }
            crossOrigin="anonymous"
            alt="logo"
          />
        </div>
        <span className="line-clamp-1" title={col?.name}>
          {col?.name}
        </span>
      </div>
    ),
  },
  {
    title: "Impressions",
    dataIndex: "clicks",
    key: "clicks",
  },

  {
    title: "Take",
    dataIndex: "totalTake",
    key: "totalTake",
    render: (_, col) => <div>{col?.participants.length ?? 0}</div>,
  },
];

const rangePresets: {
  label: string;
  value: [Dayjs, Dayjs];
}[] = [
  { label: "Last 7 Days", value: [dayjs().add(-7, "d"), dayjs()] },
  { label: "Last 14 Days", value: [dayjs().add(-14, "d"), dayjs()] },
  { label: "Last 30 Days", value: [dayjs().add(-30, "d"), dayjs()] },
  { label: "Last 90 Days", value: [dayjs().add(-90, "d"), dayjs()] },
];

export const Dashboard = () => {
  const dateTo = moment(new Date()).format("YYYY-MM-DD");
  const dateFrom = moment(+new Date() - 7).format("YYYY-MM-DD");
  const [dateRangeState, setDateRangeState] = useState(
    `${dateFrom} - ${dateTo}`
  );
  const { data: campaignSummery, isLoading: dataLoading } =
    useGetCampaignSummeryQuery<any>({ dateRange: dateRangeState });
  const { data: allWinnerList, isLoading: winnerLoading } =
    useGetAllWinnerListQuery({});
  const { data: campaignList, isLoading: campaignLoading } =
    useGetAllCampaignQuery<any>({ limit: 5, page: 1 });

  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ) => {
    if (dates) {
      setDateRangeState(`${dateStrings[0]} - ${dateStrings[1]}`);
    } else {
      console.log("Clear");
    }
  };

  return (
    <div className="p-5 lg:p-8 mb-[60px]">
      <div className="max-w-[1170px] w-full mx-auto">
        {/* filter */}
        <div className="flex flex-wrap items-center gap-3 mb-5 relative">
          <div className="btn py-0 bg-tertiary text-primary border border-tertiary cursor-auto">
            <span>Date:</span>
            {/* <BsPencil /> */}
            <RangePicker
              defaultValue={[dayjs().add(-7, "d"), dayjs()]}
              size="large"
              presets={rangePresets}
              onChange={onRangeChange}
              className="bg-tertiary border-tertiary"
            />
          </div>

          <Link
            to="/campaigns/add"
            className="btn btn-primary w-full sm:w-max order-[-1] sm:order-2"
          >
            <BiPlus className="text-lg" />
            <span> New Campaign</span>
          </Link>
        </div>

        {/* highlights */}
        <div className="grid grid-cols-3  max-w-[780px]  w-full items-center text-center sm:text-left">
          <div className="bg-primary text-white p-3 sm:p-5 lg:p-7 max-w-[260px] w-full border-[1px]  border-primary">
            <div className="flex flex-col sm:flex-row items-center gap-2 mb-3">
              <ReactSVG src="/icons/eye.svg" />
              <span>Total Impressions</span>
            </div>
            <div className="text-white text-3xl sm:text-[50px] font-semibold">
              {campaignSummery?.totalClick ?? 0}
            </div>
          </div>
          <div className="bg-secondary text-white p-3 sm:p-5 lg:p-7 max-w-[260px] w-full border-[1px] border-secondary">
            <div className="flex flex-col sm:flex-row items-center gap-2 mb-3">
              <ReactSVG src="/icons/hand-click.svg" />
              <span>Total Takes</span>
            </div>
            <div className="text-white text-3xl sm:text-[50px] font-semibold">
              {campaignSummery?.totalParticipants ?? 0}
            </div>
          </div>
          <div className=" text-white p-3 sm:p-5 lg:p-7 max-w-[260px] w-full border-[1px] ">
            <div className="flex flex-col sm:flex-row items-center gap-2 mb-3 text-[#808291]">
              <ReactSVG src="/icons/trophy.svg" />
              <span className="font-medium">Total Winners</span>
            </div>
            <div className="text-white text-3xl sm:text-[50px] font-semibold text-[#ac224d]">
              {campaignSummery?.totalWinners ?? 0}
            </div>
          </div>
        </div>

        {/* chart */}
        <div className="border p-3 mb-5 lg:mb-7">
          <Chart />
        </div>

        {/* tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 lg:gap-7">
          {/* table take */}
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
              <Link to="/campaigns/list" className="btn btn-grey py-1.5">
                View All
              </Link>
            </div>
            <Table
              size="middle"
              dataSource={campaignList?.results}
              pagination={false}
              columns={columnsCampaign}
              rowClassName={(record, index) =>
                index % 2 === 0 ? "bg-[#F8F8F9]" : "bg-[#fff]"
              }
              rowKey="id"
            />
          </div>
          {/* table winners */}
          <div className="border rounded">
            <div className="p-5 flex justify-between items-center">
              <div>
                <div className="text-black font-medium text-lg">
                  Last Winners List
                </div>
                <div className="text-xs">
                  Total Winners ({allWinnerList?.totalItems ?? 0})
                </div>
              </div>
              <Link to="/winners/list" className="btn btn-grey py-1.5">
                View All
              </Link>
            </div>
            <Table
              size="middle"
              dataSource={allWinnerList?.results}
              pagination={false}
              columns={columns}
              rowClassName={(record, index) =>
                index % 2 === 0 ? "bg-[#F8F8F9]" : "bg-[#fff]"
              }
              rowKey="campaignId"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
