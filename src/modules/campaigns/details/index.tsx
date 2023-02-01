import { Link, useParams } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Tabs, Table } from "antd";
import type { TabsProps } from "antd";
import type { ColumnsType } from "antd/es/table";
import { RiHandCoinLine } from "react-icons/ri";
import { IoPodiumOutline } from "react-icons/io5";
import { useGetSingleCampaignQuery } from "../../../redux/campaign/campaign_api";
import parse from "html-react-parser";
import { useState } from "react";

const onChange = (key: string) => {
  console.log(key);
};

interface DataType {
  key: string;
  winner: { avatar: string; name: string };
  name?: string;
  level?: string;
}

const dataAllTake = [
  {
    key: "1",
    id: "01",
    winner: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0C4lPDZ-CdkIO0mmgk9bMi5Ss49u0E7e9w&usqp=CAU",
      name: "Ema Watson",
    },
    name: "Dhaka",
  },
  {
    key: "2",
    id: "02",
    winner: {
      avatar:
        "https://xyz.ir/wp-content/uploads/2021/05/avatar.jpg.320x320px.jpg",
      name: "Smith Watson",
    },
    name: "Sylhet",
  },
  {
    key: "3",
    id: "03",
    winner: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGa_Pf4i53Wxs_HrjmSgMEhE1Ac7rPhtFv2FpVCE0nHTHugg_iWgc9T5EqSManZ71nbw&usqp=CAU",
      name: "Shamim Wasman",
    },
    name: "Jessore",
  },
  {
    key: "4",
    id: "04",
    winner: {
      avatar:
        "https://t3.ftcdn.net/jpg/02/11/41/90/360_F_211419019_XMsPr1uBdlJGKvlSRLZm5ZYzAEQvfFO2.jpg",
      name: "Khalid Hasan",
    },
    name: "Chittagong",
  },
  {
    key: "5",
    id: "05",
    winner: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0C4lPDZ-CdkIO0mmgk9bMi5Ss49u0E7e9w&usqp=CAU",
      name: "Ema Watson",
    },
    name: "Dhaka",
  },
  {
    key: "6",
    id: "06",
    winner: {
      avatar:
        "https://xyz.ir/wp-content/uploads/2021/05/avatar.jpg.320x320px.jpg",
      name: "Smith Watson",
    },
    name: "Jessore",
  },
  {
    key: "7",
    id: "07",
    winner: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0C4lPDZ-CdkIO0mmgk9bMi5Ss49u0E7e9w&usqp=CAU",
      name: "Ema Watson",
    },
    name: "Chittagong",
  },
  {
    key: "8",
    id: "08",
    winner: {
      avatar:
        "https://xyz.ir/wp-content/uploads/2021/05/avatar.jpg.320x320px.jpg",
      name: "Smith Watson",
    },
    name: "Dhaka",
  },
  {
    key: "9",
    id: "09",
    winner: {
      avatar:
        "https://xyz.ir/wp-content/uploads/2021/05/avatar.jpg.320x320px.jpg",
      name: "Smith Watson",
    },
    name: "Jessore",
  },
  {
    key: "10",
    id: "10",
    winner: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0C4lPDZ-CdkIO0mmgk9bMi5Ss49u0E7e9w&usqp=CAU",
      name: "Ema Watson",
    },
    name: "Chittagong",
  },
  {
    key: "11",
    id: "11",
    winner: {
      avatar:
        "https://xyz.ir/wp-content/uploads/2021/05/avatar.jpg.320x320px.jpg",
      name: "Smith Watson",
    },
    name: "Dhaka",
  },
  {
    key: "12",
    id: "12",
    winner: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0C4lPDZ-CdkIO0mmgk9bMi5Ss49u0E7e9w&usqp=CAU",
      name: "Ema Watson",
    },
    name: "Jessore",
  },
];

const dataAllWinner = [
  {
    key: "1",
    id: "01",
    winner: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0C4lPDZ-CdkIO0mmgk9bMi5Ss49u0E7e9w&usqp=CAU",
      name: "Ema Watson",
    },
    name: "Chittagong",
    level: "1st Prize",
  },
  {
    key: "2",
    id: "02",
    winner: {
      avatar:
        "https://xyz.ir/wp-content/uploads/2021/05/avatar.jpg.320x320px.jpg",
      name: "Smith Watson",
    },
    name: "Dhaka",
    level: "2nd Prize",
  },
  {
    key: "3",
    id: "03",
    winner: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGa_Pf4i53Wxs_HrjmSgMEhE1Ac7rPhtFv2FpVCE0nHTHugg_iWgc9T5EqSManZ71nbw&usqp=CAU",
      name: "Shamim Wasman",
    },
    name: "Jessore",
    level: "3rd Prize",
  },
  {
    key: "4",
    id: "04",
    winner: {
      avatar:
        "https://t3.ftcdn.net/jpg/02/11/41/90/360_F_211419019_XMsPr1uBdlJGKvlSRLZm5ZYzAEQvfFO2.jpg",
      name: "Khalid Hasan",
    },
    name: "Chittagong",
    level: "1st Prize",
  },
  {
    key: "5",
    id: "05",
    winner: {
      avatar:
        "https://xyz.ir/wp-content/uploads/2021/05/avatar.jpg.320x320px.jpg",
      name: "Smith Watson",
    },
    name: "Dhaka",
    level: "1st Prize",
  },
  {
    key: "6",
    id: "06",
    winner: {
      avatar:
        "https://t3.ftcdn.net/jpg/02/11/41/90/360_F_211419019_XMsPr1uBdlJGKvlSRLZm5ZYzAEQvfFO2.jpg",
      name: "Khalid Hasan",
    },
    name: "Jessore",
    level: "2nd Prize",
  },
  {
    key: "7",
    id: "07",
    winner: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGa_Pf4i53Wxs_HrjmSgMEhE1Ac7rPhtFv2FpVCE0nHTHugg_iWgc9T5EqSManZ71nbw&usqp=CAU",
      name: "Shamim Wasman",
    },
    name: "Chittagong",
    level: "1st Prize",
  },
  {
    key: "8",
    id: "08",
    winner: {
      avatar:
        "https://t3.ftcdn.net/jpg/02/11/41/90/360_F_211419019_XMsPr1uBdlJGKvlSRLZm5ZYzAEQvfFO2.jpg",
      name: "Khalid Hasan",
    },
    name: "Dhaka",
    level: "3rd Prize",
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: "SL",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Participants",
    dataIndex: "winner",
    key: "winner",
    render: (_, col) => (
      <div className="flex items-center gap-2">
        <div className="w-[30px] h-[30px]">
          <img
            className="w-full h-full object-cover rounded-full"
            src={col?.winner?.avatar}
            alt="logo"
          />
        </div>
        <span>{col?.winner?.name}</span>
      </div>
    ),
  },
  {
    title: "State",
    dataIndex: "name",
    key: "name",
  },
];

const columns2: ColumnsType<DataType> = [
  {
    title: "SL",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Participants",
    dataIndex: "winner",
    key: "winner",
    render: (_, col) => (
      <div className="flex items-center gap-2">
        <div className="w-[30px] h-[30px]">
          <img
            className="w-full h-full object-cover rounded-full"
            src={col?.winner?.avatar}
            alt="logo"
          />
        </div>
        <span>{col?.winner?.name}</span>
      </div>
    ),
  },
  {
    title: "Gift Levels",
    dataIndex: "level",
    key: "level",
  },
  {
    title: "State",
    dataIndex: "name",
    key: "name",
  },
];

const DataTable = ({ data, winner }: any) => (
  <Table
    size="middle"
    dataSource={data}
    columns={winner ? columns2 : columns}
    rowClassName={(record, index) =>
      index % 2 === 0 ? "bg-[#F8F8F9]" : "bg-[#fff]"
    }
    pagination={{
      defaultPageSize: 10,
      showSizeChanger: true,
      pageSizeOptions: ["10", "20", "30"],
      total: 1000,
    }}
    onChange={(e: any) => {
      console.log(e);
    }}
  />
);

export const CampaignDetails = () => {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const { id } = useParams();
  const { data: singleCampaign } = useGetSingleCampaignQuery<any>(`${id}`);
  const [showMore, setShowMore] = useState(false);
  const items: TabsProps["items"] = [
    {
      key: "2",
      label: (
        <div className="flex items-center gap-2">
          <RiHandCoinLine />
          <span>All Take List</span>
        </div>
      ),
      children: <DataTable data={dataAllTake} />,
    },
    {
      key: "1",
      label: (
        <div className="flex items-center gap-2">
          <IoPodiumOutline />
          <span>All Winners list</span>
        </div>
      ),
      children: <DataTable data={dataAllWinner} winner />,
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-[1170px] mx-auto w-full">
        <div className="grid grid-cols-[1fr_2fr] gap-8">
          {/* left */}
          <div>
            <div className="">
              <div className="mb-4">
                <img src="/temp/campaign-unisearch.webp" alt="campaign" />
              </div>
              <div className="text-xl text-black font-medium mb-5 text-center">
                {singleCampaign?.name && singleCampaign?.name !== null
                  ? singleCampaign?.name
                  : "N/A"}
              </div>
              {/* <div className="mb-7 flex justify-center">
                <img src="/temp/logo-unisearch.webp" alt="logo" />
              </div> */}

              <div className="mb-5 flex flex-wrap	justify-center gap-x-8 gap-y-6 text-left">
                <div className="grid grid-cols-[44px_1fr] gap-4">
                  <div className="flex items-center justify-center bg-tertiary w-[44px] h-[44px] rounded">
                    <ReactSVG src="/icons/take-red.svg" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl text-black font-semibold">
                      {singleCampaign?.totalParticipants &&
                      singleCampaign?.totalParticipants !== null
                        ? singleCampaign?.totalParticipants
                        : "N/A"}
                    </span>
                    <span>Total Take</span>
                  </div>
                </div>
                {/* <div className="grid grid-cols-[44px_1fr] gap-4">
                  <div className="flex items-center justify-center bg-tertiary w-[44px] h-[44px] rounded">
                    <ReactSVG src="/icons/podium-red.svg" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl text-black font-semibold">
                      12
                    </span>
                    <span>Total Winners</span>
                  </div>
                </div> */}
                {/* <div className="grid grid-cols-[44px_1fr] gap-4">
                  <div className="flex items-center justify-center bg-tertiary w-[44px] h-[44px] rounded">
                    <ReactSVG src="/icons/eye-red.svg" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl text-black font-semibold">
                      1.23k
                    </span>
                    <span>Total Impression</span>
                  </div>
                </div> */}
              </div>

              {/* details */}
              <div className="mb-5">
                <div className="text-xl border-b mb-5 pb-4 font-medium">
                  Details
                </div>
                <ul className="flex flex-col gap-1">
                  <li className="flex gap-1">
                    <span className="font-medium">Type:</span>
                    <span>
                      {singleCampaign?.type && singleCampaign?.type !== null
                        ? singleCampaign?.type
                        : "N/A"}
                    </span>
                  </li>
                  <li className="flex gap-1">
                    <span className="font-medium">Start Date:</span>
                    <span>
                      {singleCampaign?.startDate &&
                      singleCampaign?.startDate !== null
                        ? singleCampaign?.startDate
                        : "N/A"}
                    </span>
                  </li>
                  <li className="flex gap-1">
                    <span className="font-medium">End Date:</span>
                    <span>
                      {singleCampaign?.endDate &&
                      singleCampaign?.endDate !== null
                        ? singleCampaign?.endDate
                        : "N/A"}
                    </span>
                  </li>
                  <li className="flex gap-1">
                    <span className="font-medium">Status:</span>
                    {(singleCampaign?.status === "Pending" ||
                      singleCampaign?.status === "Review") && (
                      <div className="text-[#FFA800] bg-[#f9ebd1] text-sm px-3 py-1 text-center rounded w-max">
                        {singleCampaign?.status}
                      </div>
                    )}
                    {(singleCampaign?.status === "Published" ||
                      singleCampaign?.status === "Selection") && (
                      <div className="text-[#7367F0] bg-[#e9e7fd] text-sm px-3 py-1 text-center rounded  w-max">
                        {singleCampaign?.status}
                      </div>
                    )}
                    {singleCampaign?.status === "Completed" && (
                      <div className="text-[#28C76F] bg-[#e7f0e3] text-sm px-3 py-1 text-center rounded  w-max">
                        {singleCampaign?.status}
                      </div>
                    )}
                    {(singleCampaign?.status === "Rejected" ||
                      singleCampaign?.status === "Blocked") && (
                      <div className="text-red-700 bg-red-100 text-sm px-3 py-1 text-center rounded  w-max">
                        {singleCampaign?.status}
                      </div>
                    )}
                  </li>
                </ul>
              </div>
              {/* details */}
              <div className="mb-5">
                <div className="text-xl border-b mb-5 pb-4 font-medium">
                  Description
                </div>
                <div>
                  {showMore
                    ? parse(
                        singleCampaign?.description &&
                          singleCampaign?.description !== null
                          ? singleCampaign?.description
                          : "<p>N/A</p>"
                      )
                    : parse(
                        singleCampaign?.description &&
                          singleCampaign?.description !== null
                          ? singleCampaign?.description.substring(0, 250)
                          : "<p>N/A</p>"
                      )}
                  <span
                    className="cursor-pointer text-primary"
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? "Show less" : "Show more"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* table */}
            <Tabs defaultActiveKey="2" items={items} onChange={onChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
