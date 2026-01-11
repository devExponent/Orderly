import { FoodstoreProvider } from "./store/Foodstore";
import Meal from "./components/Meals";
import Header from "./store/Header";
function App() {
  return (
    <>
      <Header />
      <FoodstoreProvider>
        <p>Hello</p>
        <Meal />
      </FoodstoreProvider>
    </>
  );
}

export default App;
