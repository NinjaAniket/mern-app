import React from "react";
import { useParams } from "react-router-dom";

import { PlaceList } from "../components/PlaceList";

export const UserPlaces = () => {
  const items = [
    {
      id: "u1",
      title: "India gate",
      description: "cool india",
      imageUrl:
        "https://images.financialexpress.com/2019/02/Gateway-of-india-reuters.jpg",
      address: "Mumbai",
      creatorId: "u1",
      coordinates: {
        lat: 28.612864,
        lng: 77.229306,
      },
    },
  ];

  //gets users id in url eg: http://localhost:3000/u2/places
  const userId = useParams().userId; //=> u2

  const loadPlaces = items.filter((item) => item.creatorId === userId);

  return <PlaceList items={loadPlaces} />;
};
