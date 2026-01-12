import { createContext} from "react";
import type { Meal } from "./Foodstore";

type FoodContextType = {
  foodStore: Meal[];
  order: Meal[];
  AddMeal: (id:string) => void

};

export const FoodContext = createContext<FoodContextType>({
  foodStore: [],
  order: [],
  AddMeal: () => {},
});
