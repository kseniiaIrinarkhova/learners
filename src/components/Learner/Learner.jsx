import Score from "../Score/Score";
import './Learner.css'

export default function Learner({learner}){

    const scores = learner.scores.map((s,i)=> <Score score={s} key={i}/>)
    return(
        <div className="learner">
            <div className="name"><h3>{learner.name}</h3></div>
            <div className="bio"><p>{learner.bio}</p></div>
            <div className="score-container">
                {scores}
            </div>
        </div>
    );
}