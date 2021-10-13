import React, {useState} from "react";
import {BrowserRouter, Route} from "react-router-dom"
import Calculator from "./сomponents/Calculator";
import View from "./сomponents/View";

function App() {
    let [expression, setExpression] = useState('')
    let [result, setResult] = useState('')

    return (
        <>
            <BrowserRouter>
                <Route exact path='/'>
                    <Calculator setExpression = {setExpression} setResult = {setResult}/>
                </Route>
                <Route exact path='/view'>
                    <View expression = {expression} result = {result}/>
                </Route>
            </BrowserRouter>
        </>
    );
}

export default App;
