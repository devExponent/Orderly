import { createContext} from "react";
import type { Meal } from "./Foodstore";
import type { cartQuantities } from "./Foodstore";

type FoodContextType = {
  foodStore: Meal[];
  order: Meal[];
  isLoading : boolean;
  AddMeal: (id:string) => void
  mealQuantity: cartQuantities
  IncreaseQty: (id:string) => void
  DecreaseQty: (id:string) => void

};

export const FoodContext = createContext<FoodContextType>({
  foodStore: [],
  order: [],
  isLoading:true,
  AddMeal: () => {},
  mealQuantity:{},
  IncreaseQty: () => {},
  DecreaseQty: () => {}
});
