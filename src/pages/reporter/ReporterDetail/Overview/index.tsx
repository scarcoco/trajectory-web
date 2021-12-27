import { Descriptions } from "@arco-design/web-react";
import React, { useEffect, useState } from "react";
import { Reporter } from "../../../../apis/reporter";
import { BaseURL } from "../../../../const";
import axios from 'axios';

export default function ReporterOverview() {
  // const source: Reporter = {
  //   Id: "17df5fcdedc",
  //   Name: "张三的儿童手表",
  //   ReporterType: ReporterType.Watch,
  //   CreatedAt: 1640509558840,
  //   Description: "张三的儿童手表",
  //   UpdatedAt: 1640509558840,
  // };
  const [source, setSource] = useState<Reporter | undefined>()
  useEffect(() => {
    axios.get(`${BaseURL}/api/v1/reporter/1/detail`).then(({ data }) => {
      setSource(data.Data)
    })
  }, [])

  const data = [
    {
      label: "Id",
      value: source?.Id,
    },
    {
      label: "Name",
      value: source?.Name,
    },
    {
      label: "ReporterType",
      value: source?.ReporterType,
    },
    {
      label: "CreatedAt",
      value: source?.CreatedAt,
    },
    {
      label: "Description",
      value: source?.Description,
    },
    {
      label: "UpdatedAt",
      value: source?.UpdatedAt,
    },
  ];

  return <Descriptions column={2} data={data} />;
}
