import { DatePicker, Tooltip } from "antd";
import { AiOutlineDelete } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";
const { RangePicker } = DatePicker;

const CampaignAddSecond = () => {
  return (
    <div className="p-8">
      <div className="max-w-[1170px] mx-auto w-full text-sm">
        <h4 className="font-medium pb-4 mb-8 border-b">New Campaign</h4>

        <form action="#" className="w-full">
          <div className="grid grid-cols-[2fr_1fr] gap-7">
            {/* left */}

            <div className="grid gap-4">
              {/* steps */}
              <div className="mb-2">
                <div className="mb-3 flex items-center justify-between font-medium text-black">
                  <span>Step 1</span>
                  <span>Step 2</span>
                  <span>Under Review</span>
                </div>
                <div className="h-[5px] w-full bg-[#eee] relative">
                  <div className="h-[5px] bg-primary flex items-center justify-between w-[50%] mb-[-5px] ml-[1px]"></div>
                  <div className="flex items-center justify-between absolute w-full left-0 top-[-7px]">
                    <span className="block w-[18px] h-[18px] bg-primary rounded-full border-[3px] border-white shadow-md "></span>
                    <span className="block w-[18px] h-[18px] bg-primary rounded-full border-[3px] border-white shadow-md "></span>
                    <span className="block w-[18px] h-[18px] bg-grey rounded-full border-[3px] border-white shadow-md"></span>
                  </div>
                </div>
              </div>
              {/* repeatable field */}
              <div className="grid gap-5 self-start border rounded p-3">
                <div className="border-b pb-2 text-black font-medium flex items-center justify-between">
                  <span>Gift Level 1</span>
                  <Tooltip title="Delete">
                    <button type="button">
                      <AiOutlineDelete className="text-lg hover:text-danger transition-all" />
                    </button>
                  </Tooltip>
                </div>
                <div className="grid grid-cols-[130px_1fr]">
                  <label className="mt-2">
                    <span>Title</span>
                    <span className="text-danger">*</span>
                  </label>
                  <div>
                    <input
                      type="text"
                      className="form_control error"
                      placeholder="Title"
                    />
                    <div className="error">Required field</div>
                  </div>
                </div>

                <div className="grid grid-cols-[130px_1fr]">
                  <label className="mt-2">Description</label>
                  <div>
                    <textarea
                      className="form_control"
                      placeholder="Description"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-[130px_1fr]">
                  <label className="mt-2">
                    <span>Number of Winners</span>
                  </label>
                  <div>
                    <input
                      type="number"
                      className="form_control"
                      placeholder="Number of Winners"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-[130px_1fr]">
                  <label className="mt-2">
                    <span>Gallery</span>
                  </label>
                  <div>image component</div>
                </div>
              </div>
              {/* repeatable field */}
              <div className="grid gap-5 self-start border rounded p-3">
                <div className="border-b pb-2 text-black font-medium flex items-center justify-between">
                  <span>Gift Level 2</span>
                  <Tooltip title="Delete">
                    <button type="button">
                      <AiOutlineDelete className="text-lg hover:text-danger transition-all" />
                    </button>
                  </Tooltip>
                </div>
                <div className="grid grid-cols-[130px_1fr]">
                  <label className="mt-2">
                    <span>Title</span>
                    <span className="text-danger">*</span>
                  </label>
                  <div>
                    <input
                      type="text"
                      className="form_control error"
                      placeholder="Title"
                    />
                    <div className="error">Required field</div>
                  </div>
                </div>

                <div className="grid grid-cols-[130px_1fr]">
                  <label className="mt-2">Description</label>
                  <div>
                    <textarea
                      className="form_control"
                      placeholder="Description"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-[130px_1fr]">
                  <label className="mt-2">
                    <span>Number of Winners</span>
                  </label>
                  <div>
                    <input
                      type="number"
                      className="form_control"
                      placeholder="Number of Winners"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-[130px_1fr]">
                  <label className="mt-2">
                    <span>Gallery</span>
                  </label>
                  <div>image component</div>
                </div>
              </div>

              <button type="button" className="btn btn-primary w-max">
                <HiPlus />
                <span>Add More</span>
              </button>
            </div>

            {/* right */}
            <div className="border rounded p-5 grid self-start">
              <div className="grid gap-5">
                <div className="grid grid-cols-[100px_1fr]">
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

                <div className="grid grid-cols-[100px_1fr]">
                  <label className="mt-2">Thumbnail</label>
                  <div>image picker</div>
                </div>
                <div className="grid grid-cols-[100px_1fr]">
                  <label className="mt-2">Status</label>
                  <div className="px-3 py-2 bg-[#ebebed] w-max rounded text-sm self-center">
                    Draft
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Publish
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignAddSecond;
