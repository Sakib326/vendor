import parse from "html-react-parser";
import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";
import { useParams } from "react-router-dom";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useGetSingleServiceQuery } from "../../../redux/services/service_api";

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

const ProfileServiceDetail = () => {
  const { id } = useParams();
  const { data: singleProduct } = useGetSingleServiceQuery<any>(id);
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
            {new Array(1).fill(1).map((_, i) => {
              return (
                <div key={i} className="focus_visible_remove">
                  <img
                    src={
                      singleProduct?.image
                        ? `${import.meta.env.VITE_API_URL}/${
                            singleProduct?.image
                          }`
                        : "/images/misc/image-placeholder-big.webp"
                    }
                    className="w-full p-2 max-h-96"
                    alt="Campaign product"
                    crossOrigin="anonymous"
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
            {new Array().fill(1).map((_, i) => {
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
            {singleProduct?.title}
          </div>
          <div className="border-b my-4"></div>
          <div className="font-medium mb-2 text-black">Details</div>
          <div className="text-grey">
            {parse(
              singleProduct?.description && singleProduct?.description !== null
                ? singleProduct?.description
                : "<p>N/A</p>"
            )}
          </div>
          <div className="border-b my-4"></div>
          {singleProduct?.link && singleProduct?.link !== "" && (
            <div className="mb-5">
              <a
                rel="nofollow"
                href={`${singleProduct?.link}`}
                className="btn btn-primary w-full"
              >
                Show Details
              </a>
            </div>
          )}

          {/* share on */}
          <div className="flex gap-5 items-center justify-center">
            <div>Share on</div>
            <ul className="flex items-center gap-3">
              <li>
                <a
                  href="#"
                  className="block px-1 text-lg py-2 hover:text-primary"
                >
                  <FacebookShareButton
                    url={window.location.href}
                    quote={singleProduct?.title}
                  >
                    <FiFacebook />
                  </FacebookShareButton>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-1 text-lg py-2 hover:text-primary"
                >
                  <TwitterShareButton
                    url={window.location.href}
                    title={singleProduct?.title}
                  >
                    <FiTwitter />
                  </TwitterShareButton>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileServiceDetail;
