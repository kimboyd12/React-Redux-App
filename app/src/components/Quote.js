import React, { useEffect } from "react";
import { getQuote } from "../actions/index";
import { connect } from "react-redux";

const Quote = props => {
    useEffect(() => {
        getQuote();
    });

    if (props.isFetching) {
        return <h2>Loading Kayneisms....</h2>
    }

    return (
        <>
        <h2>"{props.quote}"</h2>
        <button onClick={() => props.getQuote()}>Give me more!</button>
        </>
    );
};


const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getQuote })(Quote);