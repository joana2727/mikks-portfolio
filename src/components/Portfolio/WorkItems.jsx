import React from "react"; 

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <a href={item.link} className="work__button" target="_blank" rel="noopener noreferrer" alt="Mikks' Sample Work">
        <img src={item.image} alt="" className="work__img" />
      </a>
      <h3 className="work__title">{item.title}</h3>
      <span className="work__text">{item.text}</span>
      <div></div>
    </div>
  );
};

export default WorkItems;
