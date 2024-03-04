export default function Score({ score }) {

    return (
        <div className="score-card">
            <div className="date"><h4>{score.date}</h4></div>
            <div className="score"><p>{score.score}</p></div>
        </div>
    );
}