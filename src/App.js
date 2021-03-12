import AppRouter from "./router/AppRouter";
import store from "./redux/store/store.js"
import { Provider } from 'react-redux';
import { getUsers } from "./redux/slices/users";



const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}
store.dispatch(getUsers())
export default App;
