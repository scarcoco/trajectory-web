import React, { useRef } from "react";
import { Line, Column, Bar,  } from "@antv/g2plot";
import { useEffect } from "react";

interface ChartProps {
  type?: 'Line' | 'Column' | 'Bar'
  data: any;
  options?: any;
}

const ChartMap: any = {
  Line,
  Column,
  Bar,
}
const Chart: React.FC<ChartProps> = ({ data, options, type = 'Line' }) => {
  const chartRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && !chartRef.current) {
      chartRef.current = new ChartMap[type](containerRef.current, {
        height: 400,
        autoFit: true,
        ...options,
        data,
      });
      chartRef.current.render();
    }
  }, [data, options, type]);

  return <div ref={containerRef}></div>;
};

export default Chart;
