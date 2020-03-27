import React, { Component } from 'react';
import PlayerCard from "../components/Player Card by Postion/PlayerCard"


 class UserDeck extends Component {

    showDeckCards = () => {
         return this.props.user_decks.map(card => {
            return <PlayerCard key={card.id} player_card_click={this.props.player_card_click} user_decks={card}/>
        })
    }


   render(){
       return (
           <div className="user-deck">  
              {this.showDeckCards()}
               </div>
       )}

}
export default UserDeck