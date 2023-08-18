import Chart from "react-apexcharts";

export default function ApexChart() {
  const data = {
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      fillSeriesColor: false,
      theme: false,
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
      x: {
        show: true,
        format: "dd MMM",
        formatter: undefined,
      },
      y: {
        formatter: undefined,
        title: {
          formatter: (seriesName) => seriesName,
        },
      },
      z: {
        formatter: undefined,
        title: "Size: ",
      },
      marker: {
        show: true,
      },
      items: {
        display: "flex",
      },
      fixed: {
        enabled: false,
        position: "topRight",
        offsetX: 0,
        offsetY: 0,
      },
    },
    series: [
      {
        name: "Profit",
        data: [
          200, 400, 500, 600, 575, 736, 500, 397, 723, 673, 433, 121, 952, 645,
          325, 872, 325
        ],
      },
    ],
    options: {
      grid: {
        show: false,
      },
      chart: {
        height: 390,
        type: "line",
        foreColor: "#C7B3FC",
        toolbar: {
          show: false,
        },
      },
      forecastDataPoints: {
        count: 7,
      },
      stroke: {
        width: 5,
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "1/11/2023",
          "2/11/2023",
          "3/11/2023",
          "4/11/2023",
          "5/11/2023",
          "6/11/2023",
          "7/11/2023",
          "8/11/2023",
          "9/11/2023",
          "10/11/2023",
          "11/11/2023",
          "12/11/2023",
          "1/11/2024",
          "2/11/2024",
          "3/11/2024",
          "4/11/2024",
          "5/11/2024",
          "6/11/2024",
        ],
        tickAmount: 10,
        labels: {
          formatter: function (value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), "dd MMM");
          },
        },
      },

      fill: {
        
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#C381FC", "#C381FC"],
          shadeIntensity: 2,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 0.9,
          stops: [0, 100, 100, 20],
        },
      },
      yaxis: {
        min: 0,
        max: 1000,
      },
    },
  };

  return (
    <div id="chart">
      <Chart
        options={data.options}
        series={data.series}
        type="line"
        height={350}
      />
    </div>
  );
}
