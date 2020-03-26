import React, {Component} from 'react';
import "../CSS/GameBoard.css"
import GameBoard from "./GameBoard"


export default class GamePage extends Component{
    
    state = {
        defensive_tackle_players: [{
            id: 1,
            name: "Ed Oliver",
            team: "BUF",
            position: "DT",
            number: 91,
            height: 6.1,
            weight: 287,
            pass_rush_rating: 78,
            img: "https://cdn.theathletic.com/app/uploads/2019/11/08101149/GettyImages-1167033554-1024x683.jpg"
            }],

        guard_players: [{
            id: 1,
            name: "David DeCastro",
            team: "PIT",
            position: "G",
            number: 66,
            height: 6.5,
            weight: 316,
            pass_block_rating: 84,
            img: "https://media.pff.com/2017/06/GettyImages-623544698.jpg?w=956&h=538" 
            }],
    
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
        // },{
        //   id:4,
        //   name:"Jason Kelce",
        //   team:"PHI",
        //   position:"C",
        //   number:62,
        //   height:6.3,
        //   weight:295,
        //   img: "https://www.phillymag.com/wp-content/uploads/sites/3/2016/09/USATSI_9543542_168380503_lowres-e1474607394957.jpg"
        // },{
        //   id:5,
        //   name:"Christian McCraffrey",
        //   team:"CAR",
        //   position:"RB",
        //   number:22,
        //   height:5.11,
        //   weight:205,
        //   img:"https://www.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY3NDI3OTU4MDk5NjgyOTI4/christian-mccaffrey-panthers-lead.jpg"
        // },{
        //   id: 6,
        //   name: "David Bakhtiari",
        //   team: "GB",
        //   position: "T",
        //   number: 69,
        //   height: 6.4,
        //   weight: 310,
        //   img: "https://usatpackerswire.files.wordpress.com/2019/07/usatsi_11943334-e1564320858830.jpg?w=1000&h=600&crop=1"
        // },{
        //   id: 7,
        //   name: "La'el Collins",
        //   team: "DAL",
        //   position: "T",
        //   number: 71,
        //   height: 6.4,
        //   weight: 320,
        //   img: "https://sportshub.cbsistatic.com/i/r/2016/08/16/aa10aa94-3237-4cdf-b6ff-9cd6167ef9f7/thumbnail/1200x675/0602b9f6921586d5d450262497b3745d/lael-collins.jpg"
        //   },{
        //   id: 8,
        //   name: "Jadeveon Clowney",
        //   team: "SEA",
        //   position: "DE",
        //   number: 90,
        //   height: 6.5,
        //   weight: 255,
        //   img: "https://s.hdnux.com/photos/01/07/10/64/18648360/5/920x920.jpg"
        //   },{
        //   id: 9,
        //   name: "Eddie Jackson",
        //   team: "CHI",
        //   position: "SS",
        //   number: 39,
        //   height: 6.0,
        //   weight: 204,
        //   img: "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/bears/skdzzwqlr5ss0isuv5rq"
        //   },{
        //   id: 10,
        //   name: "Marcus Peters",
        //   team: "BAL",
        //   position: "CB",
        //   number: 22,
        //   height: 6.0,
        //   weight: 195,
        //   img: "https://ca-times.brightspotcdn.com/dims4/default/615ddfc/2147483647/strip/true/crop/4627x3085+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F53%2F0e%2Fff2de4614bccba1fed46556ab49d%2Fhttps-delivery.gettyimages.com%2Fdownloads%2F1182338809.jpg"
        //   }], 
        }
        
    render(){
        return(
            <div className="game-board">
                <GameBoard 
                    dt_cards={this.state.defensive_tackle_players}
                    // guard_cards={this.state.guard_players}
                    // changeActiveCard={this.changeActiveCard}
                    // players={this.state.players}
                />
            </div>
        )
    }
}