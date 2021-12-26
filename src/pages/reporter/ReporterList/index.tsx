import React from "react";
import { Table, TableColumnProps } from "@arco-design/web-react";
import { Reporter } from "../../../apis/reporter";
import { PageList } from "../../../components/Page";
import dataList from "./data";
import LinkName from "../../../components/LinkName";

export default function ReporterList() {
  const columns: TableColumnProps<Reporter>[] = [
    {
      title: "ID",
      dataIndex: "Id",
    },
    {
      title: "名字",
      dataIndex: "Name",
      render(Name, { Id }) {
        return <LinkName to={`/reporter/${Id}/detail`} text={Name}/>;
      },
    },
    {
      title: "上报类型",
      dataIndex: "ReporterType",
    },
    {
      title: "创建时间",
      dataIndex: "CreatedAt",
    },
    {
      title: "更新时间",
      dataIndex: "UpdatedAt",
    },
    {
      title: "描述",
      dataIndex: "Description",
    },
  ];

  return (
    <PageList title="上报点管理">
      
      <Table rowKey="Id" columns={columns} data={dataList} />
    </PageList>
  );
}
