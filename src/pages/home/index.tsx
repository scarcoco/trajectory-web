import React from "react";
import Panel from "../../components/Panel";
import { Grid } from "@arco-design/web-react";
import Dashboard from "../../components/Dashboard";
import Chart from "../../components/Chart";
import { chart1Data, chart2Data } from "./data";

export default function Home() {
  return (
    <Dashboard title="数据概览">
      <Grid.Row>
      <Grid.Col span={12}>
        <Panel title="用户增长图">
          <Chart data={chart1Data} type="Line" options={{ xField: 'label', yField: 'value'}} />
        </Panel>
      </Grid.Col>

      <Grid.Col span={12}>
        <Panel title="轨迹增长图">
          <Chart data={chart2Data}  type="Line"  options={{ xField: 'label', yField: 'value'}}/>
        </Panel>
      </Grid.Col>
    </Grid.Row>
    </Dashboard>
  );
}
