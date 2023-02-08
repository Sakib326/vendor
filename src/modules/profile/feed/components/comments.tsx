import { message } from "antd";
import moment from "moment";
import { Fragment, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import {
  useGetAllFeedCommentQuery,
  useGetAllFeedReactQuery,
  useReplyFeedCommentMutation,
} from "../../../../redux/feed/feed_api";
import Skeleton from "../../../@common/skeleton";

function Comments({ postId }: any) {
  const { data: allFeedComment, isLoading: commentLoading } =
    useGetAllFeedCommentQuery<any>({
      page: 1,
      feedId: postId,
      limit: 100,
    });
  const { data: allFeedReact, isLoading: reactLoading } =
    useGetAllFeedReactQuery<any>({
      id: postId,
    });
  const replyUserInit = {
    userName: "",
    commentId: "",
  };
  const [replyUserDetail, setReplyUserDetail] = useState(replyUserInit);
  const [replyValue, setReplyValue] = useState();

  const [replyFeedComment, { isLoading }] = useReplyFeedCommentMutation();

  const handleSubmitReply = () => {
    replyFeedComment({
      message: replyValue,
      parentId: replyUserDetail?.commentId,
      feedId: postId,
    }).then((res: any) => {
      if (!res.error) {
        setReplyUserDetail(replyUserInit);
      } else {
        message.error(
          res?.error?.data?.message ??
            "Something went wrong. Try reload the page"
        );
      }
    });
  };

  return (
    <Fragment>
      <div className="flex items-center gap-4 mb-5 max-h-1">
        <span className="flex items-center gap-2">
          <FaRegHeart />
          <span className="text-sm">{allFeedReact?.data?.length ?? 0}</span>
        </span>
        <span className="flex items-center gap-2">
          <TiMessages />
          <span className="text-sm">{allFeedComment?.data?.length ?? 0}</span>
        </span>
        {/* <button type="button" className="flex items-center gap-2">
          <IoArrowRedoOutline />
        </button> */}
      </div>
      <div className="max-h-60 overflow-y-auto reply">
        <ul>
          {isLoading ? (
            <div>
              {new Array(6).fill(1).map((_, i) => {
                return <Skeleton height={170} key={i} />;
              })}
            </div>
          ) : (
            <div>
              {allFeedComment &&
                allFeedComment?.data?.length > 0 &&
                allFeedComment?.data.map((item: any, index: number) => {
                  return (
                    <Fragment key={index}>
                      {item?.subscriber && (
                        <Fragment>
                          <li className="grid grid-cols-[42px_1fr] gap-3 mb-3">
                            <div className="w-full h-[42px]">
                              <img
                                className="rounded w-full h-full object-cover"
                                src={
                                  item?.subscriber?.avatar !== "" &&
                                  item?.subscriber?.avatar
                                    ? `${import.meta.env.VITE_API_URL}/${
                                        item?.subscriber?.avatar
                                      }`
                                    : "https://i.ibb.co/grqf3k6/istockphoto-1300845620-612x612.jpg"
                                }
                                alt="user"
                                crossOrigin="anonymous"
                              />
                            </div>
                            <div>
                              <div className="flex items-center justify-between">
                                <div className="mb-1">
                                  <span className="font-medium text-black mr-2">
                                    {item?.subscriber?.fullName}
                                  </span>
                                  <span className="text-sm">
                                    {moment(item?.createdAt).fromNow()}
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  className="text-sm"
                                  onClick={() =>
                                    setReplyUserDetail({
                                      userName: item?.subscriber?.fullName,
                                      commentId: item?.id,
                                    })
                                  }
                                >
                                  Reply
                                </button>
                              </div>
                              <div className="text-[#3F4254] text-sm">
                                {item?.message}
                              </div>
                            </div>
                          </li>
                          <div>
                            <ul>
                              {item?.children.length > 0 &&
                                item?.children.map(
                                  (childItem: any, childIndex: number) => {
                                    return (
                                      <li
                                        className="grid grid-cols-[42px_1fr] gap-3 mb-3 ml-10"
                                        key={`chils_${childIndex}`}
                                      >
                                        <div className="w-full h-[42px]">
                                          <img
                                            className="rounded object-cover align-middle border"
                                            src={
                                              childItem?.subscriber?.avatar !==
                                                "" ||
                                              childItem?.vendor?.logo !== ""
                                                ? `${
                                                    import.meta.env.VITE_API_URL
                                                  }/${
                                                    childItem?.subscriber
                                                      ?.avatar ??
                                                    childItem?.vendor?.logo
                                                  }`
                                                : "https://i.ibb.co/grqf3k6/istockphoto-1300845620-612x612.jpg"
                                            }
                                            alt="user"
                                            crossOrigin="anonymous"
                                          />
                                        </div>
                                        <div>
                                          <div className="flex items-center justify-between">
                                            <div className="mb-1">
                                              <span className="font-medium text-black mr-2">
                                                {item?.subscriber?.fullName}
                                              </span>
                                              <span className="text-sm">
                                                {moment(
                                                  childItem?.createdAt
                                                ).fromNow()}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="text-[#3F4254] text-sm">
                                            {childItem?.message}
                                          </div>
                                        </div>
                                      </li>
                                    );
                                  }
                                )}
                            </ul>
                          </div>
                        </Fragment>
                      )}
                    </Fragment>
                  );
                })}
            </div>
          )}
        </ul>
      </div>
      {replyUserDetail?.userName !== "" && (
        <div className="border-t">
          <label className="text-sm">
            Reply to {replyUserDetail?.userName}
          </label>
          <textarea
            className="text-sm p-4 border"
            onChange={(e: any) => {
              setReplyValue(e?.target?.value);
            }}
            onKeyDown={(e: any) => {
              if (
                (e.code === "Enter" || e.code === "NumpadEnter") &&
                e.shiftKey == false
              ) {
                e.preventDefault();
                handleSubmitReply();
              }
            }}
            value={replyValue}
            placeholder="Reply..."
          />
        </div>
      )}
    </Fragment>
  );
}

export default Comments;
