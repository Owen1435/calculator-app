import React from 'react';
import '../Styles/View.css';

const View = ({expression, result}) => {
    return (
        <div className="view">
            <div className="view__result"> {expression} = {result} </div>
            <div className="view__back-link">
                <a href="/">Back</a>
            </div>
        </div>
    );
};

export default View;