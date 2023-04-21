import React from "react";
import Chart from "chart.js";

export default function LineChart() {
  React.useEffect(() => {
    let config = {
      type: "line",
      data: {
        labels: [
          "Week 1",
          "Week 2",
          "Week 3",
          "Week 4",
        ],
        datasets: [
          {
            label: "Guest",
            backgroundColor: "#E9A0A0",
            borderColor: "#E9A0A0",
            data: [320, 150, 360, 190],
            fill: false,
          },
          {
            label: "User",
            fill: false,
            backgroundColor: "#9BDD7C",
            borderColor: "#9BDD7C",
            data: [390, 200, 300, 210],
          },
        ],
      },
      options: {
        maintainAspectRatio: true,
        aspectRatio: 6/1,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "#858585",
        },
        legend: {
          labels: {
            fontColor: "#858585",
            usePointStyle: true,
          },
          align: "end",
          position: "top",
          maxWidth: "1vw",
          maxHeight: "1vw",
          borderRadius: "50%",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#858585",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Week",
                fontColor: "black",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#858585",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "#858585",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: true,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="ml-[2vw] my-4 px-4 relative flex flex-col min-w-0 break-words w-[85%] rounded-3xl bg-white">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center bg-transparent">
            <div className="relative w-full max-w-full flex-grow flex-1 bg-transparent">
              <h6 className="bg-transparent uppercasetext-black text-blueGray-100 mb-1 text-xl font-semibold">
                Activities
              </h6>
              <h2 className="bg-transparent flex text-[#858585] text-base font-[500]">
                May - June 2021
                <svg className="my-auto h-fit bg-transparent" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.218599 0.255719C0.5193 -0.0722496 0.937938 -0.097987 1.30554 0.255719L4.00082 3.0111L6.69609 0.255719C7.0637 -0.097987 7.48302 -0.0722496 7.78166 0.255719C8.08236 0.582952 8.06305 1.13594 7.78166 1.44332C7.50164 1.7507 4.5436 4.75389 4.5436 4.75389C4.47316 4.83173 4.38873 4.89364 4.29536 4.93592C4.20198 4.97821 4.10157 5 4.00013 5C3.89868 5 3.79827 4.97821 3.7049 4.93592C3.61152 4.89364 3.5271 4.83173 3.45666 4.75389C3.45666 4.75389 0.499989 1.7507 0.218599 1.44332C-0.0634812 1.13594 -0.0821026 0.582952 0.218599 0.255719Z" fill="#858585"/>
                </svg>
              </h2>
            </div>
          </div>
        </div>
        <div className=" bg-transparent p-4 flex-auto">
          {/* Chart */}
          <div className="bg-transparent relative h-[w]">
            <canvas className="bg-transparent" id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}