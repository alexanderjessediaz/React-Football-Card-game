import React from "react";

export default function PlayerCard(props){

   const {dt_cards} = props
    // const handleClick = () => {
    //     props.changeActiveCard(dt_players)
    // }
    return (
        <div className="card">
            <h1>{dt_cards.name}</h1>
            <img src={dt_cards.img} alt="name"/>
            <h2>Team: {dt_cards.team}</h2>
            <p>Position: {dt_cards.position}</p>
            <h3>Pass Rush: {dt_cards.pass_rush_rating}</h3>
            
        </div> 
    )
}