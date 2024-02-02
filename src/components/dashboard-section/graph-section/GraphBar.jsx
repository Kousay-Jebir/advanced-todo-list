import { useState } from "react";
import "./GraphCard.css"
const GraphBar = ({ barHeight }) => {
    let barColor = 'FFF';
    if ((barHeight / 250) * 100 < 50) {
        barColor = 'B94655';
    }
    else if ((barHeight / 250) * 100 < 75) {
        barColor = 'BDA542';
    }
    else {
        barColor = '2AD572';
    }
    return (
        <div data-barheight={`${(Math.floor(barHeight / 250 * 100))}%`} className="graph-bar" style={{
            backgroundColor: "#CBE4DE",
            height: `${barHeight}px`,
            width: "10%",
            WebkitBorderTopLeftRadius: '1rem',
            WebkitBorderTopRightRadius: '1rem',
            backgroundColor: `#${barColor}`
        }} ></div>
    )
}
export default GraphBar;

//green >75
//orange 50>
//red <50