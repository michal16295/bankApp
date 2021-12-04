import ItemContainer from "../ItemContainer";
import Chart from "react-apexcharts";

const series = [
  {
    name: "Latest Activity",
    data: [45, 52, 38, 45, 19, 33],
    show: false,
  },
];
const options = {
  chart: {
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },

  grid: {
    yaxis: {
      lines: {
        show: false, //or just here to disable only x axis grids
      },
    },
    xaxis: {
      lines: {
        show: true, //or just here to disable only x axis grids
      },
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    categories: ["M", "T", "W", "T", "F", "S", "S"],
  },
  yaxis: {
    show: false,
  },
};

const BalanceItem = () => {
  return (
    <ItemContainer>
      <div style={{ padding: "20px" }}>
        <div>Latest Activity</div>
        <div style={{ flex: "1" }}>
          <Chart
            scrolling={true}
            options={options}
            series={series}
            type="line"
            width="110%"
            height="100px"
          />
        </div>
      </div>
    </ItemContainer>
  );
};

export default BalanceItem;
