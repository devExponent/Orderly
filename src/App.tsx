import { FoodstoreProvider } from "./store/Foodstore";
import Meal from "./components/Meals";
import Header from "./store/Header";
function App() {
  return (
    <>
      <FoodstoreProvider>
        <Header />
        <Meal />
      </FoodstoreProvider>
    </>
  );
}

export default App;
