import { Select } from "antd";
import { AiOutlinePlus } from "react-icons/ai";

const ProfileEditSocialMedia = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <h4 className="mb-4 pb-2 border-b text-lg font-medium">
        Social Media Links
      </h4>
      <form action="#">
        <div className="grid gap-4">
          <div className="grid grid-cols-[1fr_1fr_auto] gap-4 items-center">
            <input
              type="text"
              className="form_control"
              placeholder="Type URL"
            />
            <Select
              size="large"
              placeholder="Select Media"
              className="form_control_select"
              onChange={handleChange}
              options={[
                { value: "Facebook", label: "Facebook" },
                { value: "Youtube", label: "Youtube" },
                { value: "Instagram", label: "Instagram" },
                { value: "Pinterest", label: "Pinterest" },
              ]}
            />
            <button type="button" className="btn btn-secondary">
              <span>Delete</span>
            </button>
          </div>
          <div className="grid grid-cols-[1fr_1fr_auto] gap-4 items-center">
            <input
              type="text"
              className="form_control"
              placeholder="Type URL"
            />
            <Select
              size="large"
              placeholder="Select Media"
              className="form_control_select"
              onChange={handleChange}
              options={[
                { value: "Facebook", label: "Facebook" },
                { value: "Youtube", label: "Youtube" },
                { value: "Instagram", label: "Instagram" },
                { value: "Pinterest", label: "Pinterest" },
              ]}
            />
            <button type="button" className="btn btn-secondary">
              <span>Delete</span>
            </button>
          </div>
          <div className="grid grid-cols-[1fr_1fr_auto] gap-4 items-center">
            <input
              type="text"
              className="form_control"
              placeholder="Type URL"
            />
            <Select
              size="large"
              placeholder="Select Media"
              className="form_control_select"
              onChange={handleChange}
              options={[
                { value: "Facebook", label: "Facebook" },
                { value: "Youtube", label: "Youtube" },
                { value: "Instagram", label: "Instagram" },
                { value: "Pinterest", label: "Pinterest" },
              ]}
            />
            <button type="button" className="btn btn-secondary">
              <span>Delete</span>
            </button>
          </div>
          <div className="grid grid-cols-[1fr_1fr_auto] gap-4 items-center">
            <input
              type="text"
              className="form_control"
              placeholder="Type URL"
            />
            <Select
              size="large"
              placeholder="Select Media"
              className="form_control_select"
              onChange={handleChange}
              options={[
                { value: "Facebook", label: "Facebook" },
                { value: "Youtube", label: "Youtube" },
                { value: "Instagram", label: "Instagram" },
                { value: "Pinterest", label: "Pinterest" },
              ]}
            />
            <button type="button" className="btn btn-secondary">
              <span>Delete</span>
            </button>
          </div>

          <button
            type="button"
            className="btn btn-primary text-xs w-max px-2.5 py-1.5"
          >
            <AiOutlinePlus className="text-lg" />
            <span>Add More</span>
          </button>
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

export default ProfileEditSocialMedia;
