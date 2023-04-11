import React from "react";
import * as d3 from 'd3';
export default function PetsGraph(props) {
  const { petCounts } = props;
  const svgRef = React.useRef();

  // Define the scales and axes
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = 500 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  const x = d3
    .scaleBand()
    .range([0, width])
    .padding(0.1)
    .domain(Object.keys(petCounts));

  const y = d3.scaleLinear().range([height, 0]).domain([0, d3.max(Object.values(petCounts))]);

  const xAxis = d3.axisBottom(x);

  const yAxis = d3.axisLeft(y).ticks(5);

  return (
    <svg ref={svgRef} width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        {Object.entries(petCounts).map(([pet, count], index) => (
          <rect
            key={index}
            x={x(pet)}
            y={y(count)}
            width={x.bandwidth()}
            height={height - y(count)}
            fill={`hsl(${(index * 50) % 360}, 70%, 50%)`}
          />
        ))}
        <g transform={`translate(0, ${height})`} ref={node => d3.select(node).call(xAxis)} />
        <g ref={node => d3.select(node).call(yAxis)} />
      </g>
    </svg>
  );
}
