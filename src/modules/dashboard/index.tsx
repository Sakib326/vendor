import { Link } from "react-router-dom";
import { BsPencil } from "react-icons/bs";
import { ReactSVG } from "react-svg";
import { DatePicker } from "antd";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { BiPlus } from "react-icons/bi";
import { Chart } from "./components/chart";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
const { RangePicker } = DatePicker;

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
        <span>{col?.winner?.name}</span>
      </div>
    ),
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
interface DataTypeTake {
  key: string;
  winner: { avatar: string; name: string };
  impressions: string;
  state: string;
}

const takeData = [
  {
    key: "1",
    id: "01",
    winner: {
      avatar: "/temp/campaign-unisearch.webp",
      name: "Ema Watson",
    },
    impressions: "177",
    state: "500",
  },
  {
    key: "2",
    id: "02",
    winner: {
      avatar: "/temp/campaign-enterprise360.webp",
      name: "Smith Watson",
    },
    impressions: "214",
    state: "345",
  },
  {
    key: "3",
    id: "03",
    winner: {
      avatar: "/temp/campaign-gadget-master.webp",
      name: "Shamim Wasman",
    },
    impressions: "234",
    state: "346",
  },
  {
    key: "4",
    id: "04",
    winner: {
      avatar: "/temp/campaign-enterprise360.webp",
      name: "Khalid Hasan",
    },
    impressions: "654",
    state: "123",
  },
  {
    key: "5",
    id: "05",
    winner: {
      avatar: "/temp/campaign-gadget-master.webp",
      name: "Ema Watson",
    },
    impressions: "345",
    state: "865",
  },
];

const columnsTake: ColumnsType<DataTypeTake> = [
  {
    title: "SL",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Campaigns",
    dataIndex: "winner",
    key: "winner",
    render: (_, col) => (
      <div className="flex items-center gap-2">
        <div className="w-[60px] h-[30px]">
          <img
            className="w-full h-full object-contain"
            src={col?.winner?.avatar}
            alt="logo"
          />
        </div>
        <span>{col?.winner?.name}</span>
      </div>
    ),
  },
  {
    title: "Impressions",
    dataIndex: "impressions",
    key: "impressions",
  },

  {
    title: "Take",
    dataIndex: "state",
    key: "state",
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
  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ) => {
    if (dates) {
      console.log("From: ", dates[0], ", to: ", dates[1]);
      console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
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
            <span>Date: last 3 months</span>
            {/* <BsPencil /> */}
            <RangePicker
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
          <div className="bg-primary text-white p-3 sm:p-5 lg:p-7 max-w-[260px] w-full">
            <div className="flex flex-col sm:flex-row items-center gap-2 mb-3">
              <ReactSVG src="/icons/eye.svg" />
              <span>Total Impressions</span>
            </div>
            <div className="text-white text-3xl sm:text-[50px] font-semibold">
              1600
            </div>
          </div>
          <div className="bg-secondary text-white p-3 sm:p-5 lg:p-7 max-w-[260px] w-full">
            <div className="flex flex-col sm:flex-row items-center gap-2 mb-3">
              <ReactSVG src="/icons/hand-click.svg" />
              <span>Total Takes</span>
            </div>
            <div className="text-white text-3xl sm:text-[50px] font-semibold">
              1600
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#AC224D] to-[#2A1621] text-white p-3 sm:p-5 lg:p-7 max-w-[260px] w-full">
            <div className="flex flex-col sm:flex-row items-center gap-2 mb-3">
              <ReactSVG src="/icons/podium.svg" />
              <span>Total Winners</span>
            </div>
            <div className="text-white text-3xl sm:text-[50px] font-semibold">
              1900
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
                <div className="text-xs">Total Campaign (1205)</div>
              </div>
              <Link to="/campaigns/list" className="btn btn-primary ">
                View More
              </Link>
            </div>
            <Table
              size="middle"
              dataSource={takeData}
              pagination={false}
              columns={columnsTake}
              rowClassName={(record, index) =>
                index % 2 === 0 ? "bg-[#F8F8F9]" : "bg-[#fff]"
              }
            />
          </div>
          {/* table winners */}
          <div className="border rounded">
            <div className="p-5 flex justify-between items-center">
              <div>
                <div className="text-black font-medium text-lg">
                  Last Campaign Winners List
                </div>
                <div className="text-xs">Total Winners (12)</div>
              </div>
              <Link to="/campaigns/1" className="btn btn-primary ">
                View More
              </Link>
            </div>
            <Table
              size="middle"
              dataSource={winnersData}
              pagination={false}
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

export default Dashboard;
