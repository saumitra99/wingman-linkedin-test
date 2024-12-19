/* eslint-disable @typescript-eslint/ban-ts-comment */
import Card from "@/atom/Card";
import CCText from "@/atom/CCText";
import Spacer from "@/atom/Spacer";
import React from "react";
import NumberTile from "../NumberTile";
import { allTileDetails, forcastDetails } from "./helper";
import { getTileTypeIcon } from "../NumberTile/helper";
import Chart from "../Chart";
import {
  consultaionsChartConfig,
  consultaionsChartData,
  consultaionsLabelMap,
  ordersColumns,
  pastPeriodChartConfig,
  pastPeriodChartData,
  pastPeriodLabelMap,
  tableData,
} from "@/configs/constants";
import SimpleBarChart from "../SimpleBarChart";
import ForecastCard from "./components/ForcastComponent";
import Table from "@/atom/Table";

function SummaryComponent() {
  return (
    <div className="px-10 py-9">
      <Card>
        <CCText className="text-[32px]">At a glance</CCText>
        <Spacer spacing={44} />

        {/* Responsive grid for NumberTile components */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTileDetails?.map((i, index) => (
            // @ts-ignore
            <NumberTile key={index} tileDetails={i} />
          ))}
        </div>
        <Spacer spacing={32} />
        <CCText className="text-[32px]">Insights</CCText>
        <Spacer spacing={32} />
        <div className="  sm:flex-cols lg:flex justify-between lg:gap-2 sm:gap-6 ">
          <Card className="flex-[0.55]">
            <div className="flex justify-start items-center gap-2">
              {getTileTypeIcon("consultations")}
              <CCText className="text-xs tracking-0.5 font-semibold text-textColor-grey">
                CONSULTATIONS
              </CCText>
            </div>
            <Spacer spacing={24} />
            <Chart
              data={consultaionsChartData}
              // @ts-ignore
              config={consultaionsChartConfig}
              labelMap={consultaionsLabelMap}
            />
          </Card>
          <Card className="flex-[0.25]">
            <div className="flex m:flex-col justify-start items-center gap-2">
              {getTileTypeIcon("barchart")}
              <CCText className="text-xs tracking-0.5 font-semibold text-textColor-grey">
                VS PAST PERIOD
              </CCText>
            </div>
            <Spacer spacing={24} />
            <SimpleBarChart
              data={pastPeriodChartData}
              config={pastPeriodChartConfig}
              labelMap={pastPeriodLabelMap}
            />
          </Card>
          <Card className="flex-[0.25] py-0 px-0" style={{ padding: 0 }}>
            <ForecastCard
              forcast1={forcastDetails?.forcast1}
              forcast2={forcastDetails?.forcast2}
            />
          </Card>
        </div>
        <Spacer spacing={32} />
        <CCText className="text-[32px]">Orders</CCText>
        <Spacer spacing={32} />
        <Table columns={ordersColumns} data={tableData} />
      </Card>
    </div>
  );
}

export default SummaryComponent;
