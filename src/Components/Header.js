import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Nav } from 'react-bootstrap'


const P = styled.p`
    font-size:48px;
`
const SLink = styled(Link)`
  margin: 10px;
  text-decoration:none;
`

const Header = () => {
    return(
        <>
            <P className="text-center mt-4 mb-4">순천대학교 컴퓨터공학 실험실 </P>
        <Nav className="justify-content-center">

                <SLink to={'/'}>자유게시판</SLink>

            <SLink to={'/aiboard/1'}>AI게시판</SLink>
        </Nav>
        </>

    )
}

export default Header