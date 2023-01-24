import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

interface DataTypeWinners {
  key: string;
  name: string;
  link: string;
}

const data = [
  {
    key: "1",
    id: "01",
    name: "Recognize Misinformation on the Internet",
    link: "https://maymie.name",
  },
  {
    key: "2",
    id: "02",
    name: "A Steal Might Actually Be a Raw Deal",
    link: "https://yvette.biz",
  },
  {
    key: "3",
    id: "03",
    name: "Toxic Trade-Offs at Facebook",
    link: "https://enrico.info",
  },
  {
    key: "4",
    id: "04",
    name: "You Can’t Find a Laptop. Now What?",
    link: "https://herminia.us",
  },
  {
    key: "5",
    id: "05",
    name: "A Steal Might Actually Be a Raw Deal",
    link: "https://clifton.info",
  },
  {
    key: "6",
    id: "06",
    name: "Recognize Misinformation on the Internet",
    link: "https://maymie.name",
  },
  {
    key: "7",
    id: "07",
    name: "A Steal Might Actually Be a Raw Deal",
    link: "https://yvette.biz",
  },
  {
    key: "8",
    id: "08",
    name: "Toxic Trade-Offs at Facebook",
    link: "https://enrico.info",
  },
  {
    key: "9",
    id: "09",
    name: "You Can’t Find a Laptop. Now What?",
    link: "https://herminia.us",
  },
  {
    key: "10",
    id: "10",
    name: "A Steal Might Actually Be a Raw Deal",
    link: "https://clifton.info",
  },
  {
    key: "11",
    id: "11",
    name: "Recognize Misinformation on the Internet",
    link: "https://maymie.name",
  },
  {
    key: "12",
    id: "12",
    name: "A Steal Might Actually Be a Raw Deal",
    link: "https://yvette.biz",
  },
  {
    key: "13",
    id: "13",
    name: "Toxic Trade-Offs at Facebook",
    link: "https://enrico.info",
  },
  {
    key: "14",
    id: "14",
    name: "You Can’t Find a Laptop. Now What?",
    link: "https://herminia.us",
  },
  {
    key: "15",
    id: "15",
    name: "A Steal Might Actually Be a Raw Deal",
    link: "https://clifton.info",
  },
];

const columns: ColumnsType<DataTypeWinners> = [
  {
    title: "SL",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Product Name",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "Product Link",
    dataIndex: "link",
    key: "link",
  },
];

export const ProductList = () => {
  return (
    <div className="p-8">
      <div className="max-w-[1170px] mx-auto w-full">
        <div className="border rounded">
          <div className="p-5 flex justify-between items-center">
            <div>
              <div className="text-black font-medium text-lg">Product List</div>
              <div className="text-xs">Total Products (1205)</div>
            </div>
            <Link to="/products/add" className="btn btn-primary ">
              <HiPlus />
              <span>Add New Product</span>
            </Link>
          </div>
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
  );
};

export default ProductList;
