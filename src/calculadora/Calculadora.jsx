import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: #000;
    width: 27em;
    border-radius: 15px;
    padding: 1em;
`

const Display = styled.div`
    margin-top: 15px;
    h2 {
        display: flex;
        justify-content: flex-end;
        color: #fff;
        padding: 5px;
        margin-bottom: 5px;
    }
`

const Button = styled.button`
    width: 3em;
    height: 3em;
    margin-left: 1.2em;
    margin-bottom: 0.5em;
    border: none;
    border-radius: 0.2em;
    font-size: 1.5em;
    &:hover {
        cursor: pointer;
    }
`

export function Calculadora() {
    const [num, setNum] = useState(0)
    const [oldNum, setOldNum] = useState(0)
    const [operator, setOperator] = useState()

    function inputNum(e) {
        if(num === 0) setNum(e.target.value)
        else setNum(num + e.target.value)
    }

    function clear() {
        setNum(0)
        setOldNum("")
        setOperator("")
    }

    function exp() {
        setNum(Math.pow(num, 2))
    }

    function percentage() {
        setNum(num/100)
    }

    function sign() {
        if(num > 0) setNum(-num)
        else setNum(num * (-1))
    }

    function operation(e) {
        setOperator(e.target.value)
        setOldNum(num)
        setNum(0)
    }

    function calculate() {
        if(operator === '/') setNum(oldNum/num)
        if(operator === 'X') setNum(oldNum*num)
        if(operator === '-') setNum(oldNum-num)
        if(operator === '+') setNum(parseFloat(oldNum)+parseFloat(num))
    }

    return(
        <Container>
            <Display>
                {oldNum ? <h2>{oldNum+operator+num}</h2> : ""}
                <h2>{num}</h2>
            </Display>
            <Button onClick={clear}>AC</Button>
            <Button onClick={exp}>x<sup>2</sup></Button>
            <Button onClick={percentage}>%</Button>
            <Button onClick={operation} value={'/'}>/</Button>
            <Button onClick={inputNum} value={7}>7</Button>
            <Button onClick={inputNum} value={8}>8</Button>
            <Button onClick={inputNum} value={9}>9</Button>
            <Button onClick={operation} value={'X'}>X</Button>
            <Button onClick={inputNum} value={4}>4</Button>
            <Button onClick={inputNum} value={5}>5</Button>
            <Button onClick={inputNum} value={6}>6</Button>
            <Button onClick={operation} value={'-'}>-</Button>
            <Button onClick={inputNum} value={1}>1</Button>
            <Button onClick={inputNum} value={2}>2</Button>
            <Button onClick={inputNum} value={3}>3</Button>
            <Button onClick={operation} value={'+'}>+</Button>
            <Button onClick={sign}><sup>+</sup>/<sub>-</sub></Button>
            <Button onClick={inputNum} value={0}>0</Button>
            <Button onClick={inputNum} value={'.'}>,</Button>
            <Button onClick={calculate}>=</Button>
        </Container>
    )
}