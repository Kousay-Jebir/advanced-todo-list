import { Simulate } from "react-dom/test-utils";
import "./SubmissionTimer.css"
const SubmissionTimer = () => {
    return (<div className="submission-timer-container">
        You can resubmit in <br></br> <span style={{
            color: '#2FFAFE',
            fontSize: '1.5rem',
            fontWeight: 'bold',
        }}>{"12:34:45"}</span>
    </div >);
}
export default SubmissionTimer;