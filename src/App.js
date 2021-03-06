import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import "./App.css";
import { _messages } from "./data.json";
import { Message } from "./components/Message";

const Container = styled.div`
  height: 100vh;

  .chatbox {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: auto;
    padding: 45px 30px;
  }
`;

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [messagesPerPage] = useState(5);

  const sortedAsc = _messages.sort(function (x, y) {
    return Date.parse(x.sentAt) - Date.parse(y.sentAt);
  });

  useEffect(() => {
    setMessages(sortedAsc);
  }, []);

  // Get current Messages
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;

  const currentMessages = messages.slice(
    indexOfFirstMessage,
    indexOfLastMessage
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // console.log("sorted messages", sortedAsc);
  console.log("current messages", currentMessages);
  return (
    <Container className="App">
      <h1>MODERN HEALTH TAKE HOME ASSIGNMENT</h1>
      <div className="chatbox">
        {currentMessages.map((m, idx) => {
          return (
            <Message key={idx} author={m.senderUuid} content={m.content} />
          );
        })}
      </div>
    </Container>
  );
}

export default App;
