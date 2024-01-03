import * as actions from "./actionType";
export const addProduct = (product) =>{
    return{
        type:actions.ADD_PRODUCT,
        payload:product
    }
}

export const addQuantity = (productId , quantity) =>{
    return{
        type:actions.ADD_QUANTITY,
        payload:{
            productId,
            quantity
        }
    }
}

export const removeQuantity = (productId) =>{
    return{
        type: actions.REMOVE_QUANTITY,
        payload:productId,
    }
}

export const filterByCategory = (filter) =>{
    return{
        type:actions.FILTER_BY_CATEGORY,
        payload:{filter}
    }    
}