import React from "react";
import DataSearch from "../DataSearch/DataSearch";
import GroupPets from "../GroupPets/GroupPets";
import './AsideLeft.css'

export default function AsideLeft (){
return (
  <div className="asideWrapper">
      <div className="dataSearch">
      <DataSearch />
      </div>
      <div className="groupPets">
      <GroupPets />
      </div>
  </div>
);
}
