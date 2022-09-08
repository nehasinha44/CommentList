import React from "react";
import Comment from "./Comment";
const CommentList = ({ ...props }) => {
  return (
    <>
      {props.commentList !== undefined && props.commentList instanceof Object && (
        <>
          <Comment comments={props.commentList} />
        </>
      )}
    </>
  );
};

export default CommentList;
