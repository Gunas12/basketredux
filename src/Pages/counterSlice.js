import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: [],
    count: 0,


}



const counterSlice = createSlice({
    name: "counter",
    count: 0,

    initialState,
    reducers: {
        handleBasket: (state, actions) => {
            if (state.value.some((x) => x.data?.id === actions.payload.id)) {
                state.value.forEach(element => {
                    if (element.data.id === actions.payload.id) {
                        element.count = element.count + 1

                    }

                });
            }
            else {
                state.value.push({ count: 1, data: actions.payload })

            }

        },
        Increment: (state, actions) => {
            if (state.value.some((x) => x.data?.id === actions.payload.id)) {
                state.value.forEach(element => {
                    if (element.data.id === actions.payload.id) {
                        element.count = element.count + 1

                    }
                });
            }
        },
        Decrement: (state, actions) => {
            if (state.value.some((x) => x.data?.id === actions.payload.id)) {
                state.value.forEach(element => {
                    if (element.count === 1) {

                        state.value = state.value.filter(x => x.data?.id !== actions.payload.id)
                        state.count = state.value.length
                    }
                    else if (element.data.id === actions.payload.id) {
                        element.count = element.count - 1

                    }
                });
            }
        },
        handleDel: (state, actions) => {
            state.value = state.value.filter(x => x.data?.id !== actions.payload.id)
            state.count = state.value.length


        },

    }
})

export const { handleBasket, handleDel, Increment, Decrement } = counterSlice.actions

export default counterSlice.reducer