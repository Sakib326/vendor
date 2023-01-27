import { Link } from "react-router-dom";
import { BiBookReader } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const singleProduct = [
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1673766791276-5f46fd720021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Nature",
    name: "Product name",
    price: "BDT 5000",
    prevPrice: "BDT 6000",
  },
  {
    id: 2,
    imgSrc:
      "https://images.unsplash.com/photo-1673874246309-de6d5fc34369?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "category",
    name: "Product name",
    price: "BDT 5000",
    prevPrice: "BDT 6000",
  },
  {
    id: 3,
    imgSrc:
      "https://images.unsplash.com/photo-1673865587236-de597238c72d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Arts",
    name: "Product name",
    price: "BDT 5000",
    prevPrice: "BDT 6000",
  },
  {
    id: 4,
    imgSrc:
      "https://images.unsplash.com/photo-1673591296410-1220ba8d6c0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    category: "category",
    name: "Product name",
    price: "BDT 5000",
    prevPrice: "BDT 6000",
  },
  {
    id: 5,
    imgSrc:
      "https://images.unsplash.com/photo-1674062130751-f8c23f3b4821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Crafts",
    name: "Product name",
    price: "BDT 5000",
    prevPrice: "BDT 6000",
  },
  {
    id: 6,
    imgSrc:
      "https://images.unsplash.com/photo-1673865587236-de597238c72d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "category",
    name: "Product name",
    price: "BDT 5000",
    prevPrice: "BDT 6000",
  },
  {
    id: 7,
    imgSrc:
      "https://breadnbeyond.com/wp-content/uploads/2021/09/Education-Explainer-Video.jpg",
    category: "category",
    name: "Product name",
    price: "BDT 5000",
    prevPrice: "BDT 6000",
  },
  {
    id: 8,
    imgSrc:
      "https://images.unsplash.com/photo-1673555791730-0ee56e1b768b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "category",
    name: "Product name",
    price: "BDT 5000",
    prevPrice: "BDT 6000",
  },
];
export const ProfileProducts = () => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-6 mb-8">
        <div className="bg-primary text-white border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
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
      </div>
      <div className="grid grid-cols-4 gap-8">
        {/* card */}

        {singleProduct?.map((item, i) => {
          return (
            <div className="flex flex-col">
              <div className="mb-4 w-[270px] h-[270px]">
                <img
                  className=" w-full h-full object-cover"
                  src={item.imgSrc}
                  alt="product"
                />
              </div>
              <span>{item?.category}</span>
              <Link to="#" className="text-primary font-medium">
                {item?.name}
              </Link>

              <div className="flex justify-start items-center gap-2">
                <p className="text-primary font-medium">{item?.price}</p>
                <p>{item?.prevPrice}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileProducts;
