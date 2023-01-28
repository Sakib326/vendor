import { BiBookReader } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { Link } from "react-router-dom";

const singleService = [
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Study Abroad",
    description:
      "True product education is the practice of ensuring that your users understand how your product can help them achieve their goals and become wildly successful. It's not about understanding the ins and outs of every functionality; it's about what the key  benefits are for the user.",
  },
  {
    id: 2,
    imgSrc:
      "https://images.unsplash.com/photo-1674735967094-9b657f02461c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Overseas Student Health Cover",
    description: "Lorem ipsum dolor sit amet consectetur. Feugiat risus vitae.",
  },
  {
    id: 3,
    imgSrc:
      "https://images.unsplash.com/photo-1673766791276-5f46fd720021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Online Learning",
    description:
      "Lorem ipsum dolor sit amet consectetur. Feugiat risus vitae. Lorem ipsum dolor sit amet consectetur. Feugiat risus vitae. Lorem ipsum dolor sit amet consectetur. Feugiat risus vitae.",
  },
  {
    id: 4,
    imgSrc:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN0dWR5JTIwYWJyb2FkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Funding & Finance",
    description: "Lorem ipsum dolor sit amet consectetur. Feugiat risus vitae.",
  },
  {
    id: 5,
    imgSrc:
      "https://images.unsplash.com/photo-1673766791276-5f46fd720021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Funding & Finance",
    description: "Lorem ipsum dolor sit amet consectetur. Feugiat risus vitae.",
  },
  {
    id: 6,
    imgSrc:
      "https://images.unsplash.com/photo-1673766791276-5f46fd720021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Funding & Finance",
    description: "Lorem ipsum dolor sit amet consectetur. Feugiat risus vitae.",
  },
  {
    id: 7,
    imgSrc:
      "https://images.unsplash.com/photo-1673766791276-5f46fd720021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Funding & Finance",
    description: "Lorem ipsum dolor sit amet consectetur. Feugiat risus vitae.",
  },
  {
    id: 8,
    imgSrc:
      "https://images.unsplash.com/photo-1673766791276-5f46fd720021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Funding & Finance",
    description: "Lorem ipsum dolor sit amet consectetur. Feugiat risus vitae.",
  },
];

export const ProfileServices = () => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-8">
        <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
          <FaUniversity className="text-4xl" />
          <span>Study Abroad</span>
        </div>

        <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
          <BiBookReader className="text-4xl" />
          <span>Online Learning</span>
        </div>

        <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
          <GiReceiveMoney className="text-4xl" />
          <span>Funding & Finance</span>
        </div>

        <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
          <MdOutlineHealthAndSafety className="text-4xl" />
          <span>Overseas Student Health Cover</span>
        </div>
        <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
          <FaUniversity className="text-4xl" />
          <span>Study Abroad</span>
        </div>

        <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
          <BiBookReader className="text-4xl" />
          <span>Online Learning</span>
        </div>

        <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
          <GiReceiveMoney className="text-4xl" />
          <span>Funding & Finance</span>
        </div>

        <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
          <MdOutlineHealthAndSafety className="text-4xl" />
          <span>Overseas Student Health Cover</span>
        </div>
        <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
          <FaUniversity className="text-4xl" />
          <span>Study Abroad</span>
        </div>

        <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
          <BiBookReader className="text-4xl" />
          <span>Online Learning</span>
        </div>

        <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
          <GiReceiveMoney className="text-4xl" />
          <span>Funding & Finance</span>
        </div>

        <div className="border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
          <MdOutlineHealthAndSafety className="text-4xl" />
          <span>Overseas Student Health Cover</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-[30px]">
        {/* card */}

        {singleService?.map((item, i) => {
          return (
            <div className="flex flex-col">
              <div className="mb-4 w-[270px] h-[270px]">
                <img
                  className=" w-full h-full object-cover"
                  src={item?.imgSrc}
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2  font-medium text-black hover:text-primary transition-all"
              >
                {item?.title}
              </Link>
              <div className="line-clamp-2 text-sm">{item?.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileServices;
