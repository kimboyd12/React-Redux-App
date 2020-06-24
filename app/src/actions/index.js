import axios from "axios";


export const getQuote = () => dispatch => {
    dispatch({ type: "FETCHING_QUOTE_START" });
    axios
        .get('https://api.kanye.rest')
        .then(res => {
            console.log(res);
            dispatch({ type: "FETCHING_QUOTE_SUCCESS", payload: res.data.quote })
        })
        .catch(err => {
            console.log(err, "Error!");
        })
}




