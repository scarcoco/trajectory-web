import React, { useEffect, useRef } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";
import styles from "./index.module.css";

export default function Trajectory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (containerRef.current && !mapRef.current) {
      AMapLoader.load({
        key: "a19fa0bfcfba8dd247a2bf3ce8b047d3",
        version: "2.0",
        plugins: [],
      })
        .then((AMap) => {
          mapRef.current = new AMap.Map(containerRef.current);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, []);

  return <div ref={containerRef} className={styles.wrap}></div>;
}
