import React from "react";
import { Table, TableColumnProps } from "@arco-design/web-react";
import { ReporterLocation } from "../../../../apis/reporter";
import { PageList } from "../../../../components/Page";
import dataList from "./data";

export default function LocationList() {
  const columns: TableColumnProps<ReporterLocation>[] = [
    {
      title: "ID",
      dataIndex: "Id",
    },
    {
      title: "经度",
      dataIndex: "Lng",
    },
    {
      title: "维度",
      dataIndex: "Lat",
    },
    {
      title: "上报时间",
      dataIndex: "Timestamp",
    },
  ];

  return (
    <PageList style={{padding: 0}} title="位置管理">
      
      <Table rowKey="Id" columns={columns} data={dataList} />
    </PageList>
  );
}
