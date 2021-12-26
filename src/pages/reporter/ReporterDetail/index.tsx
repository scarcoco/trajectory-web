import { Breadcrumb, Tabs } from "@arco-design/web-react";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import LinkName from "../../../components/LinkName";
import Trajectory from "../../../components/Trajectory";
import styles from "./index.module.scss";
import LocationList from "./LocationList";
import ReporterOverview from "./Overview";
import qs from 'query-string'

const { Item: BreadcrumbItem } = Breadcrumb;

export default function ReporterDetail() {
  const location = useLocation()
  const history = useHistory()
  const params = qs.parse(location.search);
  const onTabChange = (key: string) => {
    history.replace({ search: qs.stringify({ tab: key })});
  }

  return (
    <div className={`page-detail ${styles.detail}`}>
      <Breadcrumb>
        <BreadcrumbItem>
          <LinkName to="/reporter" text="列表" />
        </BreadcrumbItem>
        <BreadcrumbItem>详情页</BreadcrumbItem>
      </Breadcrumb>

      <Tabs className={styles.tabs} activeTab={params.tab as string || 'overview'}  onChange={onTabChange}>
        <Tabs.TabPane title="概览" key="overview" className={styles.pane}>
          <ReporterOverview />
        </Tabs.TabPane>

        <Tabs.TabPane title="位置列表" key="location" className={styles.pane}>
          <LocationList />
        </Tabs.TabPane>

        <Tabs.TabPane title="轨迹图" key="trajectory" className={styles.pane}>
          <Trajectory />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
