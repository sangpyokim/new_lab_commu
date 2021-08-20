import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios'

const Container = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    
`
const Table = styled.div`
    width: 1200px;
    height: 900px;
    border-bottom: 1px solid rgba(25,25,25,0.2);
`

const Header = styled.div`
    border-top: 1px solid rgba(25,25,25,0.2);
    border-bottom: 1px solid rgba(25,25,25,0.2);
`

const Title = styled.div`
    width:100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 500;
    font-size: 24px;
    margin-top: 20px;
`

const Name = styled.div`
    width:100%;
    height: 30px;
    text-align: right;
    font-weight: 500;
    font-size: 16px;
    padding-right: 30px;
`
const Body = styled.div`
    height:100%;
    width:100%;
    display:flex;
    text-align: center;
    padding: 50px 50px 0 50px;
`

const Detail = (props) => {
    const [ board, setBoard ] = useState("")
    
    const getAPI = async() => {
        const { data } = await axios.get(`http://3.35.235.33:8080/api/${props.match.url}`)
        setBoard(data)
    }

    useEffect(() => {
        try {
            getAPI()
                
        } catch (error) {
        }
    
    },[])


    
    
    return(
        <Container>
            <Table>
                <Header>
                    <Title>
                        {board && board.title}
                    </Title>

                    <Name>
                        {board && String(board.modDate).substring(0,10)}
                        &nbsp;
                        {board && String(board.modDate).substring(11,19)}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {board && board.writer}
                    </Name>
                </Header>
                <Body>
                    <div>
                        {board && board.content}
                    </div>
                </Body>
            </Table>
        </Container>
    )
}

export default Detail