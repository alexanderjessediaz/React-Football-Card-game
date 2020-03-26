import React from "react";
import PlayerCard from "./PlayerCard"

export default function ActivePlayerCard(props){
    return(
        <>
            <PlayerCard player={props.player}/>
        </>
    )
}