import React from 'react'
import styled from 'styled-components'
import Logo from "./dadgeek.png";

const Avatar = (props) => {
    return (
        <StyledDiv className={`${props.size}`}>
            <img src={Logo} alt="Avatar de DadGeek" className="img"></img>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    background: #575757;
    border-radius: 100%;
    overflow: hidden;

    .img {
        width: 100%;
        height: 100%;
    }

    &.medium {
        height: 200px;
        width: 200px;
    }
`

export default Avatar
