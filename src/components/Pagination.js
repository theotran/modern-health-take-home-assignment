import React from "react";
import styled from "@emotion/styled";

const PaginationNav = styled.nav`
  position: relative;

  .pagination {
    display: flex;
    list-style: none;
    padding: 10px 30px;

    li {
      &.active {
        background: #ffd167;
      }
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      padding: 8px 0;
      background: #2c57df;
      margin: 0 2px;

      a {
        font-family: "Comfortaa", cursive;
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        height: 100%;
        width: 100%;
      }
    }
  }
`;

export const Pagination = ({
  messagesPerPage,
  totalMessages,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMessages / messagesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationNav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number && "active"}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </PaginationNav>
  );
};
