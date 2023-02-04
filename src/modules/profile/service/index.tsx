import { useGetAllServiceQuery } from "../../../redux/services/service_api";
import Skeleton from "../../@common/skeleton";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pagination } from "antd";
import queryString from "query-string";

export const ProfileServices = () => {
  const navigate = useNavigate();
  const currentPage = queryString.parse(location.search)?.currentPage;
  const { data: allServiceList, isLoading } = useGetAllServiceQuery<any>({
    currentPage,
  });
  const handleChange = (e: any) => {
    navigate(`/profile/services?currentPage=${e}`);
  };
  return (
    // <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-5 lg:mb-8">
    <Fragment>
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

            {allServiceList &&
              allServiceList?.data?.length > 0 &&
              allServiceList?.data.map((item: any, i: number) => {
                return (
                  <div key={i} className="flex flex-col">
                    <div className="mb-4 w-full h-[220px]">
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
                    <Link
                      to={`/profile/services/view/${item?.id}`}
                      className="block line-clamp-2 mb-2 text-lg font-medium text-black hover:text-primary transition-all"
                    >
                      {item?.title}
                    </Link>

                    <div className="line-clamp-2 text-sm">
                      {item?.description.replace(/<\/?[^>]+(>|$)/g, "")}
                    </div>
                  </div>
                );
              })}
          </div>
          {allServiceList && allServiceList?.data?.length > 8 && (
            <div className="flex justify-center my-[10px]">
              <Pagination
                onChange={(e) => handleChange(e)}
                total={allServiceList?.pagination?.total}
                showTotal={(total, range) =>
                  `${range[0]}-${range[1]} of ${total} items`
                }
                defaultPageSize={8}
                defaultCurrent={allServiceList?.pagination?.page}
              />
            </div>
          )}
        </Fragment>
      )}
      {allServiceList &&
        allServiceList?.data &&
        allServiceList?.data?.length === 0 && (
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
    </Fragment>
    // </div>
  );
};

export default ProfileServices;
