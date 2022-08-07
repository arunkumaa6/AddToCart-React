import React from "react";
import "./Home.scss";
import products from "../products.json";
import { useContext } from "react";
import { statecontext } from "../statecontext/Context";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import AppleIcon from "@mui/icons-material/Apple";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Home() {
  const { state, dispatch } = useContext(statecontext);

  const addTocart = (prod) => {
    let incNum = (prod.qty += 1);
    let temp = [];
    if (state?.cartItem?.length) {
      temp = [...state.cartItem, prod];
    } else {
      temp = [prod];
      console.log("temp", temp);
    }

    const newArr = temp.filter((val, id, array) => array.indexOf(val) == id);

    dispatch({
      type: "update",
      payload: { cartItem: newArr, incNum },
    });
  };

  const favorite = (prod) => {
    console.log("prod", prod);
    let fav = [];
    if (state?.Favorites?.length) {
      fav = [...state.Favorite, prod];
    } else {
      fav = [prod];
    }
    const favArr = fav.filter((val, id, array) => array.indexOf(val) == id);

    dispatch({
      type: "favorite",
      payload: { Favorites: favArr },
    });
  };

  return (
    <>
      <div className="container">
        <h1>New Arrivals</h1>
        {products.map((prod, id) => (
          <div key={id}>
            <img src={prod.img} width="30%"></img>
            <h2>{prod.title}</h2>
            <h5>${prod.price}</h5>
            <p>
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </p>
            <Button id="btn" variant="outlined" onClick={() => addTocart(prod)}>
              ADDTOCART
            </Button>
            <Button
              id="btn-2"
              variant="outlined"
              onClick={() => favorite(prod)}
            >
              FAVORITE
            </Button>
          </div>
        ))}
      </div>
      <hr></hr>
      <div className="footer">
        <div>
          <h4>Company</h4>
          <div className="company">
            <a href=""> Testimonials</a>
            <br></br>
            <a href="">About Us</a>
            <br></br>
            <a href="">Career</a>
            <br></br>
            <a href="">Case Studies</a>
            <br></br>
          </div>
        </div>
        <div className="connect">
          <h4 id="co-h4">Connect With Us</h4>
          <p id="icon-p">
            <AppleIcon />
            <WhatsAppIcon />
            <InstagramIcon />
            <GoogleIcon />
            <TelegramIcon />
          </p>
        </div>
      </div>
    </>
  );
}
