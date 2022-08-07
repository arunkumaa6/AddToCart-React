import React, { useContext } from "react";
import { statecontext } from "../statecontext/Context";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Favorites() {
  const { state, dispatch } = useContext(statecontext);
  console.log("state", state);

  let remove = (item) => {
    let remItem = state.Favorites.filter((data) => data.id !== item.id);
    dispatch({
      type: "favremove",
      payload: remItem,
    });
  };

  return (
    <div style={{ margin: "50px 0 0 50px" }}>
      {state?.Favorites?.map((fav, id) => (
        <div key={id}>
          <img src={fav.img} width="30%"></img>
          <h2>{fav.title}</h2>
          <h5>${fav.price}</h5>
          <Button
            style={{ position: "relative", left: "280px", bottom: "25px" }}
            onClick={() => remove(fav)}
          >
            <DeleteIcon />
          </Button>
        </div>
      ))}
    </div>
  );
}
