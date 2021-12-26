import { Descriptions } from "@arco-design/web-react";
import React from "react";
import { Reporter, ReporterType } from "../../../../apis/reporter";

export default function ReporterOverview() {
  const source: Reporter = {
    Id: "17df5fcdedc",
    Name: "张三的儿童手表",
    ReporterType: ReporterType.Watch,
    CreatedAt: 1640509558840,
    Description: "张三的儿童手表",
    UpdatedAt: 1640509558840,
  };

  const data = [
    {
      label: "Id",
      value: source.Id,
    },
    {
      label: "Name",
      value: source.Name,
    },
    {
      label: "ReporterType",
      value: source.ReporterType,
    },
    {
      label: "CreatedAt",
      value: source.CreatedAt,
    },
    {
      label: "Description",
      value: source.Description,
    },
    {
      label: "UpdatedAt",
      value: source.UpdatedAt,
    },
  ];

  return <Descriptions column={2} data={data} />;
}
