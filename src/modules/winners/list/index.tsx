import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { FiEdit, FiEye } from "react-icons/fi";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

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
    giftLevels: "2nd Prize",
    endDate: "Apr 09, 2011",
    totalViews: "2345",
    totalParticipants: "234",
    totalTake: "534",
    status: "pending",
  },
  {
    key: "2",
    id: "02",
    name: "A Steal Might Actually Be a Raw Deal",
    giftLevels: "1st Prize",
    endDate: "Apr 09, 2011",
    totalViews: "2345",
    totalParticipants: "234",
    totalTake: "534",
    status: "active",
  },
  {
    key: "3",
    id: "03",
    name: "Toxic Trade-Offs at Facebook",
    giftLevels: "3rd Prize",
    endDate: "Apr 09, 2011",
    totalViews: "2345",
    totalParticipants: "234",
    totalTake: "534",
    status: "complete",
  },
  {
    key: "4",
    id: "04",
    name: "You Can’t Find a Laptop. Now What?",
    giftLevels: "2nd Prize",
    endDate: "Apr 09, 2011",
    totalViews: "2345",
    totalParticipants: "234",
    totalTake: "534",
    status: "pending",
  },
  {
    key: "5",
    id: "05",
    name: "A Steal Might Actually Be a Raw Deal",
    giftLevels: "2nd Prize",
    endDate: "Apr 09, 2011",
    totalViews: "2345",
    totalParticipants: "234",
    totalTake: "534",
    status: "active",
  },
  {
    key: "6",
    id: "06",
    name: "Recognize Misinformation on the Internet",
    giftLevels: "2nd Prize",
    endDate: "Apr 09, 2011",
    totalViews: "2345",
    totalParticipants: "234",
    totalTake: "534",
    status: "complete",
  },
  {
    key: "7",
    id: "07",
    name: "A Steal Might Actually Be a Raw Deal",
    giftLevels: "2nd Prize",
    endDate: "Apr 09, 2011",
    totalViews: "2345",
    totalParticipants: "234",
    totalTake: "534",
    status: "pending",
  },
  {
    key: "8",
    id: "08",
    name: "Toxic Trade-Offs at Facebook",
    giftLevels: "2nd Prize",
    endDate: "Apr 09, 2011",
    totalViews: "2345",
    totalParticipants: "234",
    totalTake: "534",
    status: "active",
  },
  {
    key: "9",
    id: "09",
    name: "You Can’t Find a Laptop. Now What?",
    giftLevels: "2nd Prize",
    endDate: "Apr 09, 2011",
    totalViews: "2345",
    totalParticipants: "234",
    totalTake: "534",
    status: "pending",
  },
  {
    key: "10",
    id: "10",
    name: "A Steal Might Actually Be a Raw Deal",
    giftLevels: "2nd Prize",
    endDate: "Apr 09, 2011",
    totalViews: "2345",
    totalParticipants: "234",
    totalTake: "534",
    status: "active",
  },
  {
    key: "11",
    id: "11",
    name: "Recognize Misinformation on the Internet",
    giftLevels: "2nd Prize",
    endDate: "Apr 09, 2011",
    totalViews: "2345",
    totalParticipants: "234",
    totalTake: "534",
    status: "complete",
  },
  {
    key: "12",
    id: "12",
    name: "A Steal Might Actually Be a Raw Deal",
    giftLevels: "1st Prize",
    endDate: "Apr 09, 2011",
    totalViews: "2345",
    totalParticipants: "234",
    totalTake: "534",
    status: "pending",
  },
  {
    key: "13",
    id: "13",
    name: "Toxic Trade-Offs at Facebook",
    giftLevels: "1st Prize",
    endDate: "Apr 09, 2011",
    totalViews: "2345",
    totalParticipants: "234",
    totalTake: "534",
    status: "active",
  },
  {
    key: "14",
    id: "14",
    name: "You Can’t Find a Laptop. Now What?",
    giftLevels: "1st Prize",
    endDate: "Apr 09, 2011",
    totalViews: "2345",
    totalParticipants: "234",
    totalTake: "534",
    status: "pending",
  },
  {
    key: "15",
    id: "15",
    name: "A Steal Might Actually Be a Raw Deal",
    giftLevels: "1st Prize",
    endDate: "Apr 09, 2011",
    totalViews: "2345",
    totalParticipants: "234",
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
    title: "Winners",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Campaign name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Gift levels",
    dataIndex: "giftLevels",
    key: "giftLevels",
  },
  {
    title: "State",
    dataIndex: "totalViews",
    key: "totalViews",
  },
];

export const WinnersList = () => {
  return (
    <div className="p-8">
      <div className="max-w-[1170px] mx-auto w-full">
        <div className="border rounded">
          <div className="p-5 flex justify-between items-center">
            <div>
              <div className="text-black font-medium text-lg">Winners List</div>
              <div className="text-xs">Total Campaign (1205)</div>
            </div>
          </div>
          <div>
            <Table
              size="middle"
              dataSource={data}
              columns={columns}
              rowClassName={(record, index) =>
                index % 2 === 0 ? "bg-[#F8F8F9]" : "bg-[#fff]"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnersList;
