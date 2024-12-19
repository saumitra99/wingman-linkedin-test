/* eslint-disable @typescript-eslint/no-explicit-any */
import CCDivider from "@/atom/CCDivider";
import CCText from "@/atom/CCText";
import Spacer from "@/atom/Spacer";
import React from "react";
import {
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Legend,
} from "recharts";

type BarChartData = {
  [key: string]: number | string;
};

type BarChartConfig = {
  xKey: string;
  bars: {
    key: string;
    color: string;
  }[];
  yAxisLabel: string;
};

type SimpleBarChartProps = {
  data: BarChartData[];
  config: BarChartConfig;
  labelMap?: Record<string, string>;
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
            <CCText className="text-gray-600 text-xs">
              {labelMap[entry.dataKey] || entry.value}
            </CCText>
          </div>
        ))}
      </div>
    </>
  );
};

const SimpleBarChart: React.FC<SimpleBarChartProps> = ({
  data,
  config,
  labelMap = {},
}) => {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          {/* Grid */}
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#DCDFE4"
            // vertical={false}
          />
          {/* Axes */}
          <XAxis
            dataKey={config.xKey}
            stroke="#A3A8B4"
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fill: "#A3A8B4",
            }}
          />
          {/* <YAxis
            stroke="#A3A8B4"
            domain={["auto", "auto"]}
            axisLine={false}
            tickLine={true}
            label={{
              value: " config.yAxisLabel",
              angle: -90,
              position: "center",
              fill: "#A3A8B4",
              dx: -20,
            }}
            tick={{
              fontSize: 12, 
              fill: "#A3A8B4", 
            }}
          /> */}

          {/* )} */}
          {/* Tooltip */}
          <Tooltip
            formatter={(value: number | string, name: string) => [
              `${value}`,
              labelMap[name] || name,
            ]}
          />
          {/* Legend */}
          <Legend
            content={<CustomLegend labelMap={labelMap} />}
            verticalAlign="bottom"
          />
          {/* Bars */}
          {config.bars.map((bar, index) => (
            <Bar
              key={index}
              dataKey={bar.key}
              fill={bar.color}
              barSize={30}
              radius={[4, 4, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;
