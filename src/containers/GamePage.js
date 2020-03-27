import React, {Component} from 'react';
import "../CSS/GameBoard.css"
import GameBoard from "./GameBoard";
import UserDeck from './UserDeck';

export default class GamePage extends Component{
    
    state = {
      player_cards: [],
      user_decks: [],
      // defensive_tackle_players: [],
      // guard_players: []
        // players:[{
        //   id:1,
        //   name:"Patrick Mahomes",
        //   team:"KC",
        //   position:"QB",
        //   number:15,
        //   height:6.3,
        //   weight:230,
        //   img:"https://thenypost.files.wordpress.com/2020/01/patrick-mahomes-7.jpg?quality=80&strip=all&strip=all"
        // },{
        //   id:2,
        //   name:"Julio Jones",
        //   team:"ATL",
        //   position:"WR",
        //   number:11,
        //   height:6.3,
        //   weight:220,
        //   img: "https://bloximages.newyork1.vip.townnews.com/cbs46.com/content/tncms/assets/v3/editorial/2/cd/2cd96316-da52-5243-baf7-44b0e2bfcde0/5b74e9e64016f.image.jpg?resize=400%2C281"
        // },{
        //   id:3,
        //   name:"Mark Andrews",
        //   team:"BAL",
        //   position:"TE",
        //   number:89,
        //   height:6.5,
        //   weight:256,
        //   img: "https://pressboxonline.com/wp-content/uploads/2020/01/ravens18-wk7-mark-andrews-1-800x445.jpg"
        // } 
        }

        componentDidMount(){
          fetch("http://localhost:3000/player_cards")
            .then(response => response.json())
            .then(playerCard => this.setState({
              player_cards: playerCard
            }))
        //   fetch("http://localhost:3000/user_decks")
        //   .then(response => response.json())
        //   .then(userDeck => this.setState({
        //     user_decks: userDeck
        //   }))
        }
        
        addPlayerCardToDeck = player_card => {
          if (!this.state.user_decks.find(deck_card => player_card.id === deck_card.id)){
            this.setState({
              user_decks: [...this.state.user_decks, player_card]
            })
          }
        }

        removePlayerCardFromDeck = player_card => {
          this.setState({
            user_decks: this.state.user_decks.filter(deck_card => deck_card.id !== player_card.id)
          })
        }

        
    render(){
        return(
            <div className="game-board">
              <GameBoard 
                player_cards={this.state.player_cards}
                player_card_click={this.addPlayerCardToDeck}
              />
              <UserDeck 
                user_decks={this.state.user_decks}
                player_card_click={this.removePlayerCardFromDeck}
              />
            </div>
        )
    }
}