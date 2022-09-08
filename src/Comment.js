import React from "react";
import CommentList from "./commentList";

const Comment = ({ ...props }) => {
  return (
    <div>
      {props?.comments !== undefined &&
        props?.comments.map((comm, key) => {
          return (
            <div
              key={key}
              className="commentList"
              style={{ padding: `${key}px` }}
            >
              {comm instanceof Array ? comm["comment"] : comm.comment}
              <CommentList commentList={comm.replies} />
            </div>
          );
        })}
    </div>
  );
};

export default Comment;
