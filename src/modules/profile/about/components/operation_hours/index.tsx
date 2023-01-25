const ProfileAboutOperationHours = () => {
  return (
    <div>
      <h4 className="mb-4 pb-2 border-b text-lg font-medium">
        Hours of Operation
      </h4>
      <div className="grid gap-8">
        <div className="grid grid-cols-[1fr_4fr] gap-5">
          <span>Monday</span>
          <span className="text-black">10 AM - 6 PM</span>
        </div>
        <div className="grid grid-cols-[1fr_4fr] gap-5">
          <span>Tuesday</span>
          <span className="text-black">10 AM - 6 PM</span>
        </div>
        <div className="grid grid-cols-[1fr_4fr] gap-5">
          <span>Wednesday</span>
          <span className="text-black">10 AM - 6 PM</span>
        </div>
        <div className="grid grid-cols-[1fr_4fr] gap-5">
          <span>Thursday</span>
          <span className="text-black">10 AM - 6 PM</span>
        </div>
        <div className="grid grid-cols-[1fr_4fr] gap-5">
          <span>Friday</span>
          <span className="text-black">10 AM - 6 PM</span>
        </div>
        <div className="grid grid-cols-[1fr_4fr] gap-5">
          <span>Saturday</span>
          <span className="text-black">10 AM - 6 PM</span>
        </div>
        <div className="grid grid-cols-[1fr_4fr] gap-5">
          <span>Sunday</span>
          <span className="text-black">Closed</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileAboutOperationHours;
