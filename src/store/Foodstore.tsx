import { FoodContext } from "./foodContext";
import { useState, useEffect, type ReactNode } from "react";
import { useMemo, createRef } from "react";

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

export type cartQuantities = {
  [mealId: string]: number;
};

export type ModalHandle = {
  open: () => void;
  close: () => void;
};

export const FoodstoreProvider = ({ children }: FoodstoreProviderProps) => {
  const [foodStore, setFoodStore] = useState<Meal[]>([]);
  const [order, setOrder] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mealQuantity, setMealQuantity] = useState<cartQuantities>({});
  const [submitOrder, setSubmitOrder] = useState<boolean>(false);

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
      setMealQuantity((prev) => ({
        ...prev,
        [id]: 1,
      }));

      return [...orders, mealToAdd];
    });
  };

  const IncreaseQty = (id: string) => {
    setMealQuantity((prev) => ({
      ...prev,
      [id]: (prev[id] ?? 0) + 1,
    }));
  };

  const DecreaseQty = (id: string) => {
    setMealQuantity((prev) => {
      const currentQty = prev[id] ?? 0;

      if (currentQty <= 1) {
        return prev;
      }

      return {
        ...prev,
        [id]: currentQty - 1,
      };
    });
  };

  const PlaceOrder = () => {
    setSubmitOrder(true);
  };

  const totalPrice = useMemo(() => {
    return order.reduce((sum, orders) => {
      const qty = mealQuantity[orders.id] ?? 0;
      return sum + orders.price * qty;
    }, 0);
  }, [order, mealQuantity]);

  const cartModalRef = createRef<ModalHandle>();
  const openCart = () => cartModalRef.current?.open();
  const closeCart = () => cartModalRef.current?.close();

  const contextValue = {
    foodStore,
    order,
    AddMeal,
    isLoading,
    mealQuantity,
    IncreaseQty,
    DecreaseQty,
    totalPrice,
    openCart,
    closeCart,
    cartModalRef,
    PlaceOrder,
    submitOrder,
  };

  return <FoodContext value={contextValue}>{children}</FoodContext>;
};
