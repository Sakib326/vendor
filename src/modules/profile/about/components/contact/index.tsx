const ProfileAboutContact = () => {
  return (
    <div>
      <h4 className="mb-4 pb-2 border-b text-lg  font-medium">
        Contact and Info
      </h4>
      <div className="grid grid-cols-2 gap-8 text-sm">
        <div className="col-span-2">
          <div className="grid grid-cols-[130px_1fr] items-center">
            <span>Business Name</span>
            <span className="text-black font-medium">Unisearch</span>
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-[130px_1fr] items-center">
            <span>Mobile Number</span>
            <span className="text-black font-medium">+880 123 456 7890</span>
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-[130px_1fr] items-center">
            <span>Website</span>
            <span className="text-black font-medium">www.myunisearch.com</span>
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-[130px_1fr] items-center">
            <span>Bus. Category</span>
            <span className="text-black font-medium">Ed Tech</span>
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-[130px_1fr] items-center">
            <span>Province</span>
            <span className="text-black font-medium">Dhaka</span>
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-[130px_1fr] items-center">
            <span>City</span>
            <span className="text-black font-medium">Dhaka</span>
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-[130px_1fr] items-center">
            <span>Area</span>
            <span className="text-black font-medium">Elephant Road</span>
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-[130px_1fr] items-center">
            <span>Landmark</span>
            <span className="text-black font-medium">
              Flat A&amp;B, Level 6, 308
            </span>
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-[130px_1fr] items-center">
            <span>GMap Link</span>
            <span className="text-black font-medium">
              https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3652.3073221858604!2d90.3841553149811!3d23.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAboutContact;
