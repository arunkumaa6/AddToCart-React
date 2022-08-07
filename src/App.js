import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Login from "./components/Login";
import AddTocart from "./pages/AddTocart";
import Favorites from "./pages/Favorites";
import { statecontext } from "./statecontext/Context";
import { initialState, stateReducer } from "./statecontext/Reducer";
import { useReducer } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import GrainIcon from "@mui/icons-material/Grain";
import LockIcon from "@mui/icons-material/Lock";
import FavoriteIcon from "@mui/icons-material/Favorite";

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  console.log("state", state);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  let logout = () => {
    localStorage.setItem("isLoggedin", false);
    dispatch({
      type: "login",
      payload: { isAuthenticated: false },
    });
  };

  return (
    <div>
      <statecontext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          {state?.isAuthenticated ? (
            <>
              <div className="main">
                <ul className="link">
                  <li className="navigate-1">
                    <GrainIcon />
                    <b> a2z </b>
                  </li>
                  <li className="navigate-2">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="navigate-3">
                    <Link to={"/addtocard"}>
                      <IconButton aria-label="cart">
                        <Badge
                          badgeContent={state?.cartItem?.length}
                          color="secondary"
                        >
                          <ShoppingCartIcon />
                        </Badge>
                      </IconButton>
                    </Link>
                  </li>
                  <li className="navigate-4">
                    <Link to={"/favorites"}>
                      <FavoriteIcon />
                    </Link>
                  </li>
                  <li className="navigate-5">
                    <Button id="btn-3" onClick={() => logout()}>
                      <LockIcon />
                    </Button>
                  </li>
                </ul>
              </div>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/addtocard" element={<AddTocart />}></Route>
                <Route path="favorites" element={<Favorites />}></Route>
                <Route
                  path="*"
                  element={<Navigate to={"/"}></Navigate>}
                ></Route>
              </Routes>
            </>
          ) : (
            <Routes>
              <Route path="login" element={<Login />}></Route>
              <Route
                path="*"
                element={<Navigate to={"login"}></Navigate>}
              ></Route>
            </Routes>
          )}
        </BrowserRouter>
      </statecontext.Provider>
    </div>
  );
}

export default App;
