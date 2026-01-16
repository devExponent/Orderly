import { FoodContext } from "./foodContext";
import { useState, useEffect, type ReactNode } from "react";
import { useMemo, useRef } from "react";

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
        if (!res.ok) {
          setIsLoading(false);
          return;
        }
        const data = await res.json();
        const mealsWithNumbers = data.map((meal: Meal) => ({
          ...meal,
          price: isNaN(parseFloat(meal.price)) ? 0 : parseFloat(meal.price),
        }));

        console.log(mealsWithNumbers);

        setFoodStore(mealsWithNumbers);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadMeals();
  }, []);

  const getOrders = async (ordersData) => {
    try {
      const res = await fetch(
        "http://localhost:3000/orders",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ordersData),
        }
      );

      if (res.ok) {
        const result = await res.json();
        console.log("Success:", result);
      } else {
        console.error("Error:", res.status, res.statusText);
        return;
      }
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

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

  const totalPrice = useMemo(() => {
    return order.reduce((sum, orders) => {
      const qty = mealQuantity[orders.id] ?? 0;
      return sum + orders.price * qty;
    }, 0);
  }, [order, mealQuantity]);

  const cartModalRef = useRef<ModalHandle>(null);
  const openCart = () => cartModalRef.current?.open();
  const closeCart = () => cartModalRef.current?.close();

  const PlaceOrder = () => {
    if (order.length > 0) {
      setSubmitOrder(true);
    }
  };

  const CancelOrder = () => {
    setSubmitOrder(false);
    closeCart();
  };

  const contextValue = useMemo(
    () => ({
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
      CancelOrder,
      getOrders,
    }),
    [foodStore, order, isLoading, mealQuantity, totalPrice, submitOrder]
  );

  return (
    <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>
  );
};
