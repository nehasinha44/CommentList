import "./styles.css";
import Comment from "./Comment";
// import Replies from "./replies";
const comments = [
  {
    comment: "hello first",
    replies: [
      {
        comment: "hi",
        replies: [
          {
            comment: "Hello sec",
            replies: [
              {
                comment: "Hello inside"
              }
            ]
          }
        ]
      },
      {
        comment: "good morning"
      }
    ]
  }
];
//  cmap and
export default function App() {
  return <Comment comments={comments} />;
}

// export default function App() {
//   return (
//     <div className="comment">
//        <div>{comments['comment']}</div>

//       {comments.map((item, key) => {

//         if (Object.keys(item).indexOf("replies") > -1) {
//           return (<div key={key}>hello</div>);
//         }

//       })
//       }
//     </div>
//   );
// }

export function printReply({ replies }) {
  return (
    <>
      {replies.map((item, key) => {
        console.log(item);
        console.log(item.comment);
        // <div>{item.comment}</div>
      })}
    </>
  );
}
