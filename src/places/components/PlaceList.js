import React from "react";
import "./PlaceList.css";

import { PlaceItem } from "./PlaceItem";

export const PlaceList = ({ items }) => {
  if (items.length === 0)
    return <h2 className="place-list center">No Places yet!</h2>;

  return (
    <ul className="place-list">
      {items.map((place) => (
        <PlaceItem
          image={place.imageUrl}
          key={place.id}
          id={place.id}
          address={place.address}
          description={place.description}
          title={place.title}
          coordinates={place.location}
          creatorId={place.creatorId}
        />
      ))}
    </ul>
  );
};
