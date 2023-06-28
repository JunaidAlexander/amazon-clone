import React from "react";

export const SaveBasketToStorage = (basket) => {
  localStorage.setItem("saveBasket", JSON.stringify(basket));

};
export const GetBasketFromStorage = () => {
  const storedBasket = localStorage.getItem("saveBasket");
  
  return storedBasket ? JSON.parse(storedBasket) : [];
}



