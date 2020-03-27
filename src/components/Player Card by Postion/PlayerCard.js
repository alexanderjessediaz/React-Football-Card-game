import React from "react";

 

    const PlayerCard = props => {

        const {player_card} = props
        
        const handleClick = () => (
            props.player_card_click(props.player_card)
        
            )
     
    return (
        <div className="card" onClick={handleClick}>
             <h1>{player_card.name}</h1>
            <img src={player_card.image} alt="name"/>
            <h2>Team: {player_card.team}</h2>
            <p>Position: {player_card.position}</p> 
        </div> 
        
        )
        
    };
export default PlayerCard;