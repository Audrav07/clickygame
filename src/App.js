import React, { Component } from "react";
import PictureCard from "./components/picture-card";
import NavBar from "./components/navbar";
import Wrapper from "./components/wrapper";
import TitleName from "./components/title-name";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import pictures from "./pictures.json";
import "./App.css";


function shufflePictures(array){
  for(let i = array.length - 1; i >0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

class App extends Component{
  //set this.state
  state = {
    pictures, 
    currentScore: 0,
    topScore: 0,
    message: "",
    clicked: [],
  };



  // scoreUpdate = (id, clicked) => {

  //       const picturesArray = this.state.Pictures;

  //       if (!clicked) {
  //           this.setState({Pictures: picturesArray});
  //           picturesArray.forEach( (picture) => {
  //               if (picture.key === id && picture.clicked === false) {
  //                   picture.clicked = true;
  //                   this.setState({pictures: picturesArray, score: this.state.score + 1})
  //               }
  //           })
  //       } else if (clicked) {
  //           picturesArray.forEach( (picture) => {
  //               picture.clicked = false;
  //           });
  //           this.setState({pictures: picturesArray, score: 0});
  //       }
  //   };

  handleClick = id =>{
    if(this.state.clicked.indexOf(id) === -1){
      this.handleIncrement();
      this.setState({clicked: this.state.clicked.concat(id)});
    } else{
      this.handleReset();
    }
  };

  handleIncrement = () =>{
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      message: ""
    });
    if(newScore >= this.state.topScore){
      this.setState({topScore: newScore});
    }
    else if(newScore === 12){
      this.setState({rightWrong: "You win!"});
    }
    this.handleShuffle();
  };

  handleReset = () =>{
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      message: "Sorry. Try again!",
      clicked: []
    });
    this.handleShuffle();
  };

    handleShuffle = () => {
      let shuffledPictures = shufflePictures(pictures);
      this.setState({pictures: shuffledPictures});
    };

    render() {
      return (
        <Wrapper>
       
        <NavBar
       title="Destination Clicky Game"
        score={this.state.currentScore}
        topScore={this.state.topScore}
        message={this.state.message}
        />

        <TitleName>
        Click each image and try to remember the last one you clicked. Good luck!
        </TitleName>

      <Container>
          <Row>
          {this.state.pictures.map(picture => (
     
            <Column key={picture.id} size="md-3 sm-6">
            <PictureCard
             key={picture.id} 
              id={picture.id}
              image={picture.image}
              handleClick={this.handleClick}
              handleIncrement={this.handleIncrement}
              handleReset={this.handleReset}
              handleShuffle={this.handleShuffle}
             
              />
              </Column>
              ))}

   
          </Row>
        </Container>

      </Wrapper>


          );
        }
  }


export default App;
