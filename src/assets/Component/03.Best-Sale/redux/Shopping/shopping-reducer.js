import Api from "./api";

const ADD_TO_CART = "ADD_TO_CART";
const ADJUST_ITEM_QTY = "ADJUST_ITEM_QTY";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";

const INITIAL_STATE = {
  products: Api,
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  if (action.type === ADD_TO_CART) {
    const item = state.products.find(
      (product) => product.id === action.payload.id
    );
    const inCart = state.cart.find((item) =>
      item.id === action.payload.id ? true : false
    );

    return {
      ...state,
      cart: inCart
        ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        : [...state.cart, { ...item, qty: 1 }],
    };
  }
  if (action.type === REMOVE_FROM_CART) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }
  if (action.type === ADJUST_ITEM_QTY) {
    return {
      ...state,
      cart: state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: +action.payload.qty }
          : item
      ),
    };
  }
  if (action.type === LOAD_CURRENT_ITEM) {
    return {
      ...state,
      currentItem: action.payload,
    };
  } else {
    return state;
  }
};

export default shopReducer;
