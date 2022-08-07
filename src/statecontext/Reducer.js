export const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("isLoggedin")) || false,
  cartItem: [],
  Favorite: [],
};

export const stateReducer = (state, action) => {
  switch (action?.type) {
    case "update":
      return {
        ...state,
        ...action.payload,
      };
    case "favorite":
      return {
        ...state,
        ...action.payload,
      };
    case "increase":
      return {
        ...state,
        ...action.payload,
      };

    case "decrease":
      return {
        ...state,
        ...action.payload,
      };
    case "remove":
      return {
        ...state,
        cartItem: action.payload,
      };
    case "favremove":
      return {
        ...state,
        Favorites: action.payload,
      };
    case "login":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { state };
  }
};
