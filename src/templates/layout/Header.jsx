import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    return (
        <StyledHeader id="header" className="shadow position-sticky">
            <nav>
                <Link to="/">Test</Link>
            </nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: flex;
    justify-content: flex-end;
    height: 50px;
    top: 0;
    background-color: white;
    z-index: 10;
`

export default Header
