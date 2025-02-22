import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const CheckOut = () => {
  const {cart} = useSelector((state)=>state.products);
  const dispatch = useDispatch();
  

  //place order
  const handlePlaceOrder = ()=>{
    dispatch({type:"CLEAR_CART",})
    history.pushState("/order-succes")
  }
    return (
    <Box>
      <h2>Order Summary</h2>
      {cart.map((product)=>{
        <Box key={product.id}>
            <Text fontWeight={"bold"}>{product.title}</Text>
            <Text fontSize={"18px"}>Quantity:{product.quantity}</Text>
            <Text fontSize={"24px"} fontWeight={"bold"}> Price:{product.price}</Text>
        </Box>
      })}
      <Text>Total Price: ${cart.reduce((acc,product)=>acc + product.price * product.quantity ,0)}</Text>
       <Button onClick={handlePlaceOrder}>Place Order</Button>
    </Box>
  )
}
