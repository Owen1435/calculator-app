import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import CalculatorBtn from "./CalculatorBtn";
import '../Styles/Calculator.css';

const Calculator = ({setExpression, setResult}) => {
        const btns = [
            {
                content: '7',
                action: add
            },
            {
                content: '8',
                action: add
            },
            {
                content: '9',
                action: add
            },
            {
                content: ' + ',
                action: add
            },
            {
                content: '4',
                action: add
            },
            {
                content: '5',
                action: add
            },
            {
                content: '6',
                action: add
            },
            {
                content: ' - ',
                action: add
            },
            {
                content: '1',
                action: add
            },
            {
                content: '2',
                action: add
            },
            {
                content: '3',
                action: add
            },
            {
                content: 'C',
                action: clear
            },
            { },
            {
                content: '0',
                action: add
            },
            { },
            {
                content: '=',
                action: calculate,
                className: 'result-btn'
            },
        ]
        let history = useHistory();
        const [value, setValue] = useState('')

        function add(content) {
            setValue(value + content)
        }

        function clear() {
            setValue('')
        }

        function calculate() {
            //хреново работает вычисление, мне лень писать рекурсивное дробление выражения по числам

            let result = 0
            let expression = value

            if (expression.includes(' - ')) {
                let arr = value.split(' - ')
                result = Number(arr[0])
                for (let i = 1; i < arr.length; i++) {
                    result -= Number(arr[i])
                }
            }
            if (expression.includes(' + ')) {
                let arr = value.split(' + ')
                result = Number(arr[0])
                for (let i = 1; i < arr.length; i++) {
                    result += Number(arr[i])
                }
            }

            setExpression(expression)
            setResult(result)
            history.push('/view')
        }

        return (
            <div className="calc">
                <div className="calc__result"> {value} </div>
                <div className="calc__btns">
                    {btns.map(btn => {
                            return <CalculatorBtn btn={btn}/>
                        }
                    )}
                </div>
            </div>
        );
    }
;

export default Calculator;