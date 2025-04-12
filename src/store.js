import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// store.dispatch({ type: "account/deposit", payload: 500 });

// store.dispatch(deposit(500))
// store.dispatch(deposit(300))
// store.dispatch(createCustomer('Alabi Raphael', 22344434))
// console.log(store.getState())
