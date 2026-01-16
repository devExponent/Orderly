import { createContext} from "react";
import type { Meal } from "./Foodstore";
import type { cartQuantities } from "./Foodstore";
import {type  ModalHandle } from "./Foodstore";

type CreateOrderResponse = { message: string };

type FoodContextType = {
  foodStore: Meal[];
  order: Meal[];
  isLoading : boolean;
  AddMeal: (id:string) => void
  mealQuantity: cartQuantities
  IncreaseQty: (id:string) => void
  DecreaseQty: (id:string) => void
  totalPrice: number
  openCart: () => void
  closeCart: () => void;
  cartModalRef: React.RefObject<ModalHandle | null> | null;
  PlaceOrder: () => void
  submitOrder: boolean
  CancelOrder:() => void
    getOrders: (data: any) => Promise<CreateOrderResponse>;
};

export const FoodContext = createContext<FoodContextType>({
  foodStore: [],
  order: [],
  isLoading:true,
  AddMeal: () => {},
  mealQuantity:{},
  IncreaseQty: () => {},
  DecreaseQty: () => {},
  totalPrice:0,
  openCart: () => {} ,
  closeCart: () => {},
   cartModalRef: null,
  PlaceOrder: () => {},
  submitOrder: false,
  CancelOrder: () => {},
  getOrders: () => {}
})
