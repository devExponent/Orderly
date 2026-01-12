import { FoodstoreProvider } from "./store/Foodstore";
import Meal from "./components/Meals";
import Header from "./store/Header";
import Cart from "./components/Cart";
function App() {
  return (
    <>
      {/* <Cart /> */}
      <FoodstoreProvider>
        <Header />
        <Meal />
      </FoodstoreProvider>
    </>
  );
}

export default App;
