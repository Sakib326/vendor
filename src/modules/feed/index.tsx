import { MdOutlineClose } from "react-icons/md";
import { NewsCard } from "../@common/news_card";

import newsSlider from "./../../_fakedata/slider.json";
import newsPopular from "./../../_fakedata/popular.json";
import newsList from "./../../_fakedata/newslist.json";

export const Feed = () => {
  const newsHighlight = newsSlider.find((item) => item.id == 5);

  return (
    <div className="p-8">
      <div className="max-w-[970px] mx-auto w-full">
        <h4 className="mb-5">Feed</h4>

        <NewsCard data={newsHighlight} size="big" />

        <div className="divider w-full h-[1px] bg-gray-200 my-3"></div>

        <ul className="flex flex-col">
          {newsList.map((item, i) => {
            return (
              <li key={i}>
                <NewsCard data={item} />
                <div className="divider w-full h-[1px] bg-gray-200 my-3"></div>
              </li>
            );
          })}
        </ul>

        <NewsCard
          layout={"row"}
          size={"default"}
          category={true}
          like={true}
          description={true}
          data={newsHighlight}
        />
        <div className="divider w-full h-[1px] bg-gray-200 my-3"></div>

        {/* Aro porun start */}
        <div className="hidden mb-4 aro_porun lg:block">
          <div className="flex items-center justify-between mb-4 text-lg">
            <div className="font-bold">আরও পড়ুন</div>
            <button>
              <MdOutlineClose />
            </button>
          </div>

          <ul className="grid grid-cols-5 gap-3">
            {newsPopular.map((item, i) => {
              return (
                <li key={i}>
                  <NewsCard
                    size=""
                    layout="column"
                    category={false}
                    like={false}
                    description={false}
                    data={item}
                  />
                </li>
              );
            })}
          </ul>
          <div className="divider w-full h-[1px] bg-gray-200 my-3"></div>
        </div>
        {/* Aro porun end */}

        <ul className="flex flex-col">
          {newsSlider.map((item, i) => {
            return (
              <li key={i}>
                <NewsCard data={item} />
                <div className="divider w-full h-[1px] bg-gray-200 my-3"></div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Feed;
