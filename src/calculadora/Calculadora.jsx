import { useState } from "react";
import { Container } from "../components/style/Container";
import { Display } from "../components/style/Display";
import { Button } from "../components/style/Button";

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
        <Container $calc>
            <Display>
                {oldNum ? <h2>{oldNum+operator}</h2> : ""}
                <h2>{num}</h2>
            </Display>
            <Button $calc onClick={clear}>AC</Button>
            <Button $calc onClick={exp}><sub>x</sub><sup>2</sup></Button>
            <Button $calc onClick={percentage}>%</Button>
            <Button $calc onClick={operation} value={'/'}>/</Button>
            <Button $calc onClick={inputNum} value={7}>7</Button>
            <Button $calc onClick={inputNum} value={8}>8</Button>
            <Button $calc onClick={inputNum} value={9}>9</Button>
            <Button $calc onClick={operation} value={'X'}>X</Button>
            <Button $calc onClick={inputNum} value={4}>4</Button>
            <Button $calc onClick={inputNum} value={5}>5</Button>
            <Button $calc onClick={inputNum} value={6}>6</Button>
            <Button $calc onClick={operation} value={'-'}>-</Button>
            <Button $calc onClick={inputNum} value={1}>1</Button>
            <Button $calc onClick={inputNum} value={2}>2</Button>
            <Button $calc onClick={inputNum} value={3}>3</Button>
            <Button $calc onClick={operation} value={'+'}>+</Button>
            <Button $calc onClick={sign}><sup>+</sup>/<sub>-</sub></Button>
            <Button $calc onClick={inputNum} value={0}>0</Button>
            <Button $calc onClick={inputNum} value={'.'}>,</Button>
            <Button $calc onClick={calculate}>=</Button>
        </Container>
    )
}