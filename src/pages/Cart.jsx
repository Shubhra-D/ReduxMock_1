import { Box, Button, Container, Heading, Input, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();
//Quantity change logic
const handleQuantityChange = (product,quantity)=>{
    const updateCart = cart.map((item)=>{
      if(item.id === product.id){
        return {...item,quantity:parseInt(quantity)}
      }return item;
    });
    dispatch ({type:"UPDATE_CART",payload:updateCart})
}

//Remove button loguic
  const handleRemove = (product) => {
    const updateCart = cart.filter((item) => item.id !== product.id);
    dispatch({ type: "UPDATE_CART", payload: updateCart });
  };

  //cart proceed 
  if(cart.length === 0){
    return (
      <h2>Your cart is Empty</h2>
    )
  };
//checllkout
const handleCheckout = ()=>{
  history.pushState("/checkout")
}
  
  return (
    <Container>
      <Heading as={"h1"}>Your Cart</Heading>
      {cart.map((product) => {
        <Box
          key={product.id}
          borderRadius={"8px"}
          boxShadow={"rgba(0,0,0,0.45) 0px 5px 10px"}
        >
          <Text fontWeight="bold">{product.title}</Text>
          <Text fontSize="16px">{product.price}</Text>
          <Text>Quantity : {product.quantity}</Text>
          <Input
            type="number"
            value={product.quantity}
            onChange={(e) => handleQuantityChange(product, e.target.value)}
            w={"50px"}
            ml={"15px"}
          />

          <Button onClick={() => handleRemove(product)}>Remove Item</Button>
        </Box>;
      })}
      ;
      <Text fontSize={"24px"} fontWeight={"bald"}>
        Total:$
        {cart.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        )}
      </Text>
     
        <Button onClick={handleCheckout}>Proceed to Checkout</Button>
      
    </Container>
  );
};

export default Cart;
