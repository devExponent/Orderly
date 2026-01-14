import { createContext, createRef} from "react";
import type { Meal } from "./Foodstore";
import type { cartQuantities } from "./Foodstore";
import {type  ModalHandle } from "./Foodstore";

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
  cartModalRef: React.RefObject<ModalHandle | null>;
submitOrder:boolean
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
  cartModalRef: createRef<ModalHandle | null>(),
  submitOrder: false

})
