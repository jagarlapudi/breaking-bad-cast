import React from "react";
import Card from "./Card";

const CardGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <div className="loader"></div>
  ) : items.length > 0 ? (
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
  ) : (
    <div className="center">
      <h2 className="norecs">No Records Found</h2>
    </div>
  );
};

export default CardGrid;
