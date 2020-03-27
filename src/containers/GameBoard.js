import React, { Component } from 'react';
import PlayerCard from "../components/Player Card by Postion/PlayerCard"


 class GameBoard extends Component{
    
    showPlayerCards = () => {
        return this.props.player_cards.map(card => {
            return <PlayerCard key={card.id} player_card_click={this.props.player_card_click} player_card={card}/>
        })
    }

    render(){                                     
        return (
            <div className="player-card-container">
                {this.showPlayerCards()}
            </div>
        )
    }
}
export default GameBoard;