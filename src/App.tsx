import { FoodstoreProvider } from "./store/Foodstore";
import Meal from "./components/Meals";
import Header from "./Header";
import { useContext } from "react";
import { FoodContext } from "./store/foodContext";
import CartMode from "./components/CartMode";
function App() {
  useContext(FoodContext);
  return (
    <>
      <FoodstoreProvider>
        <CartMode />
        <Header />
        <Meal />
      </FoodstoreProvider>
    </>
  );
}

export default App;
