import { Dropdown, Space, Table } from "antd";
import { Fragment } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import newsSlider from "../../_fakedata/slider.json";

export const CampaignTable = () => {
  const columns = [
    {
      title: "Campaign Name",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Start Date",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "End Date",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Total Participants",
      dataIndex: "address",
      key: "participants",
    },
    {
      title: "Status",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
          >
            <BiDotsHorizontalRounded />
          </Dropdown>
        </Space>
      ),
    },
  ];
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "31",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "32",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "33",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "34",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "35",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "36",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "37",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "38",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "39",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "377",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "355",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <div className="p-8">
      <div className="max-w-[1170px] mx-auto w-full">
        <Fragment>
          <div className="border-slate-200 border rounded-t-md border-b-0">
            <div className="mx-4 py-4">
              <p className="text-lg text-black font-medium">Campaign List</p>
              <p>Total Campaign</p>
            </div>
          </div>

          <div className="custom_data_table">
            <Table
              rowClassName="custom_data_table_row"
              columns={columns}
              dataSource={data}
            />
          </div>
        </Fragment>
      </div>
    </div>
  );
};

export default CampaignTable;
