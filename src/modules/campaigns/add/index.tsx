import { DatePicker, Select } from "antd";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import WinnersEditor from "../../@common/editor/bdwinners_editor";
import ImageInput from "../../@common/image_input/Image_input";
const { RangePicker } = DatePicker;

const CampaignAdd = () => {
  const handleChange = (value: string) => {};
  return (
    <div className="p-8">
      <div className="max-w-[1170px] mx-auto w-full text-sm">
        <h4 className="font-medium pb-4 mb-8 border-b">New Campaign</h4>

        <form action="#" className="w-full">
          <div className="grid grid-cols-[2fr_1fr] gap-7">
            {/* left */}
            <div className="grid gap-5 self-start">
              <div className="grid grid-cols-[130px_1fr]">
                <label className="mt-2">
                  <span>Campaign Name</span>
                  <span className="text-danger">*</span>
                </label>
                <div>
                  <input
                    type="text"
                    className="form_control error"
                    placeholder="Campaign Name"
                  />
                  <div className="error">Required field</div>
                </div>
              </div>
              <div className="grid grid-cols-[130px_1fr]">
                <label className="mt-2">Type</label>

                <div className="campaign_type_wrapper max-w-[90%] grid grid-cols-2 gap-5">
                  <label htmlFor="brandAwarness" className="cursor-pointer">
                    <input
                      id="brandAwarness"
                      type="radio"
                      name="campaignType"
                      className="hidden campaign_type_input"
                    />
                    <div className="campaign_type_box border p-4 rounded">
                      <ReactSVG src="/icons/brand-4chan.svg" />
                      <div className="text-black text-base font-medium mt-2 mb-1">
                        Brand Awarness
                      </div>
                      <div>
                        Lorem ipsum dolor sit amet consectetur. Ligula commodo
                        tempor.
                      </div>
                    </div>
                  </label>
                  <label htmlFor="websitePromotion" className="cursor-pointer">
                    <input
                      id="websitePromotion"
                      type="radio"
                      name="campaignType"
                      className="hidden campaign_type_input"
                    />
                    <div className="campaign_type_box border p-4 rounded">
                      <ReactSVG
                        src="/icons/website.svg"
                        className="website_fill"
                      />
                      <div className="text-black text-base font-medium mt-2 mb-1">
                        Website Promotion
                      </div>
                      <div>
                        Lorem ipsum dolor sit amet consectetur. Ligula commodo
                        tempor.
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-[130px_1fr]">
                <label className="mt-2">Description</label>
                <div>
                  <WinnersEditor
                    name="summary"
                    height="150"
                    // contents={description ? description : ""}
                    // className="editor_error"
                    // onChange={(event: any) => {
                    //   const content = event.target.value.replace(
                    //     /(<([^>]+)>)/gi,
                    //     ""
                    //   );

                    //   if (content) {
                    //     setDescription(event.target.value);
                    //   }
                    // }}
                    // onKeyDown={(event: any) => {
                    //   if (event?.key === "Tab") event.preventDefault();
                    // }}
                  />
                  {/* <div className="error">Required field</div> */}
                </div>
              </div>
              <div>
                <div className="border-t border-b">
                  <p className="py-[10px] text-[#181B31] font-medium">
                    Terms & Conditions
                  </p>
                </div>
                <ol className="list-decimal	pl-4 pt-4 flex flex-col gap-2 ">
                  <li className="text-[#808291] text-[14px]">
                    Lorem ipsum dolor sit amet consectetur. Mollis integer
                    condimentum blandit.
                  </li>
                  <li className="text-[#808291] text-[14px]">
                    Lorem ipsum dolor sit amet consectetur. Mollis integer
                    condimentum blandit.
                  </li>
                  <li className="text-[#808291] text-[14px]">
                    Lorem ipsum dolor sit amet consectetur. Mollis integer
                    condimentum blandit.
                  </li>
                  <li className="text-[#808291] text-[14px]">
                    Lorem ipsum dolor sit amet consectetur. Mollis integer
                    condimentum blandit.
                  </li>
                  <li className="text-[#808291] text-[14px]">
                    Lorem ipsum dolor sit amet consectetur. Mollis integer
                    condimentum blandit.
                  </li>
                </ol>
              </div>
            </div>
            {/* right */}
            <div className="border rounded p-5 grid self-start">
              <div className="grid gap-5">
                <div className="grid grid-cols-[120px_1fr]">
                  <label className="mt-2">
                    <span>Dates</span>
                    <br />(<span className="text-[11px]">start & end</span>)
                  </label>
                  <div>
                    <RangePicker
                      size={"large"}
                      className="text-sm bg-[#f9f9f9] border-[#f9f9f9]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-[120px_1fr]">
                  <label className="mt-2">Gift Value</label>
                  <div>
                    <input
                      type="text"
                      className="form_control"
                      placeholder="৳"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-[120px_1fr]">
                  <label className="mt-2">Images</label>
                  <div>
                    <ImageInput
                      onChange={(e: any) => e}
                      width={120}
                      errorMessage="f"
                      accept="string"
                      maxSize={3}
                      imageSource="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-[120px_1fr]">
                  <label className="mt-2">Winning Person</label>
                  <div>
                    <input
                      type="text"
                      className="form_control"
                      placeholder="1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-[120px_1fr]">
                  <label className="mt-2">Promotion Type</label>
                  <div>
                    <Select
                      className="form_control_select w-full"
                      onChange={handleChange}
                      options={[
                        { value: "Edu Tech", label: "Edu Tech" },
                        { value: "Service", label: "Service" },
                        { value: "Manufacturing", label: "Manufacturing" },
                      ]}
                      placeholder="Select a category"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-[120px_1fr]">
                  <label className="mt-2">Status</label>
                  <div className="px-3 py-2 bg-[#ebebed] w-max rounded text-sm self-center">
                    Draft
                  </div>
                </div>
                <Link
                  to="/campaigns/add/1"
                  type="submit"
                  className="btn btn-primary inline-flex"
                >
                  Publish
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignAdd;
