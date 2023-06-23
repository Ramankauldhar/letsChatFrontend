import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import Chat from "./Components/Chat";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />
      <Route path="/chats" component={Chat} exact />
    </div>
  );
}

export default App;
