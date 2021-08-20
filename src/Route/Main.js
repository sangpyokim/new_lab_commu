import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'




const Container = styled.div`
    display:flex;
    width: 100%;
    justify-content:center;
    height: 800px;
    overflow-y:auto;
    margin-top:50px;
`
const Able = styled(Table)`
  width:1200px;
  margin:0 0 20px 0;
  text-align: center;
  align-items:center;
`

const Td = styled.td`
  width: 100px;
`

const Td1 = styled.td`

`
const Td2 = styled.td`
  width: 200px;
`

const Main = () => {
    const [lists, setLists] = useState([])
    const [page, setPage] = useState(30)
    const [lastPage, setLastPage] = useState(0)
    const [ getting, setGetting ] = useState(true)
    const [ buttonn, setUpButton ] = useState(true)
    const [ password, setPassword ] = useState("")
    const [ input, setInput ] = useState("")
    const [ popup, setPopup ] = useState(false);
    const [ bno, setBno ] = useState(0)
    
    const getAPI = async() => {
        const {data} = await axios.get("http://3.35.235.33:8080/api/get_list")
        setLastPage(data[0].bno)
        setLists(data.slice(0,30))
    }

    useEffect( () => {
        try{
            getAPI()

        } catch (error) {}
    }, []) 


    const goUP = (e) => {
        const contain = document.querySelector(".once")
        const button = contain.querySelector("button")
        contain.scrollTop = 0
        contain.removeChild(button)

        setUpButton(true)
    }

    const handleScroll = async (e) => {
        const clientHeight = e.target.clientHeight
        const scrollHeight = e.target.scrollHeight
        const scrollTop = e.target.scrollTop
        if ( clientHeight + scrollTop >= scrollHeight - 30 && getting === true && page < lastPage ) {
            setGetting(false)
            if( buttonn === true ) {
                const contain = document.querySelector(".once")
                const button = document.createElement("button")
                button.className = "button"
                contain.appendChild(button)
                button.innerHTML= "위로가기"
                button.style.position="fixed"
                button.style.margin="30px 0 0 0"
                button.addEventListener("click", goUP)
                
                setUpButton(false)
            }
            const {data} = await axios.get("http://3.35.235.33:8080/api/get_list")
            setGetting(true)
            const dd = lists.concat(data.slice(page,page + 30))
            setPage(page+30)
            setLists(dd)
        }
    }

    const onClick = (e) => {
        (popup ? setPopup(false) : setPopup(true) )
        setPassword(e.target.attributes.value.value)
        setBno(e.target.attributes.bno.value)
    }

    const onSubmit = async(e) => {
        e.preventDefault()
        ( password === input 
            ?  await axios({
                method: "delete",
                url: `http://3.35.235.33:8080/api/delete/${bno}`
            })
            : alert("비밀번호가 틀렸습니다.") )
            setPopup(false)
        }
        
    return(
        <>
        <Container onScroll={handleScroll} className="once" >
            
            <Able>
                <thead>
                    <tr>
                    <th >#</th>
                    <th >Title</th>
                    <th>Writter</th>
                    <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {lists && lists.map( list => (
                    <tr key={list.bno}>
                        <Td >
                            {list.bno}
                        </Td>
                        <Td1 >
                            <Link to={`get_board/${list.bno}`} >
                                <p>{list.title.substring(0,30)}</p>
                            </Link>
                        </Td1>
                        <Td2 >
                            {list.writer}
                        </Td2>
                        <Td >
                            {list.modDate.substring(0,10)}
                        </Td>
                        <td onClick={onClick} bno={list.bno} value={list.password || "1234"} >
                            삭제
                        </td>
                    </tr>
                    ))}
                    

                </tbody>
            </Able>
        </Container>
            <div>
                <Link to="/write" >
                    <span>글쓰기</span>
                </Link>
            </div>


        {popup 
        ? 
        <div>
                <a>
                    삭제하시려면 비밀번호를 입력하세요.
                </a>
            <form onSubmit={onSubmit}>
                <input 
                    type="password" 
                    value={input} 
                    onChange={ (e) => setInput(e.target.value)} 
                    />
                <input type="submit"  />
            </form>
        </div>
        :
        null
        }
        
        </>
    )
    
}

export default Main