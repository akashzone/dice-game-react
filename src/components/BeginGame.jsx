import TotalScore from './TotalScore.jsx'
import NumberSelector from './NumberSelector.jsx'

import styled from 'styled-components'
const BeginGame = () => {
  return (
    <MainContainer>
    <div className='topSection'>
    <TotalScore />
    <NumberSelector />
    </div>
    </MainContainer>
  )
}

export default BeginGame

const MainContainer = styled.main`
.topSection{
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

max-width: 1080px;
margin: 0 auto;
`;