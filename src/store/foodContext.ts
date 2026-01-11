import { createContext} from "react";
import type { Meal } from "./Foodstore";

type FoodContextType = {
  foodStore: Meal[];
};

export const FoodContext = createContext<FoodContextType>({
  foodStore: [],
});
