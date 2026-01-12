import { createContext} from "react";
import type { Meal } from "./Foodstore";

type FoodContextType = {
  foodStore: Meal[];
  order: Meal[];
  isLoading : boolean;
  AddMeal: (id:string) => void

};

export const FoodContext = createContext<FoodContextType>({
  foodStore: [],
  order: [],
  isLoading:true,
  AddMeal: () => {},
});
