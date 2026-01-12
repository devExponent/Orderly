import { FoodstoreProvider } from "./store/Foodstore";
import Meal from "./components/Meals";
import Header from "./store/Header";
import Modal from "./components/Modal";
function App() {
  return (
    <>
      <FoodstoreProvider>
        <Modal />
        <Header />
        <Meal />
      </FoodstoreProvider>
    </>
  );
}

export default App;
