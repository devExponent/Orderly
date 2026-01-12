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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMeals = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:3000/meals");
        const data = await res.json();
        const mealsWithNumbers = data.map((meal: Meal) => ({
          ...meal,
          price: parseFloat(meal.price),
        }));

        console.log(mealsWithNumbers);
        if (!res.ok) {
          return;
        }

        setFoodStore(mealsWithNumbers);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
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
  };

  const contextValue = {
    foodStore,
    order,
    AddMeal,
    isLoading,
  };

  return <FoodContext value={contextValue}>{children}</FoodContext>;
};
