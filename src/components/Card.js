import React from 'react';
import ExerciseImg from '../images/exercise.png';
import '../styles/Card.scss'

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="Fitness-Card">
                    <div>
                        <div className="Fitness-Card-Image">
                            <img src={ExerciseImg} alt='img' />
                        </div>
                        <div className="Fitness-Card-Info">
                            <h1>Technique Guides</h1>
                            <p>Learn amazing street workout and calisthenics</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card