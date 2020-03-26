import React from "react";

export default function PlayerCard(props){
    
    const {player,} = props
    const handleClick = () => {
        props.changeActiveCard(player)
    }
    return (
        <div className="card" onClick={() => handleClick()}>
            <h2>{player.name}</h2>
            <img src={player.img} alt="name"/>
            <h3>Team: {player.team}</h3>
            <p>Position: {player.position}</p>
        </div> 
    )
}