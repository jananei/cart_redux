const initialState = {
    item: [{
        id: 1,
        productName: 'Foot Ball',
        price: 150,
        image: 'football',

    },
    {
        id: 2,
        productName: 'Mobile',
        price: 4000,
        image: 'phone',

    }, {
        id: 3,
        productName: 'Smart watch',
        price: 5000,
        image: 'watch',

    },],
    cartItem: []

}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVE_TO_CART': {
            console.log(state.item[action.id])
            let tempArr = Object.assign({}, state.item[action.id])
            console.log(tempArr)
            return {
                cartItem: [...state.cartItem, tempArr],
                item: state.item
            }
        }
        case 'REMOVE_FROM_CART': {
            const tempElement = [...state.cartItem]
            tempElement.splice(action.id, 1)
            console.log(tempElement)
            console.log(...state.cartItem[action.id])
            return {

                cartItem: [...tempElement],
                item: state.item,

            }

        }
        default: return state;

    }
}