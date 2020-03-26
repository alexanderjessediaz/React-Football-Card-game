import React from 'react';
import PlayerCard from "../PlayerCard"

export default function GameBoard(props){

    const dt_players = props.dt_cards.map(player => {
        return <PlayerCard key={player.id} dt_cards={player}/>
    })

    // const guard_players = props.guard_cards.map(player => {
    //     return <PlayerCard key={player.id} guard_cards={player}/>
    // })

    return (
        <div className="player-card-container">
            {dt_players}
        </div>
    )
}