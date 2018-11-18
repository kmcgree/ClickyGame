import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import { reset } from "ansi-colors";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
  };

  shuffle = array => (
    array
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1])
  );

  handleClick = (id, clicked) => {
    const friendsClickCheck = this.state.friends;
    if (clicked) {
      this.setState({
        friends,
        score: 0,
      })

    } else {
      friendsClickCheck.forEach(friend => {
        if (friend.id === id) {
          friend.clicked = true
        }
      })
      return (
        this.setState({
          friends: this.shuffle(friendsClickCheck),
          score: this.state.score + 1,
        })
        
      )

    }
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <Title>Score: {this.state.score}</Title>
        <h2>Click a picture to get started. Try to click each picture only one time. If you click a picture more than once the score will reset. Good Luck!</h2>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
