import { Heading, HStack, Link } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

export const Navbar = () => {
  const {cart} = useSelector((state)=>state.products)
  
    return (
    <HStack>
        <Heading as={"h1"}>Welcome To App</Heading>
       <Link href='/'>Products
       </Link>
        <Link href='cart'>Cart ({cart.length})</Link>
    </HStack>
  )
}
