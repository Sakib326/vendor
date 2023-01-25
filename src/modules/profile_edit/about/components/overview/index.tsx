import WinnersEditor from "../../../../@common/editor/bdwinners_editor";

const ProfileEditOverview = () => {
  return (
    <div>
      <h4 className="mb-4 pb-2 border-b text-lg font-medium">About Company</h4>
      <form action="#">
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

export default ProfileEditOverview;
