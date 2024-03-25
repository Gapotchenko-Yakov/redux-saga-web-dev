import { Outlet } from "react-router";

const Home = () => (
  <div className="wrapper">
    <h1>News Application</h1>
    <h3>Build with Redux-Saga, React, React Router</h3>
    <Outlet />
  </div>
);

export default Home;
