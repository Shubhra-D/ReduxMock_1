import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


export const OrderSucces = () => {
  return (
    <Box>
        <Heading as={"h3"} color="green"> Order Placed Successfully</Heading>
       <h4>Thankyou </h4>
       <Link to='/'>Continue Shopping</Link>
    </Box>
  )
}
