import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background:rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    padding: 16px 0;
`
const InnerContainer = styled.div`
    width: 1000px;
    height: 200px;
    background:rgba(0, 0, 0, 0.3)
`
const GridContainer = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;

`
const MainBox = styled.div`
background:white;
border-radius: 15px 0 15px 15px;
height: 300px;
padding: 20px;
justify-content: space-around;
:hover {
    background: red;
    color: white;
}
`

export default function Profile(){
    return(
        <Container>
            {/* 1000픽셀 중앙정렬*/}
            <InnerContainer>
                {/*그리드*/}
                <GridContainer>
                    {/*박스*/}
                    <MainBox>
                        <div> 임차인입니다.</div>
                        <div>허위매물 제로!</div>
                        <div>진수조사 기반 압도적<br/>
                        질과 양의 매물을 제공합니다.</div>
                        <div>사무실 구하기 > </div>
                    </MainBox>
                    <MainBox>
                        <div> 임대인입니다.</div>
                        <div>공실걱정 제로!</div>
                        <div>지식산업센터는 물론 국내의 기업등<br/>
                        수많은 임차인들에게 매물을 소개합니다. </div>
                        <div>사무실 구하기 > </div>
                    </MainBox>
                    <MainBox>
                        <div> 임차인입니다.</div>
                        <div>광고비  제로!</div>
                        <div>진수조사 기반 압도적<br/>
                        질과 양의 매물을 제공합니다.</div>
                        <div>사무실 구하기 > </div>
                    </MainBox>
                </GridContainer>
            </InnerContainer>
        </Container>
    )
}