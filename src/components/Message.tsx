//@flow
import React from "react";
import styled from "@emotion/styled";

const Bubble = styled.div`
  border-radius: 10px;
  padding: 10px 8px;
  text-align: left;
  display: flex;
  align-items: center;

  p {
    margin: 10px 0;
    color: #fff;
    font-size: 26px;
  }

  &.recipient {
    background: #2b56df;
    justify-self: right;
  }

  &.sender {
    background: black;
    justify-self: left;
  }
`;

type Props = {
  content: String;
  author: String;
};

export const Message = ({ content, author }: Props) => {
  return (
    <Bubble className={author === "1" ? "recipient" : "sender"}>
      <p>{content}</p>
    </Bubble>
  );
};
