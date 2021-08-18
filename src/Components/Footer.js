import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
    
`

const Adress = styled.div`
    
    margin-right: 40px;
    
`

const Logo = styled.img`
    width: 250px;
`

const Foot = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
    text-align:center;
    vertical-align: middle;
`

const Container = styled.div`
    position:absolute;
    bottom: 25px;
    height: 100px;
    width:100%;
`

const Footer = () => {
    return(
        <Container>
            <Foot>
                <Logo 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsRJIQpFT5rYULDKCmPCgclDFOdnxC2TvOXA&usqp=CAU"
                     alt="국립순천대학교" />
                <Form>
                     <Adress>
                        주소 : 57922 전라남도 순천시 중앙로 255(석현동) 
                    </Adress>
                    <Adress>
                        대표전화 : 061-750-3114
                    </Adress>
                </Form>
                <Form>
                    Copyright&copy; 김상표, 김효중
                </Form>
            </Foot>

        </Container>
    )
}

export default Footer;