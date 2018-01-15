import Header from '../components/Header'
import App from '../components/App'

import { Grid } from '@vx/grid';
import { appleStock } from '@vx/mock-data';
import { Group } from '@vx/group';
import { scaleTime, scaleLinear } from '@vx/scale';
import { AreaClosed } from '@vx/shape';
import { LinePath } from '@vx/shape';
import { AxisLeft, AxisBottom } from '@vx/axis';
// import { LinearGradient } from '@vx/gradient';
/** see: https://github.com/d3/d3-array#extent */
import { extent, max } from 'd3-array';


/** get mock data for apple stock */
const adata = appleStock;

/** modify applestock to generate second line */
const acme = () => {
  const initData = appleStock;
  const test = [];
  initData.map(s => {
    const date = s.date;
    const close = s.close + 100;
    return test.push({ date, close })
  })
  // console.log("TEST")
  // console.log(test)
  // console.log("------------")

  return test
}

const series = [adata, acme()];
// const data = appleStock;
const data = series.reduce((rec, d) => {
  return rec.concat(d)
}, []);
const width = 750;
const height = 400;

const x = d => new Date(d.date);
const y = d => d.close;

// responsive utils for axis ticks
function numTicksForHeight(height) {
  if (height <= 300) return 3;
  if (300 < height && height <= 600) return 5;
  return 10;
}

function numTicksForWidth(width) {
  if (width <= 300) return 2;
  if (300 < width && width <= 400) return 5;
  return 10;
}
// Bounds
const margin = {
  top: 60,
  bottom: 60,
  left: 80,
  right: 80,
};
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

const xScale = scaleTime({
  range: [0, xMax],
  domain: extent(data, x)
});
const yScale = scaleLinear({
  range: [yMax, 0],
  domain: [0, max(data, y)],
});

export default () => (
  <App>
    <Header />
    <svg width={width} height={height}>
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill="#ffffff"
        rx={14}
      />
      <Grid
        top={margin.top}
        left={margin.left}
        xScale={xScale}
        yScale={yScale}
        stroke="#242424"
        width={xMax}
        height={yMax}
        numTicksRows={numTicksForHeight(height)}
        numTicksColumns={numTicksForWidth(width)}
      />
      {series.map((d, i) => {
        // const offset = i * yMax / 2;
        return (

          // <Group top={margin.top} left={margin.left}>
          <Group
            key={`lines-${i}`}
            top={margin.top}
            left={margin.left}
          // top={offset}
          >
            <LinePath
              data={d}
              xScale={xScale}
              yScale={yScale}
              x={x}
              y={y}
              // stroke="#242424"
              // stroke="#1b1a1e"
              strokeWidth={1}
            />
            <AxisLeft
              scale={yScale}
              top={0}
              left={0}
              label={'Close Price ($)'}
              stroke={'#1b1a1e'}
              tickTextFill={'#1b1a1e'}
            />

            <AxisBottom
              scale={xScale}
              top={yMax}
              label={'Years'}
              stroke={'#1b1a1e'}
              tickTextFill={'#1b1a1e'}
            />
          </Group>
        );
      })}
    </svg>
  </App>

)

