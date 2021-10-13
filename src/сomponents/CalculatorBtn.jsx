import React from 'react';
import '../Styles/CalcBtn.css'

const CalculatorBtn = ({btn}) => {
    return (
        <button className={'calc-btn' + ' ' + btn.className} onClick={() => btn.action(btn.content)}>{btn.content}</button>
    );
};

export default CalculatorBtn;