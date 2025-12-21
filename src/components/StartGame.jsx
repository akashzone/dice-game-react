
import styled from 'styled-components'
const StartGame = () => {
    return (
        <Container>
            <div>
                <img src="/images/dices.png" alt="Dice Game Logo" />
            </div>
            <div className='content'>
                <h1>Dice Game</h1>
                <Button>Play Game</Button>
            </div>
        </Container>
    )
}

export default StartGame

const Container = styled.div`
max-width: 1080px;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;
.content h1{
font-size: 96px;
white-space: nowrap;    
}
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    &:hover {
      background-color: white;
      border: 2px solid #000;
      color: #000;
      transition: background-color 0.3s ease;
    }
`;