import type { TabsProps } from "antd";
import { Table, Tabs } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { IoPodiumOutline } from "react-icons/io5";
import { RiHandCoinLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import {
  useGetAllTakerListQuery,
  useGetSingleCampaignQuery,
} from "../../../redux/campaign/campaign_api";
import { useGetAllWinnerListQuery } from "../../../redux/dashboard/dashboard_api";
import Details from "./components/details";

interface DataType {
  key: string;
  subscriber_avatar: string;
  fullName?: string;
  subscriber_fullName?: string;
  avatar?: string;
}

export const CampaignDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [tabKey, setTabKey] = useState(2);
  const { id } = useParams();
  const { data: allTakerList, isLoading } = useGetAllTakerListQuery(
    {
      uuid: id,
      currentPage,
      pageSize: limit,
    },
    { skip: tabKey === 1 ? true : false }
  );
  const { data: singleCampaign } = useGetSingleCampaignQuery<any>(`${id}`);
  const { data: allWinnerList, isLoading: winnerLoading } =
    useGetAllWinnerListQuery(
      { uuid: id, limit: limit, page: currentPage },
      { skip: tabKey === 2 ? true : false }
    );

  const paginationOptions = {
    showSizeChanger: true,
    showQuickJumper: true,
    onShowSizeChange: (_: any, pageSize: any) => {
      setLimit(pageSize);
    },
    onChange: (page: any) => {
      setCurrentPage(page);
    },
    pageSizeOptions: [5, 10, 20, 30, 50, 100],

    total: allWinnerList?.totalItems,
    showTotal: (total: number, range: any) =>
      `${range[0]} to ${range[1]} of ${total}`,
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "SL",
      key: "index",
      render: (text: string, record: any, index: number) =>
        (currentPage - 1) * limit + index + 1,
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
              src={
                col?.avatar
                  ? `${import.meta.env.VITE_API_URL}/${col?.avatar}`
                  : "https://i.ibb.co/grqf3k6/istockphoto-1300845620-612x612.jpg"
              }
              alt="logo"
              crossOrigin="anonymous"
            />
          </div>
          <span>{col?.fullName}</span>
        </div>
      ),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const columns2: ColumnsType<DataType> = [
    {
      title: "SL",
      key: "index",
      width: "20px",
      render: (text: string, record: any, index: number) =>
        (currentPage - 1) * limit + index + 1,
    },

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
      title: "Address",
      dataIndex: "subscriber_address",
      key: "subscriber_address",
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
      pagination={paginationOptions}
      loading={winner ? winnerLoading : isLoading}
    />
  );
  const items: TabsProps["items"] = [
    {
      key: "2",
      label: (
        <div className="flex items-center gap-2">
          <RiHandCoinLine />
          <span>All Take List</span>
        </div>
      ),
      children: <DataTable data={allTakerList?.results ?? []} />,
    },
    {
      key: "1",
      label: (
        <div className="flex items-center gap-2">
          <IoPodiumOutline />
          <span>All Winners list</span>
        </div>
      ),
      children: <DataTable data={allWinnerList?.results} winner />,
    },
  ];
  const onChange = (key: string) => {
    setTabKey(parseInt(key));
    setCurrentPage(1);
    setLimit(10);
  };
  return (
    <div className="p-8">
      <div className="max-w-[1170px] mx-auto w-full">
        <div className="grid grid-cols-[1fr_2fr] gap-8">
          {/* left */}
          <Details campaignDetails={singleCampaign} />

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
