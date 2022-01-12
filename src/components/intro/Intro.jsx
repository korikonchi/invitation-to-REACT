import React from "react";
import Item from "./ListItem";

export function Intro({ title, ingredients, mainIngredient }) {
  return (
    <div className="">
      <h2 className="">{title}</h2>
      <div className="">
        <ul className="">
          {ingredients.map((ing) => (
            <Item key={ing} ingredient={ing} />
          ))}
        </ul>
        {mainIngredient}
      </div>
    </div>
  );
}

export default Intro;
