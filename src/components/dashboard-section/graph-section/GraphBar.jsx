import "./GraphCard.css"
const GraphBar = ({ barHeight }) => {
    return (
        <div data-barHeight={`${(barHeight / 250) * 100}%`} className="graph-bar" style={{
            backgroundColor: "#CBE4DE",
            height: `${barHeight}px`,
            width: "10%",
            WebkitBorderTopLeftRadius: '1rem',
            WebkitBorderTopRightRadius: '1rem',
        }} ></div>
    )
}
export default GraphBar;