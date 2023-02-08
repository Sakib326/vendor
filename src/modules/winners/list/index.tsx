import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useGetAllWinnerListQuery } from "../../../redux/dashboard/dashboard_api";

interface DataTypeWinners {
  key: string;
  subscriber_fullName: string;
  subscriber_avatar: string;
  campaign_name: string;
  subscriber_address: string;
  id: any;
}

const columns: ColumnsType<DataTypeWinners> = [
  {
    title: "Winners",
    dataIndex: "subscriber_fullName",
    key: "subscriber_fullName",
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
        <span className="text-[#4c4e64] font-medium">
          {col?.subscriber_fullName}
        </span>
      </div>
    ),
  },
  {
    title: "Campaign name",
    dataIndex: "campaign_name",
    key: "campaign_name",
  },

  {
    title: "Address",
    dataIndex: "subscriber_address",
    key: "subscriber_address",
  },
];

export const WinnersList = () => {
  const { data: allWinnerList, isLoading: winnerLoading } =
    useGetAllWinnerListQuery({ limit: 500 });
  return (
    <div className="max-w-[1170px] w-full mx-auto p-8">
      <div className="border rounded">
        <div className="p-5 flex justify-between items-center">
          <div>
            <div className="text-black font-medium text-lg">Winners List</div>
            <div className="text-xs">
              Total Winners ({allWinnerList?.totalItems})
            </div>
          </div>
        </div>
        <Table
          size="middle"
          dataSource={allWinnerList?.results}
          columns={columns}
          rowClassName={(record, index) =>
            index % 2 === 0 ? "bg-[#F8F8F9]" : "bg-[#fff]"
          }
          rowKey="campaignId"
          loading={winnerLoading}
        />
      </div>
    </div>
  );
};

export default WinnersList;
