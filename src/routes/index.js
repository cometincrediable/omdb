import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Header,LoadingBar } from "../components";

const Home = React.lazy(() => import('../pages/Home'));
const Genre = React.lazy(() => import('../pages/Genre'));
const Action = React.lazy(() => import('../pages/Genre/Action.jsx'));
const Drama = React.lazy(() => import('../pages/Genre/Drama.jsx'));
const Horror = React.lazy(() => import('../pages/Genre/Horror.jsx'));
const TopRated = React.lazy(() => import('../pages/TopRated'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const SearchResult = React.lazy(() => import('../pages/SearchResult'));

function MainRoutes() {
  return (
    <div>
      <Suspense fallback={<LoadingBar/>}>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Dashboard></Dashboard>}></Route>
          <Route exact path="/home" element={<Home></Home>}></Route>
          <Route exact path="/genre" element={<Genre></Genre>}></Route>
          <Route exact path="/action" element={<Action></Action>}></Route>
          <Route exact path="/drama" element={<Drama></Drama>}></Route>
          <Route exact path="/horror" element={<Horror></Horror>}></Route>
          <Route exact path="/top" element={<TopRated></TopRated>}></Route>
          <Route
            exact
            path="/search/:params"
            element={<SearchResult></SearchResult>}
          ></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default MainRoutes;
