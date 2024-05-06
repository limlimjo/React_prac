import React from "react";
import Comment from "./Comment";

// 댓글 데이터를 담고 있는 객체들을 comments 배열에 넣어줌
const comments = [
    {
        name: "Lauv",
        comment: "안녕하세요, Lauv입니다.",
    },
    {
        name: "아이유",
        comment: "리액트 재밌어요~!",
    },
    {
        name: "Chris",
        comment: "저도 리액트 배워 보고 싶어요!",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;