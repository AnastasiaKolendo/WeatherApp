import React, { useEffect } from "react";
import * as d3 from "d3";

const createLineChart = async (temp) => {
  const margin = { top: 50, right: 20, bottom: 50, left: 50 },
    width = 500 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  temp = temp.slice(24);
  const x = d3
    .scaleLinear()
    .domain(d3.extent(temp, (d, i) => i + 1))
    .range([0, width]);
  const y = d3
    .scaleLinear()
    .domain(d3.extent(temp, (d) => d.temp))
    .range([height, 0]);

  let i = 0;
  const valueline = d3
    .line()
    .x(function (d) {
      return x(i++);
    })
    .y(function (d) {
      return y(d.temp);
    })
    .curve(d3.curveCatmullRom.alpha(0.5));

  d3.select("svg").remove();
  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  svg.append("path").data([temp]).attr("class", "line").attr("d", valueline);

  svg
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));

  svg.append("g").call(d3.axisLeft(y));
};

export default function Chart(props) {
  if (props.temp && props.temp[0]) {
    useEffect(() => {
      createLineChart(props.temp);
    }, props.temp);
  }

  return (
    <div>
      <style>{`
            .line {
              fill: none;
              stroke: #8a5b79;
              stroke-width: 5px;
            }
          `}</style>
    </div>
  );
}
