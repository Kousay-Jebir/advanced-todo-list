import GraphBar from "./GraphBar";
import { generateGraphBarHeight } from "../../../userData";
const Graph = (props) => {

    return (
        <div id="graph-container">

            {/* <GraphBar barHeight={1 * 250}></GraphBar>
                <GraphBar barHeight={0.5 * 250}></GraphBar>
                <GraphBar barHeight={0.2 * 250}></GraphBar>
                <GraphBar barHeight={0.75 * 250}></GraphBar>
                <GraphBar barHeight={0.90 * 250}></GraphBar>
                <GraphBar barHeight={0.1 * 250}></GraphBar>
                <GraphBar barHeight={0.8 * 250}></GraphBar> */}

            <GraphBar barHeight={(generateGraphBarHeight(0, props.generate)[0] / generateGraphBarHeight(0, props.generate)[1]) * 250}></GraphBar>
            <GraphBar barHeight={(generateGraphBarHeight(1, props.generate)[0] / generateGraphBarHeight(1, props.generate)[1]) * 250}></GraphBar>
            <GraphBar barHeight={(generateGraphBarHeight(2, props.generate)[0] / generateGraphBarHeight(2, props.generate)[1]) * 250}></GraphBar>
            <GraphBar barHeight={(generateGraphBarHeight(3, props.generate)[0] / generateGraphBarHeight(3, props.generate)[1]) * 250}></GraphBar>
            <GraphBar barHeight={(generateGraphBarHeight(4, props.generate)[0] / generateGraphBarHeight(4, props.generate)[1]) * 250}></GraphBar>
            <GraphBar barHeight={(generateGraphBarHeight(5, props.generate)[0] / generateGraphBarHeight(5, props.generate)[1]) * 250}></GraphBar>
            <GraphBar barHeight={(generateGraphBarHeight(6, props.generate)[0] / generateGraphBarHeight(6, props.generate)[1]) * 250}></GraphBar></div >

    );
}
export default Graph;