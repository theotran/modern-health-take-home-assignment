import { useState, useEffect } from "react";
import "./App.css";
import { _messages } from "./data.json";
import { Message } from "./components/Message";

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
    <div className="App">
      <h1>MODERN HEALTH TAKE HOME ASSIGNMENT</h1>
    </div>
  );
}

export default App;
