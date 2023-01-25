import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Input, Radio, Space, TimePicker } from "antd";
import type { Dayjs } from "dayjs";

const ProfileEditOperationHours = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <h4 className="mb-4 pb-2 border-b text-lg font-medium">
        Hours of Operation
      </h4>
      <form action="#">
        <Radio.Group onChange={onChange} value={value}>
          <Space direction="vertical">
            <Radio value={1}>No Hours Available</Radio>
            <Radio value={2}>Always Open</Radio>
            <Radio value={3}>Permanently Closed</Radio>
            <Radio value={4}>Temporarily Closed</Radio>
            <Radio value={5}>Open on Selected Hours</Radio>
          </Space>
        </Radio.Group>

        {value === 5 ? (
          <div className="mt-4 grid gap-4">
            <div className="grid grid-cols-[130px_1fr_1fr] gap-4 items-center">
              <label htmlFor="">Monday</label>
              <TimePicker
                className="bg-[#F9F9F9] border-transparent"
                size="large"
                use12Hours
                format="h:mm a"
                placeholder="Opening"
              />
              <TimePicker
                className="bg-[#F9F9F9] border-transparent"
                size="large"
                use12Hours
                format="h:mm a"
                placeholder="Closing"
              />
            </div>
            <div className="grid grid-cols-[130px_1fr_1fr] gap-4 items-center">
              <label htmlFor="">Tuesday</label>
              <TimePicker
                className="bg-[#F9F9F9] border-transparent"
                size="large"
                use12Hours
                format="h:mm a"
                placeholder="Opening"
              />
              <TimePicker
                className="bg-[#F9F9F9] border-transparent"
                size="large"
                use12Hours
                format="h:mm a"
                placeholder="Closing"
              />
            </div>
            <div className="grid grid-cols-[130px_1fr_1fr] gap-4 items-center">
              <label htmlFor="">Wednesday</label>
              <TimePicker
                className="bg-[#F9F9F9] border-transparent"
                size="large"
                use12Hours
                format="h:mm a"
                placeholder="Opening"
              />
              <TimePicker
                className="bg-[#F9F9F9] border-transparent"
                size="large"
                use12Hours
                format="h:mm a"
                placeholder="Closing"
              />
            </div>
            <div className="grid grid-cols-[130px_1fr_1fr] gap-4 items-center">
              <label htmlFor="">Thursday</label>
              <TimePicker
                className="bg-[#F9F9F9] border-transparent"
                size="large"
                use12Hours
                format="h:mm a"
                placeholder="Opening"
              />
              <TimePicker
                className="bg-[#F9F9F9] border-transparent"
                size="large"
                use12Hours
                format="h:mm a"
                placeholder="Closing"
              />
            </div>
            <div className="grid grid-cols-[130px_1fr_1fr] gap-4 items-center">
              <label htmlFor="">Friday</label>
              <TimePicker
                className="bg-[#F9F9F9] border-transparent"
                size="large"
                use12Hours
                format="h:mm a"
                placeholder="Opening"
              />
              <TimePicker
                className="bg-[#F9F9F9] border-transparent"
                size="large"
                use12Hours
                format="h:mm a"
                placeholder="Closing"
              />
            </div>
            <div className="grid grid-cols-[130px_1fr_1fr] gap-4 items-center">
              <label htmlFor="">Saturday</label>
              <TimePicker
                className="bg-[#F9F9F9] border-transparent"
                size="large"
                use12Hours
                format="h:mm a"
                placeholder="Opening"
              />
              <TimePicker
                className="bg-[#F9F9F9] border-transparent"
                size="large"
                use12Hours
                format="h:mm a"
                placeholder="Closing"
              />
            </div>
            <div className="grid grid-cols-[130px_1fr_1fr] gap-4 items-center">
              <label htmlFor="">Sunday</label>
              <TimePicker
                className="bg-[#F9F9F9] border-transparent"
                size="large"
                use12Hours
                format="h:mm a"
                placeholder="Opening"
              />
              <TimePicker
                className="bg-[#F9F9F9] border-transparent"
                size="large"
                use12Hours
                format="h:mm a"
                placeholder="Closing"
              />
            </div>
          </div>
        ) : null}

        <div className="flex items-center gap-3 mt-5">
          <button type="button" className="btn btn-primary">
            Save Changes
          </button>
          <button type="button" className="btn btn-grey">
            Discard
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditOperationHours;
