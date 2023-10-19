import { Provider } from "react-redux";
import HomePage from "./components/HomePage";
import store from "./redux/store";

function App() {
  return (
    <div className="container mx-auto">
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  );
}

export default App;
