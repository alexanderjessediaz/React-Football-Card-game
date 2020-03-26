import React, {Component} from 'react';
import PlayerCardContainer from "./PlayerCardContainer";
import ActivePlayerCard from "./ActivePlayerCard";

export default class MainContainer extends Component{
    state = {
            player:{}
        }
    
    changeActiveCard = (player) => {
        this.setState({
            player: player
        })
    }
    render(){
        return(
            <div className="main-container">
            <PlayerCardContainer changeActiveCard={this.changeActiveCard}players={this.props.players}/>
            {this.props.players.length > 0
                ?<ActivePlayerCard player={this.state.player}/>
                :"No Active Card"
            }
        </div>
        )
    }
}