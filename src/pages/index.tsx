import React, { Suspense, lazy } from "react";
import { SideMenuLayout } from "../layout";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import menus from "./menu";
import Loading from "../components/Loading";

const Home = lazy(() => import("./home"));
const ReporterList = lazy(() => import("./reporter/ReporterList"));
const ReporterDetail = lazy(() => import("./reporter/ReporterDetail"));


export default function PageLayout() {

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <SideMenuLayout menus={menus}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/reporter" component={ReporterList} />
            <Route path="/reporter/:reporterId/detail" component={ReporterDetail} />
          </Switch>
        </SideMenuLayout>
      </BrowserRouter>
    </Suspense>
  );
}
