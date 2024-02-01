import GraphBar from "./GraphBar";
import { generateGraphBarHeight } from "../../../userData";
const Graph = () => {
    return (

        <div id="graph-container">
            <GraphBar barHeight={1 * 250}></GraphBar>
            <GraphBar barHeight={0.5 * 250}></GraphBar>
            <GraphBar barHeight={0.2 * 250}></GraphBar>
            <GraphBar barHeight={0.75 * 250}></GraphBar>
            <GraphBar barHeight={0.90 * 250}></GraphBar>
            <GraphBar barHeight={0.1 * 250}></GraphBar>
            <GraphBar barHeight={0.8 * 250}></GraphBar></div>

    );
}
export default Graph;