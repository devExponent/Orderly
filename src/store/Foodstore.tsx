import { FoodContext } from "./foodContext";
import { useState, useEffect, type ReactNode } from "react";

type FoodstoreProviderProps = {
  children: ReactNode;
};
export type Meal = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
};

export const FoodstoreProvider = ({ children }: FoodstoreProviderProps) => {
  const [foodStore, setFoodStore] = useState<Meal[]>([]);
  const [order, setOrder] = useState<Meal[]>([]);

  useEffect(() => {
    const loadMeals = async () => {
      try {
        const res = await fetch("http://localhost:3000/meals");
        const data = await res.json();
        console.log(data);
        if (!res.ok) {
          console.log("error");
          return;
        }
        setFoodStore(data);
      } catch (err) {
        console.log(err);
      }
    };
    loadMeals();
  }, []);

  const AddMeal = (id: string) => {
    setOrder((orders) => {
      if (orders.some((order) => order.id === id)) {
        return orders;
      }
      const mealToAdd = foodStore.find((meal) => meal.id === id);
      if (!mealToAdd) return orders;
      return [...orders, mealToAdd];
    });
    console.log(order);
  };

  const contextValue = {
    foodStore,
    order,
    AddMeal,
  };

  return <FoodContext value={contextValue}>{children}</FoodContext>;
};
