import { Modal, Select } from "antd";
import { HiPlus } from "react-icons/hi";
import WinnersEditor from "../../../../@common/editor/bdwinners_editor";
import { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";

const ProfileEditOverview = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <h4 className="mb-4 pb-2 border-b text-lg font-medium">Edit Profile</h4>
      <form action="#">
        <div className="grid grid-cols-[110px_1fr] gap-[44px]">
          <span>Avatar</span>
          <div>
            <div className="w-[121px] h-[121px] rounded-full border"></div>
            <span className="text-xs">Allowed file types: png, jpg, jpeg</span>
          </div>
        </div>
        <div className=" grid grid-cols-[110px_1fr] gap-[44px] mt-[10px]">
          <span>Description</span>
          <div className="input_wrapper">
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
        <div className="text-sm">
          <div className="grid grid-cols-1 gap-x-8 gap-y-5 mt-5">
            <div className="col-span-1">
              <div className="grid grid-cols-[110px_1fr] items-center gap-[44px]">
                <label>Mobile Number</label>
                <input
                  type="text"
                  className="form_control"
                  placeholder="+880 123 456 7890"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="grid grid-cols-[110px_1fr] items-center gap-[44px]">
                <label>Email</label>
                <input
                  type="email"
                  className="form_control"
                  placeholder="info@myunisearch.com"
                />
              </div>
            </div>
            {/* <div className="col-span-2">
              <div className="grid grid-cols-[110px_1fr] items-center gap-[44px]">
                <label>Business Name</label>
                <input
                  type="text"
                  className="form_control"
                  placeholder="Business Name"
                />
              </div>
            </div> */}

            <div className="col-span-1">
              <div className="grid grid-cols-[110px_1fr] items-center gap-[44px]">
                <label>Website</label>
                <input
                  type="text"
                  className="form_control"
                  placeholder="info@myunisearch.com"
                />
              </div>
            </div>

            <div className="col-span-1">
              <div className="grid grid-cols-[110px_1fr] items-center gap-[44px]">
                <label>Province</label>
                <Select
                  className="form_control_select"
                  onChange={handleChange}
                  options={[
                    { value: "Dhaka", label: "Dhaka" },
                    { value: "Kushtia", label: "Kushtia" },
                    { value: "Chittagong", label: "Chittagong" },
                  ]}
                />
              </div>
            </div>

            {/* <div className="col-span-1">
              <div className="grid grid-cols-[110px_1fr] items-center gap-[44px]">
                <label>Bus. Category</label>
                <Select
                  className="form_control_select"
                  onChange={handleChange}
                  options={[
                    { value: "Edu Tech", label: "Edu Tech" },
                    { value: "Service", label: "Service" },
                    { value: "Manufacturing", label: "Manufacturing" },
                  ]}
                />
              </div>
            </div> */}

            <div className="col-span-1">
              <div className="grid grid-cols-[110px_1fr] items-center gap-[44px]">
                <label>City</label>
                <Select
                  className="form_control_select"
                  onChange={handleChange}
                  options={[
                    { value: "Dhaka", label: "Dhaka" },
                    { value: "Kushtia", label: "Kushtia" },
                    { value: "Chittagong", label: "Chittagong" },
                  ]}
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="grid grid-cols-[110px_1fr] items-center gap-[44px]">
                <label>Area</label>
                <input
                  type="text"
                  className="form_control"
                  placeholder="Area"
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-[110px_1fr] items-center gap-[44px]">
                <label>Landmark</label>
                <input
                  type="text"
                  className="form_control"
                  placeholder="Flat A&B, Level 6, 308"
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-[110px_1fr] items-center gap-[44px]">
                <label>GMap Link</label>
                <input
                  type="text"
                  className="form_control"
                  placeholder='<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3652.3073221858604!2d90.3841553149811!3d23.73641788459626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c780d8921d%3A0x548a98b9b05efa42!2sM4YOURS%20IT!5e0!3m2!1sen!2sbd!4v1674454474769!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                />
              </div>
            </div>

            <div className="grid grid-cols-[110px_1fr] gap-[44px]">
              <label className="mt-2">Category</label>
              <div className="flex justify-center gap-[15px]">
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
                  <button
                    onClick={showModal}
                    type="button"
                    className="btn btn-secondary mt-3 px-2 py-1.5 text-xs"
                  >
                    <HiPlus />
                    <span>Add More</span>
                  </button>
                </div>
                <div className="w-full">
                  <Select
                    className="form_control_select w-full"
                    onChange={handleChange}
                    options={[
                      { value: "instagram", label: "Instagram" },
                      { value: "facebook", label: "Facebook" },
                      { value: "whatsapp", label: "Whatsapp" },
                    ]}
                    placeholder="Instagram"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-[30px]">
            <button type="button" className="btn btn-primary">
              Save Changes
            </button>
            <button type="button" className="btn btn-grey">
              Discard
            </button>
          </div>
        </div>
      </form>
      <Modal
        footer={null}
        title={<div className="text-black ml-1">Create New Category</div>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        wrapClassName="bg-red"
      >
        <div className="mt-4 p-2">
          <form action="#" className="w-full">
            <div className="grid gap-5">
              <div>
                <label className="mb-1">Title</label>
                <input
                  type="text"
                  className="form_control"
                  placeholder="Title"
                />
              </div>

              <div>
                <label className="mb-1">Icon</label>
                <div className="flex flex-col justify-center items-center border-[1px] border-[#EEEEEE] hover:border-[#AC224D] transition-all py-[27px] rounded-[6px]">
                  <p className="text-[48px]">
                    <InboxOutlined />
                  </p>
                  <div className="max-w-[290px] w-full mx-auto">
                    <p className="text-center text-base text-[#181B31] font-medium mb-[10px]">
                      Click or drag file to this area to upload
                    </p>
                    <p className=" text-center text-[12px]">
                      Support for a single or bulk upload. Strictly prohibit
                      from uploading company data or other band files
                    </p>
                  </div>
                </div>
              </div>
              {/* <div>
                <label className="mb-1">Icon</label>
                <div>
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibit
                      from uploading company data or other band files
                    </p>
                  </Dragger>
                </div>
              </div> */}
            </div>

            <div className="flex items-center gap-3 mt-5">
              <button type="submit" className="btn btn-primary">
                Create
              </button>
              <button
                onClick={handleCancel}
                type="button"
                className="btn btn-grey"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileEditOverview;
