import { SkeletonCircle, SkeletonText } from '@/components/ui/skeleton'
import { addToCart, fetchProducts } from '@/redux/action'
import { Box, Button, Flex, HStack, Image, Skeleton, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
  const dispatch = useDispatch();
  const {products,loading,error} = useSelector((state)=>state.products)
  

  useEffect(()=>{
    dispatch(fetchProducts());
  },[dispatch]);
  

  const handleAdd = ()=>{
     dispatch(addToCart(product))
  }
  return (
    <Box>
      {loading ? (
        <Stack>
          <HStack>
          <SkeletonCircle size="10" />
          <SkeletonText noOfLines={2} />
        </HStack>
        <Skeleton height={"200px"}/>
        </Stack>
      ):error ? (<Text>Error : {error.message}</Text>)
    :(
      <Flex wrap={"wrap"} justifyContent={"center"}>
          {products.map((product)=>{
            <Box key={product.id} w={"200px"} m="10px" p="10px" border={"1px solid lightgrey"} borderRadius={"8px"}>
                <Image src={product.image} alt={product.title}/>
                <Text fontWeight={"bold"}>{product.title}</Text>
                <Text color={"grey"} fontSize={"16px"}>{product.price}</Text>
                <Button onClick={()=>handleAdd(product)}>Add To Cart</Button>
            </Box>
          })}
      </Flex>
    )}
    </Box>
  )
}

export default Products