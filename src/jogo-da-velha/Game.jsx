import { useState, useEffect } from "react";
import { Container } from "../components/style/Container";
import { Box } from "../components/style/Box";
import { Button } from "../components/style/Button";

export function Game() {
    const emptyBlock = Array(9).fill('')
    const [block, setBlock] = useState(emptyBlock)
    const [currentPlayer, setCurrentPlayer] = useState('O')
    const [winner, setWinner] = useState(null)

    const click = (index) => {
        if(winner) {
            alert('Jogo finalizado!')
            return null
        }

        if(block[index] !== '') {
            alert('Posição ocupada!')
            return null
        }

        setBlock(block.map((item, itemIndex) => (itemIndex === index ? currentPlayer : item)))

        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }

    function result() {
        const checkResult = [
            //vertical
            [block[0], block[1], block[2]],
            [block[3], block[4], block[5]],
            [block[6], block[7], block[8]],
            //horizontal
            [block[0], block[3], block[6]],
            [block[1], block[4], block[7]],
            [block[2], block[5], block[8]],
            //diagonal
            [block[0], block[4], block[8]],
            [block[2], block[4], block[6]]
        ]

        checkResult.forEach((block) => {
            if(block.every((item) => item === 'O')) setWinner('O')
            if(block.every((item) => item === 'X')) setWinner('X')
        })

        if(block.every((item) => item !== '')) setWinner('D')
    }

    const resetGame = () => {
        setCurrentPlayer("O")
        setBlock(emptyBlock)
        setWinner(null)
    }

    useEffect(result, [block])

    return(
        <Container $game>
            <Box $game>
                {block.map((item, index) => (
                    <Button $block={item} $game $finish={`${winner ? 'game-over' : ''}`} key={String(index)} onClick={() => click(index)}>{item}</Button>
                ))}
            </Box>

            {
                winner && <span>
                    {winner === 'D' ? <p>Deu empate</p>: <p>{winner} venceu!</p>}
                    <Button $clear onClick={resetGame}>New Game</Button>
                </span>
            }
        </Container>
    )
}