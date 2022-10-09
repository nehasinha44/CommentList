import React from "react";
import CommentList from "./commentList";

const Comment = ({ comments={} }) => {
  return (
    <div>
      {comments !== undefined &&
        comments.map((comm, key) => {
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
