const ProfileAboutContact = () => {
  return (
    <div className="mt-[30px]">
      <div className="border-t">
        <h4 className="py-[15px] border-b text-lg  font-medium">
          Contact and Info
        </h4>
      </div>
      <div className="grid grid-cols-1 gap-8 text-sm mt-[15px]">
        <div className="grid grid-cols-[130px_1fr] items-center">
          <span>Mobile Number</span>
          <span className="text-black font-medium">+880 123 456 7890</span>
        </div>

        <div className="grid grid-cols-[130px_1fr] items-center">
          <span>Email</span>
          <span className="text-black font-medium">info@myunisearch.com</span>
        </div>

        <div className="">
          <div className="grid grid-cols-[130px_1fr] items-center">
            <span>Website</span>
            <span className="text-black font-medium">www.myunisearch.com</span>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-[130px_1fr] items-center">
            <span>Address</span>
            <span className="text-black font-medium">
              Flat A&B, Level 6, 308, Elephant Road, Dhaka, Bangladesh
            </span>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-[130px_1fr] items-center">
            <span>Postal Code</span>
            <span className="text-black font-medium">1200</span>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.281836240752!2d90.38529931534455!3d23.73732709519169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c780d8921d%3A0x548a98b9b05efa42!2sM4YOURS%20IT!5e0!3m2!1sen!2sbd!4v1674807237847!5m2!1sen!2sbd"
            width="728"
            height="300"
            className="border:0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProfileAboutContact;
