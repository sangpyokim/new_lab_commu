import React, { useState } from 'react'
import axios from 'axios'


const Write = () => {
    const [state, setState] = useState("")
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")





    const onSubmit = async(e) => {
        e.preventDefault()
        axios({
            url: `http://3.35.235.33:8080/api/${state}`,
            method:'post',
            data: {
                state,
                writer,
                title,
                content
            }
        })

    }

    return(
        <div>            
            <form onSubmit={onSubmit}>

                    <div>
                        <input type="radio" id="자유게시판" name="drone" value="register" onClick={ (e) => setState(e.target.value) } />
                        <label  htmlFor="자유게시판">자유게시판</label>

                        <input type="radio" id="AI게시판" name="drone" value="register_AI" onClick={ (e) => setState(e.target.value) } />
                        <label htmlFor="AI게시판">AI게시판</label>
                    </div>

                    <table>
                        <tbody>

                        
                        <tr>
                            <td>작성자</td>
                            <td>
                                <textarea 
                                    type="text" 
                                    maxLength="8" 
                                    value={writer} 
                                    onChange={ (e) => setWriter(e.target.value) } 
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>제목</td>
                            <td>
                                <textarea 
                                    type="text" 
                                    maxLength="8" 
                                    value={title} 
                                    onChange={ (e) => setTitle(e.target.value) } 
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>내용</td>
                            <td>
                                <textarea 
                                    maxLength="500" 
                                    rows="22" 
                                    cols="120" 
                                    value={content} 
                                    onChange={ (e) => setContent(e.target.value) } ></textarea>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <input type="submit" value="글쓰기" />

            </form>
        </div>
    )
}

export default Write