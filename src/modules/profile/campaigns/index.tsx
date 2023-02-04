import { Pagination } from "antd";
import { useState } from "react";
import {
  useGetCompletedCampaignQuery,
  useGetPendingCampaignQuery,
  useGetPublishedCampaignQuery,
} from "../../../redux/campaign/campaign_api";
import CampaignCard from "../../@common/campaign_card";
import Skeleton from "../../@common/skeleton";

export const CampaignList = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState({
    currentPage: 1,
    pageSize: 8,
    type: "",
  });
  const handleChange = (e: any, type: any) => {
    setCurrentPageNumber((page) => ({
      ...page,
      currentPage: e,
      type: type,
    }));
  };
  const { data: published, isLoading: isLoadingPublished } =
    useGetPublishedCampaignQuery({
      currentPage:
        currentPageNumber?.type === "Published" &&
        currentPageNumber?.currentPage,
    });
  const { data: completed, isLoading: isLoadingCompleted } =
    useGetCompletedCampaignQuery({
      currentPage:
        currentPageNumber?.type === "Completed" &&
        currentPageNumber?.currentPage,
    });
  const { data: pending, isLoading: isLoadingPending } =
    useGetPendingCampaignQuery({
      currentPage: 1,
    });

  const dataPublished = published?.results;
  const dataCompleted = completed?.results;
  const dataPending = pending?.results;

  return (
    <div>
      {/* pending campaign */}
      {isLoadingPending ? (
        <>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {new Array(4).fill(1).map((_, i) => {
                return <Skeleton height={300} key={i} />;
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* pending campaign */}
          {dataPending && dataPending?.length > 0 && (
            <div className="border rounded p-6">
              <h5 className="mb-5 border-b pb-3">Pending Campaigns</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {dataPending?.map((item: any, index: number) => {
                  return (
                    <CampaignCard
                      data={item}
                      key={index}
                      isShowTime={false}
                      isShowWinner={false}
                      btnTitle="Edit"
                    />
                  );
                })}
              </div>
              {dataPending?.length > 8 && (
                <div className="flex justify-center my-[10px]">
                  <Pagination
                    onChange={(e) => handleChange(e, "Completed")}
                    total={pending?.totalItems}
                    showTotal={(total, range) =>
                      `${range[0]}-${range[1]} of ${total} items`
                    }
                    defaultPageSize={8}
                    defaultCurrent={1}
                  />
                </div>
              )}
            </div>
          )}
        </>
      )}
      {/* current campaign */}
      {isLoadingPublished ? (
        <>
          <div className="p-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {new Array(4).fill(1).map((_, i) => {
                return <Skeleton height={300} key={i} />;
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* current campaign */}
          {dataPublished && dataPublished?.length > 0 && (
            <div className="border rounded p-6  mt-6">
              <h5 className="mb-5 border-b pb-3">Current Campaigns</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {dataPublished?.map((item: any, index: number) => {
                  return (
                    <CampaignCard
                      data={item}
                      key={index}
                      isShowTime={true}
                      isShowWinner={false}
                      btnTitle="View Details"
                    />
                  );
                })}
              </div>

              {dataPublished?.length > 8 && (
                <div className="flex justify-center my-[10px]">
                  <Pagination
                    onChange={(e) => handleChange(e, "Published")}
                    total={published?.totalItems}
                    showTotal={(total, range) =>
                      `${range[0]}-${range[1]} of ${total} items`
                    }
                    defaultPageSize={8}
                    defaultCurrent={1}
                  />
                </div>
              )}
            </div>
          )}
        </>
      )}
      {/* Completed campaign */}
      {isLoadingCompleted ? (
        <>
          <div className="p-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {new Array(4).fill(1).map((_, i) => {
                return <Skeleton height={300} key={i} />;
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* completed campaign */}
          {dataCompleted && dataCompleted?.length > 0 && (
            <div className="border rounded p-6  mt-6">
              <h5 className="mb-5 border-b pb-3">Completed Campaigns</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {dataCompleted?.map((item: any, index: number) => {
                  return (
                    <CampaignCard
                      data={item}
                      key={index}
                      isShowTime={false}
                      isShowWinner={false}
                      btnTitle="View Details"
                    />
                  );
                })}
              </div>
              {dataCompleted?.length > 8 && (
                <div className="flex justify-center my-[10px]">
                  <Pagination
                    onChange={(e) => handleChange(e, "Completed")}
                    total={completed?.totalItems}
                    showTotal={(total, range) =>
                      `${range[0]}-${range[1]} of ${total} items`
                    }
                    defaultPageSize={8}
                    defaultCurrent={1}
                  />
                </div>
              )}
            </div>
          )}
        </>
      )}
      {dataCompleted &&
        dataCompleted.length === 0 &&
        dataPending &&
        dataPending.length === 0 &&
        dataPublished &&
        dataPublished.length === 0 && (
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

export default CampaignList;
