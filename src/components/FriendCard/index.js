import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img onClick={() => props.handleClick(props.id, props.clicked)} clicked={props.clicked} alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
