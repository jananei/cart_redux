export const moveToCart = (id) => {
    return {
        type: 'MOVE_TO_CART',
        id
    }
}
export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        id
    }
}

