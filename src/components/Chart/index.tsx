/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import CCDivider from "@/atom/CCDivider";
import Spacer from "@/atom/Spacer";
import React, { useMemo } from "react";
import {
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";

type ChartData = {
  [key: string]: number | string;
};

type ChartProps = {
  data: ChartData[];
  labelMap: Record<string, string>;
  config: {
    xKey: string;
    yKeys: {
      type: "line" | "bar";
      key: string;
      color: string;
      yAxisId: "left" | "right";
      lineType?: "solid" | "dashed";
    }[];
    yAxisLabels: {
      left: string;
      right: string;
    };
  };
};

const CustomTooltip = ({ active, payload, labelMap }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white border rounded shadow">
        {payload.map((item: any, index: number) => (
          <p key={index} className="text-sm text-gray-700">
            {`${labelMap[item.name] || item.name}: ${item.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload, labelMap }: any) => {
  return (
    <>
      <Spacer spacing={16} />
      <CCDivider />
      <Spacer spacing={16} />
      <div className="flex flex-wrap space-x-6">
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex items-center space-x-2">
            <span
              className="w-4 h-1 rounded"
              style={{ backgroundColor: entry.color }}
            ></span>
            <span className="text-gray-600 text-sm">
              {labelMap[entry.dataKey] || entry.value}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default function Chart({ data, config, labelMap }: ChartProps) {
  const lineGraphs = useMemo(
    () => config.yKeys.filter((yKeyConfig) => yKeyConfig.type === "line"),
    [config.yKeys]
  );
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          {/* Grid */}
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#DCDFE4"
            vertical={false}
          />

          {/* Axes */}
          <XAxis
            dataKey={config.xKey}
            stroke="#A3A8B4"
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12, // Adjust font size here
              fill: "#A3A8B4", // Adjust color if needed
            }}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="#A3A8B4"
            domain={["auto", "auto"]}
            axisLine={false}
            tickLine={false}
            label={{
              fontSize: "8px",
              value: config.yAxisLabels.left,
              angle: 90,
              dx: -20,
              position: "center",
              fill: "#A3A8B4",
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#A3A8B4"
            domain={["auto", "auto"]}
            axisLine={false}
            tickLine={false}
            label={{
              fontSize: "8px",
              value: config.yAxisLabels.right,
              angle: 90,
              dx: 20,
              position: "center",
              fill: "#A3A8B4",
            }}
          />
          <Tooltip content={<CustomTooltip labelMap={labelMap} />} />
          <Legend content={<CustomLegend labelMap={labelMap} />} />

          {config.yKeys
            .filter((yKeyConfig) => yKeyConfig.type === "bar")
            .map((yKeyConfig, index) => (
              <Bar
                key={index}
                yAxisId={yKeyConfig.yAxisId}
                dataKey={yKeyConfig.key}
                fill={yKeyConfig.color}
                barSize={30}
                radius={[4, 4, 0, 0]}
              />
            ))}

          {/* Render Lines on Top */}
          {/* <Line
            key={index}
            yAxisId={yKeyConfig.yAxisId}
            type="monotone"
            dataKey={yKeyConfig.key}
            stroke={yKeyConfig.color}
            strokeWidth={2}
            strokeDasharray={yKeyConfig.lineType === "dashed" ? "5 5" : ""}
            dot={false}
          /> */}
          {/* {config.yKeys
            .filter((yKeyConfig) => yKeyConfig.type === "line")
            .map((yKeyConfig, index) => ( */}
          <Line
            // key={lineGraphs?.[0]?.index}
            yAxisId={lineGraphs?.[0]?.yAxisId}
            type="monotone"
            dataKey={lineGraphs?.[0]?.key}
            stroke={lineGraphs?.[0]?.color}
            strokeWidth={2}
            strokeDasharray={
              lineGraphs?.[0]?.lineType === "dashed" ? "5 5" : ""
            }
            dot={false}
          />
          <Line
            // key={lineGraphs?.[0]?.index}
            yAxisId={lineGraphs?.[1]?.yAxisId}
            type="monotone"
            dataKey={lineGraphs?.[1]?.key}
            stroke={lineGraphs?.[1]?.color}
            strokeWidth={2}
            strokeDasharray={
              lineGraphs?.[1]?.lineType === "dashed" ? "5 5" : ""
            }
            dot={false}
          />
          {/* ))} */}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
