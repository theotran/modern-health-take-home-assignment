import React from "react";
import styled from "@emotion/styled";

const Bubble = styled.div`
  border-radius: 4px;
  padding: 7px 15px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin: 10px 0;
    font-size: 26px;
  }

  &.recipient {
    background: #2b56df;
    justify-self: right;
    p {
      color: #fff;
    }
  }

  &.sender {
    background: #ffd167;
    justify-self: left;
  }

  .date,
  .author,
  .time {
    font-size: 12px;
    font-weight: bold;
  }
`;

type Props = {
  content: String;
  author: String;
  sentAt: String;
  sentAtTime: String;
};

export const Message = ({ content, author, sentAt, sentAtTime }: Props) => {
  return (
    <Bubble className={author === "1" ? "recipient" : "sender"}>
      <p className="author">{author}</p>
      <p>{content}</p>
      <p className="date">{sentAt}</p>
      <p className="time">{sentAtTime}</p>
    </Bubble>
  );
};
