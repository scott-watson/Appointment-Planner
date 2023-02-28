import React from "react";
import { Tile } from '../tile/Tile'

export const TileList = ({guestArray}) => {


  return (
    <div>
      {guestArray.map( (value, index) => <Tile value={value} key={index} />)}
    </div>
  );
};
