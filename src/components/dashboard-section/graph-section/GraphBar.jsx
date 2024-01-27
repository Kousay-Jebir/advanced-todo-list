import "./GraphCard.css"
const GraphBar = ({ barHeight }) => {
    return (
        <div className="graph-bar" style={{
            backgroundColor: "#CBE4DE",
            height: `${barHeight}px`,
            width: "10%"
        }} ></div>
    )
}
export default GraphBar;