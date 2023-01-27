import { Select } from "antd";

const ProfileEditContact = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <h4 className="mb-4 pb-2 border-b text-lg  font-medium">
        Contact and Info
      </h4>
      <form action="#" className="w-full">
        <div className="text-sm">
          <div className="grid grid-cols-2 gap-x-8 gap-y-5">
            <div className="col-span-2">
              <div className="grid grid-cols-[130px_1fr] items-center">
                <label>Avatar</label>
                <div>avatar image changes will be placed here</div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-[130px_1fr] items-center">
                <label>Business Name</label>
                <input
                  type="text"
                  className="form_control"
                  placeholder="Business Name"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="grid grid-cols-[130px_1fr] items-center">
                <label>Mobile Number</label>
                <input
                  type="text"
                  className="form_control"
                  placeholder="Mobile Number"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="grid grid-cols-[130px_1fr] items-center">
                <label>Website</label>
                <input
                  type="text"
                  className="form_control"
                  placeholder="Website"
                />
              </div>
            </div>

            <div className="grid grid-cols-[130px_1fr] gap-[44px]">
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

            <div className="col-span-1">
              <div className="grid grid-cols-[130px_1fr] items-center">
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
            <div className="col-span-1">
              <div className="grid grid-cols-[130px_1fr] items-center">
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
            <div className="col-span-2">
              <div className="grid grid-cols-[130px_1fr] items-center">
                <label>GMap Link</label>
                <input
                  type="text"
                  className="form_control"
                  placeholder="GMap Link"
                />
              </div>
            </div>
          </div>
        </div>

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

export default ProfileEditContact;
