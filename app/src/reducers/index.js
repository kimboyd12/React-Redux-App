const initialState = {
    loading: false,
    quote: null,
    isFetching: false,
    error: ""
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_QUOTE_START":
            return {
                ...state,
                isFetching: true,
                error: ""
            };

        case "FETCHING_QUOTE_SUCCESS" :
            return {
                ...state,
                // the actual quote is the payload
                quote: action.payload,
                isFetching: false
            };

        default : 
            return state;
    }
}