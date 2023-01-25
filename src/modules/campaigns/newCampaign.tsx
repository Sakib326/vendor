import { MdOutlineClose } from "react-icons/md";
import { NewsCard } from "../@common/news_card";
import newsSlider from "./../../_fakedata/slider.json";
import newsPopular from "./../../_fakedata/popular.json";
import newsList from "./../../_fakedata/newslist.json";
import { Select } from "antd";

export const NewCampaign = () => {
  const newsHighlight = newsSlider.find((item) => item.id == 5);

  return (
    <div className="p-8">
      <div className="max-w-[1170px] mx-auto w-full">
        {/* <h4 className="mb-5">Feed</h4>

        <NewsCard data={newsHighlight} size="big" />

        <div className="divider w-full h-[1px] bg-gray-200 my-3"></div>

        <ul className="flex flex-col">
          {newsList.map((item, i) => {
            return (
              <li key={i}>
                <NewsCard data={item} />
                <div className="divider w-full h-[1px] bg-gray-200 my-3"></div>
              </li>
            );
          })}
        </ul>

        <NewsCard
          layout={"row"}
          size={"default"}
          category={true}
          like={true}
          description={true}
          data={newsHighlight}
        />
        <div className="divider w-full h-[1px] bg-gray-200 my-3"></div>

      
        <div className="hidden mb-4 aro_porun lg:block">
          <div className="flex items-center justify-between mb-4 text-lg">
            <div className="font-bold">আরও পড়ুন</div>
            <button>
              <MdOutlineClose />
            </button>
          </div>

          <ul className="grid grid-cols-5 gap-3">
            {newsPopular.map((item, i) => {
              return (
                <li key={i}>
                  <NewsCard
                    size=""
                    layout="column"
                    category={false}
                    like={false}
                    description={false}
                    data={item}
                  />
                </li>
              );
            })}
          </ul>
          <div className="divider w-full h-[1px] bg-gray-200 my-3"></div>
        </div>
        

        <ul className="flex flex-col">
          {newsSlider.map((item, i) => {
            return (
              <li key={i}>
                <NewsCard data={item} />
                <div className="divider w-full h-[1px] bg-gray-200 my-3"></div>
              </li>
            );
          })}
        </ul> */}
        <form action="#" className="w-full">
          <div className="border rounded mb-8">
            <div className="border-b py-4 px-6 flex items-center justify-between">
              <div className="text-lg font-medium text-black">
                Edit Profile Details
              </div>
            </div>
            <div className="p-6 text-sm">
              <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                <div className="col-span-2">
                  <div className="grid grid-cols-[130px_1fr] items-center">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form_control"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="grid grid-cols-[130px_1fr] items-center">
                    <label>Employment</label>
                    <input
                      type="text"
                      className="form_control"
                      placeholder="Employment"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="grid grid-cols-[80px_1fr] items-center">
                    <label>Gender</label>
                    <Select
                      className="form_control_select"
                      // onChange={handleChange}
                      options={[
                        { value: "Male", label: "Male" },
                        { value: "Female", label: "Female" },
                        { value: "Others", label: "Others" },
                      ]}
                    />
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="grid grid-cols-[130px_1fr] items-center">
                    <label>Hobby</label>
                    <input
                      type="text"
                      className="form_control"
                      placeholder="Hobby"
                    />
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="grid grid-cols-[130px_1fr] items-center">
                    <label>NID</label>
                    <input
                      type="text"
                      className="form_control"
                      placeholder="NID"
                    />
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="grid grid-cols-[130px_1fr] items-center">
                    <label>Province</label>
                    <Select
                      className="form_control_select"
                      // onChange={handleChange}
                      options={[
                        { value: "Dhaka", label: "Dhaka" },
                        { value: "Kushtia", label: "Kushtia" },
                        { value: "Chittagong", label: "Chittagong" },
                      ]}
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="grid grid-cols-[80px_1fr] items-center">
                    <label>City</label>
                    <Select
                      className="form_control_select"
                      // onChange={handleChange}
                      options={[
                        { value: "Dhaka", label: "Dhaka" },
                        { value: "Kushtia", label: "Kushtia" },
                        { value: "Chittagong", label: "Chittagong" },
                      ]}
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-[130px_1fr] items-center">
                    <label>Area</label>
                    <input
                      type="text"
                      className="form_control"
                      placeholder="Area"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-[130px_1fr] items-center">
                    <label>Landmark</label>
                    <input
                      type="text"
                      className="form_control"
                      placeholder="Landmark"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-center mb-[80px]">
            <button
              // onClick={() => setEdit(false)}
              type="button"
              className="btn btn-primary"
            >
              Save Changes
            </button>
            <button
              // onClick={() => setEdit(false)}
              type="button"
              className="btn btn-grey"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCampaign;
