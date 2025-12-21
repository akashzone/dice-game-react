

import { useState } from "react";
import styled from "styled-components"

const NumberSelector = () => {

    let array = [1,2,3,4,5,6];

    const [selectedNumber, setSelectedNumber] = useState();
    return (
        <NumberSelectorContainer>
        <div className="flex">
        {array.map((value, id) => (
            <Box 
            isSelected={selectedNumber === value}
            onClick={() => setSelectedNumber(value)}
            key={id}>
               {value}
            </Box>
        ))}
       </div>
       <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
p{
    font-size: 24px;
    font-weight: 700;
    margin-top: 10px;
    display: block;
    text-align: end;
}
.flex{
    display: flex;  
    align-items: center;        
    gap: 10px;
}
`;

const Box = styled.div`
height: 72px;
width: 72px;
border: 2px solid black;
display: grid;
place-items: center;
text-align: center;
background-color: ${props => props.isSelected ? 'black' : 'white'};
color: ${props => props.isSelected ? 'white' : 'black'};
font-size: 24px;
font-weight: 500;
`;