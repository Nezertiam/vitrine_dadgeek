import React from 'react'
import styled from 'styled-components'

const Avatar = (props) => {
    return (
        <StyledDiv className={`${props.size}`}>
            
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    background: gray;
    border-radius: 100%;

    &.medium {
        height: 200px;
        width: 200px;
    }
`

export default Avatar
