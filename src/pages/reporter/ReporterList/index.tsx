import React from "react";
import {
  Button,
  Message,
  Table,
  TableColumnProps,
} from "@arco-design/web-react";
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
        return <LinkName to={`/reporter/${Id}/detail`} text={Name} />;
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

    {
      title: "操作",
      dataIndex: "Operate",
      render() {
        const handleEdit = () => {
          Message.success("编辑操作");
        };
        const handleDelete = () => {
          Message.success("删除操作");
        };
        return (
          <>
            <LinkName
              onClick={handleEdit}
              style={{ marginRight: 8 }}
              text="编辑"
            />
            <LinkName onClick={handleDelete} text="删除" />
          </>
        );
      },
    },
  ];
  const handleCreate = () => {
    Message.success("创建操作");
  };

  return (
    <PageList title="上报点管理">
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={handleCreate}>
          创建上报点
        </Button>
      </div>

      <Table rowKey="Id" columns={columns} data={dataList} />
    </PageList>
  );
}
