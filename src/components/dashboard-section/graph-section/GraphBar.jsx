import "./GraphCard.css"
const GraphBar = ({ barHeight }) => {
    return (
        <div className="graph-bar" style={{
            backgroundColor: "#CBE4DE",
            height: `${barHeight}px`,
            width: "50px"
        }} ></div>
    )
}
export default GraphBar;