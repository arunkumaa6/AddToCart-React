import React, { useContext } from "react";
import { statecontext } from "../statecontext/Context";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";

const AddTocart = () => {
  const { state, dispatch } = useContext(statecontext);
  // console.log(state);

  let increase = (item) => {
    let incNum = (item.qty += 1);
    dispatch({
      type: "increase",
      payload: incNum,
    });
  };

  let remove = (item) => {
    let remItem = state.cartItem.filter((data) => data.id !== item.id);
    dispatch({
      type: "remove",
      payload: remItem,
    });
  };

  let decrease = (item) => {
    if (item.qty == 0) {
      remove(item);
    } else {
      let decNum = item.qty--;
      dispatch({
        type: "decrease",
        payload: decNum,
      });
    }
  };

  return (
    <div style={{ margin: "50px 0 0 50px" }}>
      {state?.cartItem?.map((prod, id) => (
        <div key={id}>
          <img src={prod.img} width="30%"></img>
          <h2>{prod.title}</h2>
          <h5>${prod.price}</h5>
          <br></br>
          <h3>Quantity: {prod.qty}</h3>
          <br></br>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button onClick={() => decrease(prod)}>-</Button>
            <Button onClick={() => remove(prod)}>
              <DeleteIcon />
            </Button>
            <Button onClick={() => increase(prod)}>+</Button>
          </ButtonGroup>
        </div>
      ))}
    </div>
  );
};
export default AddTocart;
