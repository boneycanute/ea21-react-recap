import { Link, Route, Routes, useNavigate } from "react-router-dom";
import ComponentLifeCycleUsingUseEffect from "./ComponentLifeCycleUsingUseEffect";
import LazyLoadingExample from "./LazyLoadingExample";
import UseMemoExample from "./UseMemoExample";
import { createContext } from "react";
import PageNotFound from "./PageNotFound";
import DynamicSegementExample from "./DynamicSegementExample";

export const MyContext = createContext();

function App() {
  const nav = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          nav(1);
        }}
      >
        Forward
      </button>
      <button
        onClick={() => {
          nav(-1);
        }}
      >
        Backward
      </button>
      <button
        onClick={() => {
          nav("/memo");
        }}
      >
        Go to useMemo
      </button>
      <ul>
        <li>
          <Link to={"/"}>ComponentLifeCycleUsingUseEffect</Link>
        </li>
        <li>
          <Link to={"/lazy"}>LazyLoadingExample</Link>
        </li>
        <li>
          <Link to={"/memo"}>UseMemoExample</Link>
        </li>
        <li>
          <Link to={"/redux"}>Dynamic Segement for Redux</Link>
        </li>
        <li>
          <Link to={"/nodejs"}>Dynamic Segement for Nodejs</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<ComponentLifeCycleUsingUseEffect />} />
        <Route path="/lazy" element={<LazyLoadingExample />} />
        <Route path="/memo" element={<UseMemoExample />} />
        <Route path="/:dynamicSegment" element={<DynamicSegementExample />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
