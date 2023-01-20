import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

interface cardProps {
  size?: string;
  category?: boolean;
  like?: boolean;
  description?: boolean;
  link?: boolean;
  layout?: string;
  className?: string;
  highlight?: boolean;
  data?: any;
}

export function NewsCard({
  size = "default",
  layout = "row",
  category = true,
  like = true,
  description = true,
  link = true,
  className,
  data,
}: cardProps) {
  const layoutFn = () => {
    if (layout == "row") {
      if (size == "default") {
        return `grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-5`;
      }
      if (size == "big") {
        return `grid grid-cols-1 gap-7 lg:grid-cols-[516px_1fr] `;
      }
      if (size == "small") {
        return `grid grid-cols-1 lg:grid-cols-[94px_1fr] gap-2`;
      }
    }
    if (layout == "column") {
      return `flex flex-col gap-3`;
    }
  };

  const imgHeight = () => {
    if (size == "big") {
      return `h-[285px]`;
    }
    if (size == "default") {
      return `h-max lg:h-[180px]`;
    }
    if (size == "small") {
      return `h-[300px] lg:h-[70px]`;
    }
  };

  const headingStyle = () => {
    if (size == "big") {
      return `text-lg line-clamp-2 mb-2`;
    }
    if (size == "default") {
      return `text-lg line-clamp-2 mb-2`;
    }
    if (size == "small") {
      return `text-xs line-clamp-3 mb-1`;
    }
    if (layout == "column") {
      return `text-[13px] mb-2 line-clamp-2 leading-normal`;
    }
  };

  const dateStyle = () => {
    if (size == "default") {
      return `text-base`;
    }
    if (size == "small") {
      return `text-xs`;
    }
    if (layout == "column") {
      return `text-sm`;
    }
  };

  return (
    <div className={`font-bangla ${layoutFn()} ${className ? className : ""}`}>
      <div className={`${imgHeight()} ${layout == "column" && "h-[100px]"}`}>
        {link ? (
          <Link to="/economics/details">
            <img
              className="object-cover w-full h-full rounded-md"
              src={data?.thumbnail}
              alt=""
            />
          </Link>
        ) : (
          <img
            className="object-cover w-full h-full rounded-md"
            src={data?.thumbnail}
            alt=""
          />
        )}
      </div>
      <div>
        {(category || like) && (
          <div className="flex items-center justify-between">
            {category && (
              <div className="flex items-center gap-2 mb-2">
                <Link to="/details">{data?.category}</Link>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <Link to="#">
                  <a>{data?.source}</a>
                </Link>
              </div>
            )}

            {like && (
              <div className="flex items-center gap-2 ml-auto">
                <button>
                  <AiOutlineLike />
                </button>
                <button>
                  <AiOutlineDislike />
                </button>
                <button>
                  <BiDotsVerticalRounded />
                </button>
              </div>
            )}
          </div>
        )}

        {link ? (
          <h2>
            <Link
              to="/details"
              className={`${headingStyle()} font-bold font-heading block`}
            >
              {data?.title}
            </Link>
          </h2>
        ) : (
          <h2 className={`${headingStyle()} font-bold font-heading block`}>
            {data?.title}
          </h2>
        )}

        {description && (
          <div
            className={`line-clamp-3 ${
              size == "big" ? "line-clamp-[8]" : ""
            } mb-2 text-[15px]`}
          >
            {data?.description}
          </div>
        )}
        {link ? (
          <div className={dateStyle()}>
            <Link to="/details">{data?.date}</Link>
          </div>
        ) : (
          <div className={dateStyle()}>{data?.date}</div>
        )}
      </div>
    </div>
  );
}
