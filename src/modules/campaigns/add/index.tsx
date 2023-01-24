import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

const CampaignAdd = () => {
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
                <div>type</div>
              </div>
              <div className="grid grid-cols-[130px_1fr]">
                <label className="mt-2">Description</label>
                <div>
                  <textarea
                    className="form_control"
                    placeholder="Description"
                  />
                  {/* <div className="error">Required field</div> */}
                </div>
              </div>
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
                  Save & Next
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignAdd;
