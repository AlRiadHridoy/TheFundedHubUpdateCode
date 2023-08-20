import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function ApexChart() {
  const [toggle, setToggle] = useState("hourly");
  const dataSet = {
    weekly: [
      [5050, 4990, 5100, 5150, 5120, 5170, 5090, 5030, 5130, 5350, 5421.55],
      [5000, 5000, 4990, 5050, 5300, 5400, 5000, 5017, 5200, 5420, 5421.55],
    ],
    daily: [
      [125, 419, 310, 215, 212, 117, 209, 103, 213, 335, 142.55],
      [200, 100, 190, 200, 230, 140, 500, 217, 120, 340, 142.55],
    ],
    hourly: [
      [25, 49, 30, 25, 22, 17, 29, 13, 23, 35, 14.55],
      [20, 10, 19, 20, 20, 10, 50, 27, 12, 30, 14.55],
    ],
  };

  const dates = {
    weekly: [
      "Dec 01",
      "Dec 07",
      "Dec 14",
      "Dec 21",
      "Dec 28",
      "Dec 35",
      "Dec 42",
      "Dec 49",
      "Dec 56",
      "Dec 63",
      "Dec 70",
    ],
    daily: [
      "Dec 01",
      "Dec 02",
      "Dec 03",
      "Dec 04",
      "Dec 05",
      "Dec 06",
      "Dec 07",
      "Dec 08",
      "Dec 09 ",
      "Dec 10",
      "Dec 11",
    ],
    hourly: [
      "12 PM",
      "1 PM",
      "2 PM",
      "3 PM",
      "4 PM",
      "5 PM",
      "6 PM",
      "7 PM",
      "8 PM",
      "9 PM",
      "10 PM",
    ],
  };
  const data = {
    series: [
      {
        name: "Balance",
        type: "area",
        data: dataSet[toggle][0],
      },
      {
        name: "Equity",
        type: "line",
        data: dataSet[toggle][1],
      },
    ],

    options: {
      line: {
        show: true,
        stroke: 1,
      },
      colors: ["#C381FC", "#008ffb"],
      chart: {
        height: 350,
        type: "line",
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 5,
        dashArray: 0,
      },
      dataLabels: {
        enabled: false,
      },
      labels: dates[toggle],
      markers: {
        size: 0,
      },
      grid: {
        show: false,
      },
      xaxis: {
        show: true,
        crosshairs: {
          show: true,
          width: 1,
          position: "back",
          opacity: 0.9,
          stroke: {
            color: "#b6b6b6",
            width: 0,
            dashArray: 0,
          },
        },
      },

      yaxis: {
        show: true,
        showAlways: true,
        crosshairs: {
          show: true,
          width: 1,
          position: "front",
          opacity: 1,
          stroke: {
            color: "#b6b6b6",
            width: 0,
            dashArray: 0,
          },
        },
      },
      fill: {
        opacity: [0.3, 1],
        gradient: [
          {
            type: "vertical",
            opacityFrom: 0.7,
            opacityTo: 0.01,
            stops: [0, 100],
          },
          {
            type: "vertical",
            opacityFrom: 0.1,
            opacityTo: 0.01,
            stops: [100, 0],
          },
        ],
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return "$" + y.toFixed(0);
            }
            return y;
          },
        },
      },
    },
  };

  return (
    <div className="relative">
      <div id="chart">
        <ReactApexChart
          options={data.options}
          series={data.series}
          type="line"
          height={350}
        />
      </div>

      <div className="hourly-daily-weakly absolute -top-14 md:-top-7 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-2 font-Montserrat font-medium text-sm">
        {/* Hourly */}
        <div
          onClick={() => setToggle("hourly")}
          className={`daily cursor-pointer h-7 w-[4.5rem] flex justify-center items-center rounded-lg border border-all/20 text-center transition-all duration-200 ${
            toggle === "hourly" ? "bg-primary/90 text-main-bg" : "bg-dash/40"
          }`}
        >
          Hourly
        </div>
        {/* Daily */}
        <div
          onClick={() => setToggle("daily")}
          className={`daily cursor-pointer h-7 w-[4.5rem] flex justify-center items-center rounded-lg  border border-all/20 text-center transition-all duration-200 ${
            toggle === "daily" ? "bg-primary/90 text-main-bg" : "bg-dash/40"
          }`}
        >
          Daily
        </div>
        {/* Weekly */}
        <div
          onClick={() => setToggle("weekly")}
          className={`weekly cursor-pointer h-7 w-[4.5rem] flex justify-center items-center rounded-lg  border border-all/20 text-center transition-all duration-200 ${
            toggle === "weekly" ? "bg-primary/90 text-main-bg" : "bg-dash/40"
          }`}
        >
          Weakly
        </div>
      </div>
    </div>
  );
}
