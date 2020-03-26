import React from "react"
import PlayerCard from "./PlayerCard"


export default function PlayerCardContainer(props){

    const players = props.players.map(player => {
        return <PlayerCard key={player.id} changeActiveCard={props.changeActiveCard} player={player}/>
    })

    return (
        <div className="player-card-container">
            {players}
        </div>
    )
}

