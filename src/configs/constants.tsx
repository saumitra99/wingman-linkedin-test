/* eslint-disable @typescript-eslint/no-explicit-any */
import CCText from "@/atom/CCText";
import Spacer from "@/atom/Spacer";
import { BsArrowUpRight } from "react-icons/bs";

export const consultaionsChartData = [
  { day: "Mon", incoming: 20, answered: 30, expertsOnline: 10 },
  { day: "Tue", incoming: 25, answered: 32, expertsOnline: 15 },
  { day: "Wed", incoming: 40, answered: 35, expertsOnline: 20 },
  { day: "Thu", incoming: 55, answered: 38, expertsOnline: 25 },
  { day: "Fri", incoming: 48, answered: 40, expertsOnline: 18 },
  { day: "Sat", incoming: 60, answered: 45, expertsOnline: 22 },
  { day: "Sun", incoming: 62, answered: 50, expertsOnline: 20 },
];

export const consultaionsLabelMap: Record<string, string> = {
  incoming: "Incoming",
  answered: "Answered",
  expertsOnline: "Experts online",
};
export const consultaionsChartConfig = {
  xKey: "day",
  yKeys: [
    {
      type: "line",
      key: "incoming",
      color: "#A3A8B4",
      yAxisId: "left",
      lineType: "dashed",
    },
    {
      type: "line",
      key: "answered",
      color: "#00C49F",
      yAxisId: "left",
    },
    {
      type: "bar",
      key: "expertsOnline",
      color: "#FFF6CC",
      yAxisId: "right",
    },
  ],
  yAxisLabels: {
    left: "CONSULTATIONS",
    right: "EXPERTS ONLINE",
  },
};

export const pastPeriodChartData = [
  { week: "This week", consultations: 20, ordersClosed: 15 },
  { week: "Last week", consultations: 15, ordersClosed: 10 },
];
export const pastPeriodChartConfig = {
  xKey: "week",
  bars: [
    { key: "consultations", color: "#D4F8E8" }, // Light green
    { key: "ordersClosed", color: "#204E44" }, // Dark green
  ],
  yAxisLabel: "",
};

export const pastPeriodLabelMap = {
  consultations: "Consultations",
  ordersClosed: "Orders Closed",
};

export const ordersColumns = [
  {
    header: "Product",
    accessor: "name",
    sortable: true,
  },
  {
    header: "Date",
    // accessor: "date",
    accessor: (row: any) => (
      <div className="flex items-center space-x-4">
        {/* <img
          src={row.image}
          alt="Product"
          className="w-10 h-10 rounded-full object-cover"
        /> */}
        <div>
          <p className="font-medium">{row.date}</p>
          <p className="text-xs text-gray-500">{row.time}</p>
        </div>
      </div>
    ),
  },
  {
    header: "Time spent",
    accessor: "timeSpent",
  },
  {
    header: "Order Value",
    accessor: "orderValue",
    sortable: true,
  },
  {
    header: "Commission",
    accessor: "commission",
    className: "text-black font-bold", // Optional column-specific styling
    sortable: true,
  },
  {
    header: "",
    accessor: () => (
      <a href="#" className="text-blue-500 flex items-center space-x-1">
        <CCText className="text-textColor-grey">View Chat</CCText>
        <Spacer spacing={8} horizontal />
        <BsArrowUpRight className="text-textColor-grey" />
      </a>
    ),
  },
];

export const tableData = [
  {
    image: "/path-to-image.png",
    name: "Product Name...",
    time: "10:24 AM",
    date: "24 Apr '2024",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: "$55",
  },
  {
    image: "/path-to-image.png",
    name: "Product Name...",
    time: "10:24 AM",
    date: "24 Apr '2024",
    timeSpent: "2h 5m",
    orderValue: "$1,021",
    commission: "$25",
  },
  {
    image: "/path-to-image.png",
    name: "Product Name...",
    time: "8:24 AM",
    date: "24 Apr '2024",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: "$5",
  },
  {
    image: "/path-to-image.png",
    name: "Product Name...",
    time: "10:24 AM",
    date: "24 Apr '2024",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: "$550",
  },
  {
    image: "/path-to-image.png",
    name: "Product Name...",
    time: "10:24 AM",
    date: "24 Apr '2024",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: "$505",
  },
  {
    image: "/path-to-image.png",
    name: "Product Name...",
    time: "10:24 AM",
    date: "24 Apr '2024",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: "$255",
  },
];
