import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Content from "./components/Content";
import Todos from "./components/Todos";

const routes = [
  { name: "welcome", component: Welcome, url: "/" },
  { name: "about", component: About, url: "/about" },
  { name: "content", component: Content, url: "/content" },
  { name: "todos", component: Todos, url: "/todos" },
];

function App() {
  return (
    <div className="App">
      <h2>React web app</h2>
      <ol>
        {routes.map((el, idx) => (
          <li key={idx + "-" + el.name}>
            <Link to={el.url}>{el.name}</Link>
          </li>
        ))}
      </ol>
      <hr />
      <Routes>
        {routes.map((el, idx) => (
          <Route
            key={idx + "_" + el.name}
            path={el.url}
            element={<el.component />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
