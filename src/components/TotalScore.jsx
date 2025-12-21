import styled from 'styled-components'

const TotalScore = () => {
  return (
    <ScoreCounter>
        <h1>0</h1>
        <p>Total Score</p>
    </ScoreCounter>
  )
}

export default TotalScore

const ScoreCounter = styled.div`

text-align: center;
max-width: 200px;
h1{
    font-size: 90px;
    font-weight: 500;
    line-height: 80px;
    margin-top: 20px;
}
p{
    font-size: 24px;
    font-weight: 400;
}
`;