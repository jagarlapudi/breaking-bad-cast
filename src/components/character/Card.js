import React from "react";

function Card({ name, img, birthday, status, nickname, isLoading }) {
  return (
    <div className="con">
      <div className="card">
        <div className="front">
          <img src={img} alt={name} className="character-pic"></img>
        </div>
        <div className="back">
          <div className="content">
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Nick name:</strong> {nickname}
            </p>
            <p>
              <strong>Birthday:</strong> {birthday}
            </p>
            <p>
              <strong>Status:</strong> {status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
