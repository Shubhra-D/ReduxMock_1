
import { FETCH_PRODUCTS,FETCH_PRODUCTS_FAILURE,FETCH_PRODUCTS_SUCCESS } from "./action";
import { ADD_TO_CART } from "./action";

const initialState = {
    products:[],
    loading:false,
    error:null,
    cart:[]
};

const productsReducer = (state = initialState,action)=>{
    switch(action.type){
        case FETCH_PRODUCTS:
            return {...state,loading:true}
        case FETCH_PRODUCTS_SUCCESS:
            return {...state,products:action.payload,loading:false}
        case FETCH_PRODUCTS_FAILURE:
            return {...state,error:action.payload,loading:false}
        case ADD_TO_CART :
            return {...state,cart:action.payload}
        case "UPDATE_CART":
            return {...state,cart:action.payload}
        case "CLEAR_CART":
            return {...state,cart:[]}
        default:
            return state;
        }
};

export const rootReducer = combineReducers({
    products:productsReducer,
})