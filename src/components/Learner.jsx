export default function Learner({learner}){

    return(
        <div className="learner">
            <div className="name"><h3>{learner.name}</h3></div>
            <div className="bio"><p>{learner.bio}</p></div>
            <div className="score-container">
                Scores
            </div>
        </div>
    );
}