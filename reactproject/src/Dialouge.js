import './App.css';
import React from "react";

export default class Dialogue extends React.Component {
    //creation of our recipe list
    state = {
        dialoge_computer: [
            ["How was your day?"],
            ["That's great! Happy to hear. Did you do the homework?", "I'm doing good thanks for asking. Did you do the homework?", "That sucks, did you do the homework though?"],
            ["Cool I still working on it myself.", "You probably should do that lol."],
            ["Conversation Completed"]
          ],  
      dialoge_human: [
          [{name:"My day is going great!"},{name:"Not too bad and yourself?"},{name:"Utterly Horrible"}],
          [{name:"I did!"}, {name:"No I haven't gotten around to yet ;-;"}],
          [{name:"End coversation"}],
          [{}]
      ],
      lengthOfConvo: 3,
      positionInConvo: 0,
      answered: 0
    };
    playerAnswer = (id) => {
        this.setState({ positionInConvo: this.state.positionInConvo + 1 })
        this.setState({ answered: id })
    }
    restartConvo = () => {
        this.setState({ positionInConvo: 0 })
        this.setState({ answered: 0 })
    }
    render() {

        let buttons = this.state.dialoge_human[this.state.positionInConvo].map((object, index) => {
            if (this.state.lengthOfConvo == this.state.positionInConvo) {
                return (
                    <button onClick={this.restartConvo}>Conversation has ended, click this to restart.</button>
                )
            }
            else return (
                <button value={index} onClick={() => this.playerAnswer(index)}>{index}. {object.name}</button>
            )
        })
        
        let robotAnswer = this.state.dialoge_computer[this.state.positionInConvo][this.state.answered]

        //display premade list
        return (
          <div>
              <h2>Robot Speaking</h2>
              <p>{robotAnswer}</p>
              <h2>Your Response</h2>
              {buttons}
          </div>
        );
      }
      
    }