import Products from "@/pages/Products";


export const FETCH_PRODUCTS = "FETCH_PRODUCTS" ;
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const ADD_TO_CART = "ADD_TO_CART";

//fetch the products
export const fetchProducts = ()=>{
    return (dispatch)=>{
        dispatch({type:FETCH_PRODUCTS});
        fetch(`https://fakestoreapi.com/products`)
        .then((res)=>res.json())
        .then((data)=>dispatch({
            type:FETCH_PRODUCTS_SUCCESS,payload:data
        })).catch((err)=>dispatch({
            type:FETCH_PRODUCTS_FAILURE,payload:err
        }))
    }
}

//add them to cart 
export const addToCart = (product)=>{
    return (dispatch,getState) =>{
      const cart = getState().products.cart;
      const existingProduct = cart.find((item)=>item.id === product.id);
      if(existingProduct){
        existingProduct.quantity += 1;

      }else{
        cart.push({...product,quantity :1})
      }dispatch({type:ADD_TO_CART , payload:cart})
    };
}