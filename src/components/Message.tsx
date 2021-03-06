import React from "react";
import styled from "@emotion/styled";

const Bubble = styled.div`
  border-radius: 10px;
  background: #2b56df;
  padding: 5px 8px;
  text-align: left;
`;

type Props = {
  content: String,
};

export const Message = ({ content }: Props) => {
  return <Bubble>{content}</Bubble>;
};
