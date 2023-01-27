import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { ImPinterest2 } from "react-icons/im";

const ProfileAbourOverview = () => {
  return (
    <div>
      <div>
        <h4 className="mb-4 pb-2 border-b text-lg font-medium">
          About Company
        </h4>
        <div>
          UniSearch harnesses over ten years of experience in international
          student recruitment within source markets and innovative AI-powered
          technology to streamline the study abroad process from the research
          stage down to arriving in the destination country and beyond. Through
          predictive analytics and algorithm-driven systems, we develop personal
          one-to-one relationships with students, universities, and our network
          of dedicated counsellors and mentors, covering all the bases of study
          abroad through a single all-inclusive platform.
        </div>
        <br />

        <div>
          UniSearch harnesses over ten years of experience in international
          student recruitment within source markets and innovative AI-powered
          technology to streamline the study abroad process from the research
          stage down to arriving in the destination country and beyond. Through
          predictive analytics and algorithm-driven systems, we develop personal
          one-to-one relationships with students, universities, and our network
          of dedicated counsellors and mentors, covering all the bases of study
          abroad through a single all-inclusive platform.
        </div>
        <br />

        <div>
          UniSearch harnesses over ten years of experience in international
          student recruitment within source markets and innovative AI-powered
          technology to streamline the study abroad process from the research
          stage down to arriving in the destination country and beyond. Through
          predictive analytics and algorithm-driven systems, we develop personal
          one-to-one relationships with students, universities, and our network
          of dedicated counsellors and mentors, covering all the bases of study
          abroad through a single all-inclusive platform.
        </div>
      </div>
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
              <span className="text-black font-medium">
                www.myunisearch.com
              </span>
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
      <div className="mt-[30px]">
        <div className="border-b border-t">
          <h4 className="py-[15px]  text-lg font-medium">Social Media Links</h4>
        </div>
        <div className="grid gap-3 mt-[15px]">
          <a href="#" className="flex gap-2 items-center">
            <ImPinterest2 />
            <span className="text-black">www.pinterest.com</span>
          </a>
          <a href="#" className="flex gap-2 items-center">
            <FiFacebook />
            <span className="text-black">www.facebook.com</span>
          </a>
          <a href="#" className="flex gap-2 items-center">
            <FiInstagram />
            <span className="text-black">www.instagram.com</span>
          </a>
          <a href="#" className="flex gap-2 items-center">
            <FiYoutube />
            <span className="text-black">www.youtube.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileAbourOverview;
