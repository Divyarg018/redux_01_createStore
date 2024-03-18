import { createStore } from "redux";

const reducerFn = (state = { counter: 10 }, action) => {

    if (action.type === "INC") {
        return { state: state.counter++ };
    }
    return state;
};

const store = createStore(reducerFn);
export default store;