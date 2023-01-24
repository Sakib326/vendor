const ProfileEditSpecialty = () => {
  return (
    <div>
      <h4 className="mb-4 pb-2 border-b text-lg font-medium">Specialty</h4>
      <form action="#">
        <div className="input_wrapper">
          <textarea
            placeholder="About Company"
            className="border p-3"
          ></textarea>
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

export default ProfileEditSpecialty;
