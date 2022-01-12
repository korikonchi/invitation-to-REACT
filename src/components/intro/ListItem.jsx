import React from "react";
import Icon from "../icon/Icon";

export const ItemList = ({ ingredient }) => (
  <li>
    {ingredient}
    <Icon i="home" />
  </li>
);
export default ItemList;
