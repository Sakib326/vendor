import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

export const ProfileSettings = () => {
  return (
    <div className="grid gap-7 text-sm">
      {/* Profile Details */}
      <div className="border rounded p-6">
        <div className="font-semibold text-black mb-8">Profile Details</div>
        <form action="#" className="w-full">
          <div className="grid grid-cols-2 gap-x-4 gap-y-10">
            <div className="form_group">
              <label htmlFor="">
                Current Password <span className="astrisk">*</span>
              </label>
              <input
                type="text"
                placeholder="Current Password"
                // className="error"
              />
              {/* <div className="error">Required Field</div> */}
            </div>
            <div></div>
            <div className="form_group">
              <label htmlFor="password">
                New Password <span className="astrisk">*</span>
              </label>
              <input id="password" type="text" placeholder="New Password" />
            </div>
            <div className="form_group">
              <label htmlFor="password">
                Confirm New Password<span className="astrisk">*</span>
              </label>
              <input
                id="password"
                type="text"
                placeholder="Confirm New Password"
              />
            </div>
          </div>
        </form>
        <div className="my-5">
          <div className="font-semibold text-sm text-black mb-2">
            Password Requirements:
          </div>
          <ul className="text-sm list-disc pl-4">
            <li>Minimum 8 characters long - the more, the better</li>
            <li>At least one lowercase character</li>
            <li>At least one number, symbol, or whitespace character</li>
          </ul>
        </div>
        <div className="flex item-center gap-3">
          <button type="button" className="btn btn-primary">
            Save Changes
          </button>
          <button type="button" className="btn btn-grey">
            Cancel
          </button>
        </div>
      </div>

      {/* Two-steps verification */}
      <div className="border rounded p-6">
        <div className="mb-5">
          <div className="font-semibold text-black mb-2">
            Two-steps verification
          </div>
          <div className="font-medium	 text-sm mb-3">
            Two-factor authentication is not enabled yet.
          </div>
          <div className="text-sm">
            Two-factor authentication adds a layer of security to your account{" "}
            <br />
            by requiring more than just a password to log in. Learn more.
          </div>
        </div>
        <div className="flex item-center gap-3">
          <button type="button" className="btn btn-primary">
            Enable Two-factor Authentication
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="border rounded p-6">
        <div className="mb-5">
          <div className="font-semibold text-black mb-2">
            Notification Settings
          </div>
          <div className="mb-5">
            We need permission to show notifications.{" "}
            <span className="font-medium text-black">Request Permission</span>
          </div>
          <div className="text-sm mb-1">
            <Checkbox onChange={onChange}>Daily Active Campaign list</Checkbox>
          </div>
          <div className="text-sm">
            <Checkbox onChange={onChange}>If win any campaign gift</Checkbox>
          </div>
        </div>
        <div className="flex item-center gap-3">
          <button type="button" className="btn btn-primary">
            Save Changes
          </button>
          <button type="button" className="btn btn-grey">
            Discard
          </button>
        </div>
      </div>

      {/* Delete Account */}
      <div className="border rounded p-6">
        <div className="mb-5">
          <div className="font-semibold text-black mb-2">
            Notification Settings
          </div>
          <div className="mb-5 bg-tertiary p-4 text-primary rounded">
            <div className="font-medium mb-1">
              Are you sure you want to delete your account?
            </div>
            <p>
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
          </div>

          <div className="text-sm">
            <Checkbox onChange={onChange}>
              I confirm my account deactivation
            </Checkbox>
          </div>
        </div>

        <button type="button" className="btn btn-primary">
          Deactivate Account
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
