import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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
function NextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <FiChevronRight
      className={`${className} slider_arrow_next`}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <FiChevronLeft
      className={`${className} slider_arrow_prev`}
      onClick={onClick}
    />
  );
}

const settingsMain = {
  asNavFor: ".slider-nav",
  arrows: true,
  centerMode: false,
  infinite: false,
  centerPadding: "20px 0px",
  slidesToShow: 1,
  speed: 500,
  nextArrow: (
    <NextArrow className={undefined} style={undefined} onClick={undefined} />
  ),
  prevArrow: (
    <PrevArrow className={undefined} style={undefined} onClick={undefined} />
  ),
};

const settingsThumbs = {
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  swipeToSlide: false,

  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: true,
        dots: false,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        dots: false,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ProfileProductDetail = () => {
  const [nav1, setNav1] = useState<any>();
  const [nav2, setNav2] = useState<any>();
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[770px_1fr] gap-[30px]">
        {/* left */}
        <div className="border rounded py-6 px-10 self-start">
          <Slider
            {...settingsMain}
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
          >
            {new Array(12).fill(1).map((_, i) => {
              return (
                <div key={i} className="focus_visible_remove">
                  <img
                    src="/temp/campaign-unisearch.webp"
                    alt="Campaign unisearch"
                    title="Campaign unisearch"
                    className="w-full p-2"
                  />
                </div>
              );
            })}
          </Slider>
          <Slider
            className="product_thumb_carousel"
            {...settingsThumbs}
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
          >
            {new Array(12).fill(1).map((_, i) => {
              return (
                <div key={i} className="focus_visible_remove">
                  <img
                    src="/temp/campaign-unisearch.webp"
                    alt="Campaign unisearch"
                    title="Campaign unisearch"
                    className="w-full p-1"
                  />
                </div>
              );
            })}
          </Slider>
        </div>

        {/* right */}
        <div className="border rounded p-6 self-start">
          <div className="text-lg text-black font-bold mb-3">
            Brand new Sofa cum Bed wooden furniture
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary text-lg font-medium">$500</span>
            <span className="text-grey line-through">$600</span>
          </div>
          <div className="border-b my-4"></div>
          <div className="font-medium mb-2 text-black">Details</div>
          <div className="text-grey">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu. Aenean massa. Cum
            sociis natoque penatibus
          </div>
          <div className="border-b my-4"></div>
          <div className="flex mb-5 justify-between">
            <div className="font-medium text-black">Catagory</div>
            <div className="text-grey">Furniture</div>
          </div>

          <div className="mb-5">
            <a rel="nofollow" href="#" className="btn btn-primary w-full">
              Buy Now
            </a>
          </div>

          {/* share on */}
          <div className="flex gap-5 items-center justify-center">
            <div>Share on</div>
            <ul className="flex items-center gap-3">
              <li>
                <a
                  href="#"
                  className="block px-1 text-lg py-2 hover:text-primary"
                >
                  <FiFacebook />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-1 text-lg py-2 hover:text-primary"
                >
                  <FiTwitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-1 text-lg py-2 hover:text-primary"
                >
                  <FiYoutube />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-1 text-lg py-2 hover:text-primary"
                >
                  <FiInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileProductDetail;
