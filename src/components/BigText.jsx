import React from 'react'
import styled from 'styled-components'


const Text = styled.h1`
    position:fixed;
    top:${props => props.top};
    left:${props => props.left};
    right:${props => props.right};
    font-size:calc(5rem + 5vw);
    color:${props => `rgba(${props.theme.textRgba},0.1)`};
    z-index:0;
    font-weight:bold;
    font-style:italic;
@media(max-width:480px){
  font-size:calc(3rem + 3vw);
}
`


const BigText = (props) => {
  return (
    <Text top={props.top} right={props.right} left={props.left}>
        {props.text}
    </Text>
  )
}

export default BigText