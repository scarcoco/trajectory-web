import React, { useEffect, useState } from "react";
import { Table, TableColumnProps } from "@arco-design/web-react";
import { ReporterLocation } from "../../../../apis/reporter";
import { PageList } from "../../../../components/Page";
// import dataList from "./data";
import axios from 'axios'
import { BaseURL } from "../../../../const";

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

  const [list, setList] = useState<ReporterLocation[]>([]);

  useEffect(() => {
    axios.get(`${BaseURL}/api/v1/reporter/1/location`).then(({ data }) => {
      setList(data.Data.List)
    })
  }, [])

  return (
    <PageList style={{padding: 0}} title="位置管理">
      
      <Table rowKey="Id" columns={columns} data={list} />
    </PageList>
  );
}
