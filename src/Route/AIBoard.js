import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Container = styled.div`
    display:flex;
    width: 100%;
    justify-content:center;
`
const Table = styled.table`
    width: 1200px;
    text-align:left;
`

const AIBoard = props => {
    const [lists, setLists] = useState([])
    const [page, setpage] = useState(1)
    
    const getAPI = async() => {
        const {data} = await axios.get(`http://3.35.235.33:8080/api/get_list_AI/?page=${page}`)
        setLists(data)
    }

    useEffect( () => {
        try{
            getAPI()
            
        } catch (error) {}
    }, [page||lists]) 


    const setPage = (e) => {
        setpage(e.target.text)
    }

    return(
        <>
        <h2>페이지네이션 맨앞 맨뒤, 5칸앞, 5칸뒤 만들어!</h2>
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Writter</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {lists && lists.dtoList && lists.dtoList.map( list => (
                    <tr key={list.bno}>
                        <td >
                            {list.bno}
                        </td>
                        <td >
                            {list.title.substring(0,30)}
                        </td>
                        <td >
                            {list.writer}
                        </td>
                        <td >
                            {list.modDate.substring(0,10)}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            
        </Container>
        <div>
            1
            <div>
                {lists && lists.pageList && lists.pageList.map( page => (
                    <ul key={page}>
                        <li>
                            <Link 
                                to={`/aiboard/${page}`} 
                                onClick={setPage} 
                            >
                                    {page}
                            </Link>
                        </li>
                    </ul>
                ))}
            </div>
            2

            <div page={"AI"} >
                    <Link to={"/write"}  >글쓰기</Link>
            </div>
        </div>
        </>
    )
    
}

export default AIBoard