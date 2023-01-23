import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BiBookReader } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { Link } from "react-router-dom";
import CountdownTimer from "../../@common/countdown_timer";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const ProfileCampaignDetails = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [slider1, setSlider1] = useState();
  const [slider2, setSlider2] = useState();

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

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settingsMain = {
    asNavFor: ".slider-nav",
    arrows: true,
    centerMode: false,
    infinite: false,
    centerPadding: "20px 0px",
    slidesToShow: 1,
    speed: 500,
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    // arrows: false,
    // centerMode: true,
    focusOnSelect: true,
    swipeToSlide: false,
    // draggable: false,
    nextArrow: (
      <NextArrow className={undefined} style={undefined} onClick={undefined} />
    ),
    prevArrow: (
      <PrevArrow className={undefined} style={undefined} onClick={undefined} />
    ),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
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
    ],
  };

  return (
    <div className="grid grid-cols-[66%_1fr] gap-8">
      {/* left */}
      <div>
        <div className="mb-10">
          <div className="flex gap-[80px] items-start mb-8">
            <h4>Campaign Title we recommend to use top level registration</h4>
            <CountdownTimer
              customClasses={{
                root: " px-4 py-1 rounded shadow-lg ",
              }}
              targetDate={"08/26/2023"}
            />
          </div>
          <Slider
            {...settingsMain}
            asNavFor={nav2}
            ref={(slider) => setSlider1(slider)}
          >
            <div>
              <img
                src="/temp/campaign-unisearch.webp"
                alt="Campaign unisearch"
                title="Campaign unisearch"
                className="w-full"
              />
            </div>
            <div>
              <img
                src="/temp/campaign-unisearch.webp"
                alt="Campaign unisearch"
                title="Campaign unisearch"
                className="w-full"
              />
            </div>
            <div>
              <img
                src="/temp/campaign-unisearch.webp"
                alt="Campaign unisearch"
                title="Campaign unisearch"
                className="w-full"
              />
            </div>
            <div>
              <img
                src="/temp/campaign-unisearch.webp"
                alt="Campaign unisearch"
                title="Campaign unisearch"
                className="w-full"
              />
            </div>
            <div>
              <img
                src="/temp/campaign-unisearch.webp"
                alt="Campaign unisearch"
                title="Campaign unisearch"
                className="w-full"
              />
            </div>
            <div>
              <img
                src="/temp/campaign-unisearch.webp"
                alt="Campaign unisearch"
                title="Campaign unisearch"
                className="w-full"
              />
            </div>
          </Slider>

          <div className="max-w-[92%] w-full mx-auto">
            <Slider
              {...settingsThumbs}
              asNavFor={nav1}
              ref={(slider) => setSlider2(slider)}
            >
              <div>
                <img
                  src="/temp/campaign-unisearch.webp"
                  alt="Campaign unisearch"
                  title="Campaign unisearch"
                  className="p-2"
                />
              </div>
              <div>
                <img
                  src="/temp/campaign-unisearch.webp"
                  alt="Campaign unisearch"
                  title="Campaign unisearch"
                  className="p-2"
                />
              </div>
              <div>
                <img
                  src="/temp/campaign-unisearch.webp"
                  alt="Campaign unisearch"
                  title="Campaign unisearch"
                  className="p-2"
                />
              </div>
              <div>
                <img
                  src="/temp/campaign-unisearch.webp"
                  alt="Campaign unisearch"
                  title="Campaign unisearch"
                  className="p-2"
                />
              </div>
              <div>
                <img
                  src="/temp/campaign-unisearch.webp"
                  alt="Campaign unisearch"
                  title="Campaign unisearch"
                  className="p-2"
                />
              </div>
              <div>
                <img
                  src="/temp/campaign-unisearch.webp"
                  alt="Campaign unisearch"
                  title="Campaign unisearch"
                  className="p-2"
                />
              </div>
            </Slider>
          </div>
        </div>

        {/* prize */}

        <div className="grid grid-cols-2 gap-5 mb-5">
          <div className="border rounded p-5">
            <div className="text-primary text-lg font-medium mb-3">
              1st Prize
            </div>
            <div>
              First Proze We are looking for a senior software engineer having
              professional experience and deep knowledge of JavaScript, Node.js,
              and web application development services (backend frameworks like
              nest.js, adonis.js, and server side application frameworks like
              nextjs).
            </div>
          </div>
          <div className="border rounded p-5">
            <div className="text-primary text-lg font-medium mb-3">
              2nd Prize
            </div>
            <div>
              First Proze We are looking for a senior software engineer having
              professional experience and deep knowledge of JavaScript, Node.js,
              and web application development services (backend frameworks like
              nest.js, adonis.js, and server side application frameworks like
              nextjs).
            </div>
          </div>
          <div className="border rounded p-5">
            <div className="text-primary text-lg font-medium mb-3">
              3rd Prize
            </div>
            <div>
              First Proze We are looking for a senior software engineer having
              professional experience and deep knowledge of JavaScript, Node.js,
              and web application development services (backend frameworks like
              nest.js, adonis.js, and server side application frameworks like
              nextjs).
            </div>
          </div>
          <div className="border rounded p-5">
            <div className="text-primary text-lg font-medium mb-3">
              4th Prize
            </div>
            <div>
              First Proze We are looking for a senior software engineer having
              professional experience and deep knowledge of JavaScript, Node.js,
              and web application development services (backend frameworks like
              nest.js, adonis.js, and server side application frameworks like
              nextjs).
            </div>
          </div>
          <div className="border rounded p-5">
            <div className="text-primary text-lg font-medium mb-3">
              5th Prize
            </div>
            <div>
              First Proze We are looking for a senior software engineer having
              professional experience and deep knowledge of JavaScript, Node.js,
              and web application development services (backend frameworks like
              nest.js, adonis.js, and server side application frameworks like
              nextjs).
            </div>
          </div>
        </div>

        {/* description */}
        <div className="border rounded p-5">
          <div className="text-black text-lg font-medium mb-3">Description</div>
          <div>
            We are looking for a senior software engineer having professional
            experience and deep knowledge of JavaScript, Node.js, and web
            application development services (backend frameworks like nest.js,
            adonis.js, and server side application frameworks like nextjs). As a
            senior software engineer, you will work with team members to
            maintain the development circles to ensure the technical quality of
            the software applications we develop. You will be guiding software
            development teams with proper requirement analysis, estimation,
            system design, implementation, and code review.
            <br />
            <br />
            We are looking for a senior software engineer having professional
            experience and deep knowledge of JavaScript, Node.js, and web
            application development services (backend frameworks like nest.js,
            adonis.js, and server side application frameworks like nextjs). As a
            senior software engineer, you will work with team members to
            maintain the development circles to ensure the technical quality of
            the software applications we develop. You will be guiding software
            development teams with proper requirement analysis, estimation,
            system design, implementation, and code review.
          </div>
        </div>

        <button type="button" className="btn btn-primary mt-5">
          Win Now
        </button>
      </div>

      {/* right */}
      <div>
        <div className="border rounded p-5 mb-5">
          <h4 className="mb-4">About Company</h4>
          <div className="mb-4">
            UniSearch harnesses over ten years of experience in international
            student recruitment within source markets and innovative AI-powered
            technology to streamline the study abroad process from the research
            stage down to arriving in the destination country and beyond.
            Through predictive analytics and algorithm-driven systems,
            all-inclusive platform.
          </div>

          <h4 className="mb-4">Catagory</h4>
          <div className="grid grid-cols-2 gap-5">
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
        </div>

        {/*  */}
        <div className="border rounded p-5 mb-5">
          <div className="flex items-center justify-between mb-4">
            <h4 className="mb-4">Product</h4>
            <Link to="/campaign/products" className="text-secondary">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://www.d2l.com/wp-content/uploads/2022/09/hero-d2l-brightspace-he.webp"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Education Product - How to Design for Best Usage
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://breadnbeyond.com/wp-content/uploads/2021/09/Education-Explainer-Video.jpg"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Create learning experiences with affordable Windows devices and
                get it's about what the key benefits are for the user.
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1674062130751-f8c23f3b4821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Product Education designs, themes, templates and
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1673579015800-81a951ca977d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Create learning experiences with affordable Windows devices and
                get it's about what the key benefits are for the user.
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1673591296410-1220ba8d6c0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Create learning experiences with affordable Windows devices and
                get it's about what the key benefits are for the user.
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1673874246309-de6d5fc34369?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Create learning experiences with affordable Windows devices and
                get it's about what the key benefits are for the user.
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1669681056200-31a8490a2bec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Create learning experiences with affordable Windows devices and
                get it's about what the key benefits are for the user.
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1673865587236-de597238c72d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Create learning experiences with affordable Windows devices and
                get it's about what the key benefits are for the user.
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1673555791730-0ee56e1b768b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Create learning experiences with affordable Windows devices and
                get it's about what the key benefits are for the user.
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col">
              <div className="mb-4 w-full h-[120px]">
                <img
                  className=" w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1673766791276-5f46fd720021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="product"
                />
              </div>
              <Link
                to="#"
                className="block line-clamp-2 mb-2 text-medium font-medium text-black hover:text-primary transition-all"
              >
                Create learning experiences with affordable Windows devices and
                get it's about what the key benefits are for the user.
              </Link>
              <div className="line-clamp-2 text-sm">
                True product education is the practice of ensuring that your
                users understand how your product can help them achieve their
                goals and become wildly successful. It's not about understanding
                the ins and outs of every functionality; it's about what the key
                benefits are for the user.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCampaignDetails;
