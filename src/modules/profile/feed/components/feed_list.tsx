import { message, Popconfirm } from "antd";
import parse from "html-react-parser";
import moment from "moment";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useDeleteFeedMutation } from "../../../../redux/feed/feed_api";
import Skeleton from "../../../@common/skeleton";
import Comments from "./comments";

const FeedList = ({
  allPosts,
  isLoading,
  userProfile,
  setGetSingleFeed,
  showModal,
}: {
  allPosts: any;
  isLoading: boolean;
  userProfile: any;
  setGetSingleFeed: any;
  showModal: Function;
}) => {
  const [deleteFeed] = useDeleteFeedMutation();
  //delete data
  const onDeleteClick = (id: any) => {
    deleteFeed({ id: id }).then((res: any) => {
      if (!res?.error) {
        message.success("Post deleted");
      } else {
        message.error(
          res?.error?.data?.message ??
            "Something went wrong. Try reload the page"
        );
      }
    });
  };
  return (
    <div>
      {isLoading ? (
        <div>
          {new Array(8).fill(1).map((_, i) => {
            return <Skeleton height={270} key={i} className="mb-5" />;
          })}
        </div>
      ) : (
        <div>
          {allPosts && allPosts?.data?.length > 0 ? (
            <div>
              {allPosts?.data.map((item: any, i: any) => {
                return (
                  <div className="border rounded p-5 pb-0 mb-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="grid grid-cols-[46px_1fr] gap-6">
                        <div className="border rounded-full flex items-center justify-center p-1">
                          <img
                            crossOrigin="anonymous"
                            src={
                              userProfile?.logo !== "" && userProfile?.logo
                                ? `${import.meta.env.VITE_API_URL}/${
                                    userProfile?.logo
                                  }`
                                : "https://i.ibb.co/grqf3k6/istockphoto-1300845620-612x612.jpg"
                            }
                            alt="user"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-black">
                            {userProfile?.businessName}
                          </div>
                          <div className="text-sm">
                            {moment(item?.createdAt).fromNow()}
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            setGetSingleFeed(item?.id);
                            showModal();
                          }}
                          className="mr-3"
                        >
                          <FiEdit />
                        </button>
                        <Popconfirm
                          placement="right"
                          title="Are you sure to delete this ?"
                          description="Delete the post"
                          onConfirm={(e) => {
                            onDeleteClick(item?.id);
                          }}
                          okText="Yes"
                          cancelText="No"
                        >
                          <button>
                            <AiOutlineDelete />
                          </button>
                        </Popconfirm>
                      </div>
                    </div>

                    {item?.title &&
                      item?.title !== "" &&
                      item?.title !== null && (
                        <div className="mb-5 text-sm font-medium text-black">
                          {item?.title}
                        </div>
                      )}
                    {item?.description &&
                      item?.description !== "" &&
                      item?.description !== null && (
                        <div className="mb-5 text-sm">
                          {parse(item?.description)}
                        </div>
                      )}

                    {item?.image &&
                      item?.image !== "" &&
                      item?.image !== null && (
                        <div className="mb-4">
                          <img
                            crossOrigin="anonymous"
                            src={`${import.meta.env.VITE_API_URL}/${
                              item?.image
                            }`}
                            alt={item?.title}
                          />
                        </div>
                      )}

                    <Comments postId={item?.id} />
                  </div>
                );
              })}
            </div>
          ) : (
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
      )}
    </div>
  );
};

export default FeedList;
