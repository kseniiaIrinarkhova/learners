import './Score.css'
export default function Score({ score }) {

    return (
        <div className="score-card">
            <div className="date"><h4>{score.date}</h4></div>
            <div className="score"><h4>{score.score}</h4></div>
        </div>
    );
}