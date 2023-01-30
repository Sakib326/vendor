import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { FiEdit, FiEye } from "react-icons/fi";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

interface DataTypeWinners {
  key: string;
  winner: { avatar: string; name: string };
  levels: string;
  state: string;
}

const winnersData = [
  {
    key: "1",
    id: "01",
    winner: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0C4lPDZ-CdkIO0mmgk9bMi5Ss49u0E7e9w&usqp=CAU",
      name: "Ema Watson",
    },
    campaignName: "Recognize Misinformation on the Internet",
    levels: "1st Prize",
    state: "Fairfield",
  },
  {
    key: "2",
    id: "02",
    winner: {
      avatar:
        "https://xyz.ir/wp-content/uploads/2021/05/avatar.jpg.320x320px.jpg",
      name: "Smith Watson",
    },
    campaignName: "Recognize Misinformation on the Internet",

    levels: "1st Prize",
    state: "Naperville",
  },
  {
    key: "3",
    id: "03",
    winner: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGa_Pf4i53Wxs_HrjmSgMEhE1Ac7rPhtFv2FpVCE0nHTHugg_iWgc9T5EqSManZ71nbw&usqp=CAU",
      name: "Shamim Wasman",
    },
    campaignName: "Recognize Misinformation on the Internet",

    levels: "1st Prize",
    state: "Toledo",
  },
  {
    key: "4",
    id: "04",
    winner: {
      avatar:
        "https://t3.ftcdn.net/jpg/02/11/41/90/360_F_211419019_XMsPr1uBdlJGKvlSRLZm5ZYzAEQvfFO2.jpg",
      name: "Khalid Hasan",
    },
    campaignName: "Recognize Misinformation on the Internet",

    levels: "1st Prize",
    state: "Orange",
  },
  {
    key: "5",
    id: "05",
    winner: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0C4lPDZ-CdkIO0mmgk9bMi5Ss49u0E7e9w&usqp=CAU",
      name: "Ema Watson",
    },
    campaignName: "Recognize Misinformation on the Internet",

    levels: "1st Prize",
    state: "Pembroke Pines",
  },
  {
    key: "6",
    id: "6",
    winner: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0C4lPDZ-CdkIO0mmgk9bMi5Ss49u0E7e9w&usqp=CAU",
      name: "Ema Watson",
    },
    campaignName: "Recognize Misinformation on the Internet",
    levels: "1st Prize",
    state: "Fairfield",
  },
  {
    key: "7",
    id: "7",
    winner: {
      avatar:
        "https://xyz.ir/wp-content/uploads/2021/05/avatar.jpg.320x320px.jpg",
      name: "Smith Watson",
    },
    campaignName: "Recognize Misinformation on the Internet",

    levels: "1st Prize",
    state: "Naperville",
  },
  {
    key: "8",
    id: "8",
    winner: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGa_Pf4i53Wxs_HrjmSgMEhE1Ac7rPhtFv2FpVCE0nHTHugg_iWgc9T5EqSManZ71nbw&usqp=CAU",
      name: "Shamim Wasman",
    },
    campaignName: "Recognize Misinformation on the Internet",

    levels: "1st Prize",
    state: "Toledo",
  },
  {
    key: "9",
    id: "9",
    winner: {
      avatar:
        "https://t3.ftcdn.net/jpg/02/11/41/90/360_F_211419019_XMsPr1uBdlJGKvlSRLZm5ZYzAEQvfFO2.jpg",
      name: "Khalid Hasan",
    },
    campaignName: "Recognize Misinformation on the Internet",

    levels: "1st Prize",
    state: "Orange",
  },
  {
    key: "10",
    id: "10",
    winner: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0C4lPDZ-CdkIO0mmgk9bMi5Ss49u0E7e9w&usqp=CAU",
      name: "Ema Watson",
    },
    campaignName: "Recognize Misinformation on the Internet",

    levels: "1st Prize",
    state: "Pembroke Pines",
  },
  {
    key: "11",
    id: "11",
    winner: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0C4lPDZ-CdkIO0mmgk9bMi5Ss49u0E7e9w&usqp=CAU",
      name: "Ema Watson",
    },
    campaignName: "Recognize Misinformation on the Internet",
    levels: "1st Prize",
    state: "Fairfield",
  },
  {
    key: "12",
    id: "12",
    winner: {
      avatar:
        "https://xyz.ir/wp-content/uploads/2021/05/avatar.jpg.320x320px.jpg",
      name: "Smith Watson",
    },
    campaignName: "Recognize Misinformation on the Internet",

    levels: "1st Prize",
    state: "Naperville",
  },
  {
    key: "13",
    id: "13",
    winner: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGa_Pf4i53Wxs_HrjmSgMEhE1Ac7rPhtFv2FpVCE0nHTHugg_iWgc9T5EqSManZ71nbw&usqp=CAU",
      name: "Shamim Wasman",
    },
    campaignName: "Recognize Misinformation on the Internet",

    levels: "1st Prize",
    state: "Toledo",
  },
  {
    key: "14",
    id: "14",
    winner: {
      avatar:
        "https://t3.ftcdn.net/jpg/02/11/41/90/360_F_211419019_XMsPr1uBdlJGKvlSRLZm5ZYzAEQvfFO2.jpg",
      name: "Khalid Hasan",
    },
    campaignName: "Recognize Misinformation on the Internet",

    levels: "1st Prize",
    state: "Orange",
  },
  {
    key: "15",
    id: "15",
    winner: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0C4lPDZ-CdkIO0mmgk9bMi5Ss49u0E7e9w&usqp=CAU",
      name: "Ema Watson",
    },
    campaignName: "Recognize Misinformation on the Internet",

    levels: "1st Prize",
    state: "Pembroke Pines",
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
        <span className="text-[#4c4e64] font-medium">{col?.winner?.name}</span>
      </div>
    ),
  },
  {
    title: "Campaign name",
    dataIndex: "campaignName",
    key: "campaignName",
  },
  {
    title: "Gift Levels",
    dataIndex: "levels",
    key: "levels",
  },

  {
    title: "State",
    dataIndex: "state",
    key: "state",
  },
];

export const WinnersList = () => {
  return (
    <div className="max-w-[1170px] w-full mx-auto p-8">
      <div className="border rounded">
        <div className="p-5 flex justify-between items-center">
          <div>
            <div className="text-black font-medium text-lg">Winners List</div>
            <div className="text-xs">Total Winners (12)</div>
          </div>
        </div>
        <Table
          size="middle"
          dataSource={winnersData}
          columns={columns}
          rowClassName={(record, index) =>
            index % 2 === 0 ? "bg-[#F8F8F9]" : "bg-[#fff]"
          }
        />
      </div>
    </div>
  );
};

export default WinnersList;
