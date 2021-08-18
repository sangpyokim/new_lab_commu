import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

const Write = () => {
    const [state, setState] = useState("자유게시판")


    

    return(
        <div>
            라디오버튼으로 하나만 체크한뒤 그 타겟의 값을 setState함
            만약 state값이 ai라면
             axios.post로 /api/register_AI를 호출하여 게시글을 등록함
        </div>
    )
}

export default Write