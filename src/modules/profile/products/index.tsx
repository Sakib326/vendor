import { Pagination } from "antd";
import queryString from "query-string";
import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useGetAllProductQuery,
  useGetCategoryQuery,
} from "../../../redux/product/product_api";
import Skeleton from "../../@common/skeleton";

export const ProfileProducts = () => {
  const { data: catData, isLoading: categoryLoading } =
    useGetCategoryQuery<any>({});
  const navigate = useNavigate();
  const categorySlug = queryString.parse(location.search)?.categorySlug;
  const limit = queryString.parse(location.search)?.limit;

  const currentPage = queryString.parse(location.search)?.currentPage;

  const { data: allProductList, isLoading } = useGetAllProductQuery(
    { categorySlug, limit, currentPage },
    { skip: categorySlug ? false : true }
  );
  useEffect(() => {
    if (catData?.results?.length > 0 && !categorySlug) {
      navigate(
        `/profile/products?categorySlug=${catData?.results[0]?.slug}&limit=8&currentPage=1`
      );
    }
  }, [catData]);
  const handleChange = (e: any) => {
    navigate(
      `/profile/products?categorySlug=${categorySlug}&limit=${limit}&currentPage=${e}`
    );
  };
  return (
    <div>
      {categoryLoading ? (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 mb-5 lg:mb-8">
          {new Array(6).fill(1).map((_, i) => {
            return <Skeleton height={170} key={i} />;
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 mb-5 lg:mb-8">
          {catData &&
            catData?.results &&
            catData?.results?.length > 0 &&
            catData?.results.map((item: any, i: any) => {
              return (
                <Fragment key={i}>
                  <div
                    className={`border rounded-md p-5 flex flex-col gap-3 items-center text-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all 
                  ${
                    categorySlug === item?.slug ? "text-white bg-primary" : null
                  }`}
                    onClick={() =>
                      navigate(
                        `/profile/products?categorySlug=${item?.slug}&limit=8&currentPage=1`
                      )
                    }
                  >
                    <img
                      style={{ height: "36px", width: "36px" }}
                      src={
                        item?.image
                          ? `${import.meta.env.VITE_API_URL}/${item?.image}`
                          : "https://cdn-icons-png.flaticon.com/512/3502/3502685.png"
                      }
                      crossOrigin="anonymous"
                      alt="icom"
                    />
                    <span>{item?.title}</span>
                  </div>
                </Fragment>
              );
            })}
        </div>
      )}
      {isLoading ? (
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-5 lg:mb-8">
          {new Array(8).fill(1).map((_, i) => {
            return <Skeleton height={270} key={i} />;
          })}
        </div>
      ) : (
        <Fragment>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-5 lg:mb-8">
            {/* card */}

            {allProductList &&
              allProductList?.results?.length > 0 &&
              allProductList?.results.map((item: any, i: number) => {
                return (
                  <div key={i} className="flex flex-col">
                    <div className="mb-4 w-full h-[270px]">
                      <img
                        className=" w-full h-full object-cover"
                        src={
                          item?.image
                            ? `${import.meta.env.VITE_API_URL}/${item?.image}`
                            : "/images/misc/image-placeholder-big.webp"
                        }
                        alt="product"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <span>{item?.categories[0]?.title}</span>
                    <Link
                      to={`/profile/products/view/${item?.id}`}
                      className="text-primary font-medium"
                    >
                      {item?.name}
                    </Link>

                    <div className="flex justify-start items-center gap-2">
                      <p className="text-primary font-medium">
                        {item?.discountPrice}
                      </p>
                      {item?.discountPrice !== item?.price && (
                        <p className="line-through">{item?.price}</p>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
          {allProductList && allProductList?.results?.length > 8 && (
            <div className="flex justify-center my-[10px]">
              <Pagination
                onChange={(e) => handleChange(e)}
                total={allProductList?.pagination?.total}
                showTotal={(total, range) =>
                  `${range[0]}-${range[1]} of ${total} items`
                }
                defaultPageSize={8}
                defaultCurrent={allProductList?.currentPage}
              />
            </div>
          )}
        </Fragment>
      )}
      {((catData && catData?.results && catData?.results.length === 0) ||
        (allProductList &&
          allProductList?.results &&
          allProductList?.results?.length === 0)) && (
        <div className="grid place-items-center mt-10">
          <img
            width={500}
            src="/images/misc/no-data-found.svg"
            alt="no data found"
            title="no data found"
          />
          <p>No Data Found !</p>
        </div>
      )}
    </div>
  );
};

export default ProfileProducts;
