import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import * as dayjs from "dayjs";
import "./App.css";
import { _messages } from "./data.json";
import { Message } from "./components/Message";
import { Pagination } from "./components/Pagination";

dayjs().format();

const Container = styled.div`
  height: 100vh;

  .chatbox {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: auto;
    padding: 45px 30px;
  }

  .sort-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: auto;
    grid-gap: 15px;
    padding: 15px 30px;

    button {
      background: #fff;
      padding: 20px;
      font-weight: bold;
    }

    .oldest {
      border: 2px solid #ffd168;
    }

    .newest {
      border: 2px solid #2b56df;
    }
  }
`;

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [messagesPerPage] = useState(5);

  const deduped = [...new Set(_messages)];

  useEffect(() => {
    sortedAsc();
  }, []);

  const sortedAsc = () => {
    const ascendingMessages = deduped.sort((x, y) => {
      return Date.parse(x.sentAt) - Date.parse(y.sentAt);
    });

    setMessages(ascendingMessages);
  };

  const sortedDesc = () => {
    const descendingMessages = deduped.sort((x, y) => {
      return Date.parse(y.sentAt) - Date.parse(x.sentAt);
    });

    setMessages(descendingMessages);
  };

  // Get current Messages
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;

  const currentMessages = messages.slice(
    indexOfFirstMessage,
    indexOfLastMessage
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log("current messages", currentMessages);
  return (
    <Container className="App">
      <div className="sort-buttons">
        <button className="oldest" onClick={(e) => sortedAsc()}>
          Oldest
        </button>
        <button className="newest" onClick={(e) => sortedDesc()}>
          Newest
        </button>
      </div>
      <div className="chatbox">
        {currentMessages.map((m, idx) => {
          return (
            <Message
              key={idx}
              author={m.senderUuid}
              content={m.content}
              sentAt={dayjs(m.sentAt).format("dddd, MMMM D YYYY")}
              sentAtTime={dayjs(m.sentAt).format("h:mm:ss a")}
            />
          );
        })}
      </div>
      <Pagination
        messagesPerPage={messagesPerPage}
        totalMessages={messages.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Container>
  );
}

export default App;
