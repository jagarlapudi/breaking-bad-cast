import React from "react";
import Card from "./Card";

const CardGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <div className="loader"></div>
  ) : (
    <div className="container-grid">
      {items.map((character) => (
        <Card
          name={character.name}
          img={character.img}
          nickname={character.nickname}
          status={character.status}
          birthday={character.birthday}
          isLoading={isLoading}
          key={character.char_id}
        />
      ))}
    </div>
  );
};

export default CardGrid;
