import { useRoutes } from "react-router";
import "./App.css";
import routes from "./routes";
import { NavLink } from "react-router-dom";
function App() {
  const element = useRoutes(routes());
  return (
    <div className="wrapper">
      <nav>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            listStyleType: "none",
          }}
        >
          <li style={{ margin: "5px" }}>
            <NavLink
              className={({ isActive }) => (isActive ? "link-active" : "link")}
              to=""
            >
              Задание 1
            </NavLink>
          </li>
          <li style={{ margin: "5px" }}>
            <NavLink
              className={({ isActive }) => (isActive ? "link-active" : "link")}
              to="t2"
            >
              Задание 2
            </NavLink>
          </li>
          <li style={{ margin: "5px" }}>
            <NavLink
              className={({ isActive }) => (isActive ? "link-active" : "link")}
              to="t3"
            >
              Задание 3
            </NavLink>
          </li>
          <li style={{ margin: "5px" }}>
            <NavLink
              className={({ isActive }) => (isActive ? "link-active" : "link")}
              to="t4"
            >
              Задание 4
            </NavLink>
          </li>
          <li style={{ margin: "5px" }}>
            <NavLink
              className={({ isActive }) => (isActive ? "link-active" : "link")}
              to="dt1"
            >
              Дополнительное задание 1
            </NavLink>
          </li>
          <li style={{ margin: "5px" }}>
            <NavLink
              className={({ isActive }) => (isActive ? "link-active" : "link")}
              to="dt2"
            >
              Дополнительное задание 2
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>{element}</main>
    </div>
  );
}

export default App;
