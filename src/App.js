import "./App.css";
import { messages } from "./data.json";

function App() {
  const sortedMessages = messages.sort(function (x, y) {
    return Date.parse(x.sentAt) - Date.parse(y.sentAt);
  });
  console.log("messages", messages);
  console.log("sorted messages", sortedMessages);
  return (
    <div className="App">
      <h1>MODERN HEALTH TAKE HOME ASSIGNMENT</h1>
    </div>
  );
}

export default App;
