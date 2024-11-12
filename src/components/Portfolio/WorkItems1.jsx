import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img1" />
      <span className="work__text">{item.text}</span>
    </div>
  );
};

export default WorkItems;
