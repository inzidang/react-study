import styled from "styled-components"

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
padding: 128px 0;
`
const InnerContainer  = styled.div`
    width: 1000px;
`
const BoxTitle = styled.div`
    font-size:32px ;
    font-weight:600px;
    padding: 12px 0;
`
const BoxSubTitle = styled.div`
    font-size: 24px;
    color: rgba(0, 0, 0, 0.6);
    padding: 12px 0;
`
const ImageContents = styled.div`
    margin: 16px;
    padding: 128px 64px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 350px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    background-image:url('https://unsplash.com/ko/%EC%82%AC%EC%A7%84/nMzbnMzMjYU');
    background-size: cover;
`

const ContentsText = styled.div`
height:100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-first;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const ContentsButton = styled.div`
    width: 200px;
    height: 60px;
    background: red;
    color: white;
    border-radius: 10px;
    justify-content:center;
    display: flex;
    align-items: center;
`
export default function Portfolio1(){
    return (
        <Container>
            <InnerContainer>
                <div>
                    <BoxTitle>온 오프라인 언제 어디서든</BoxTitle>
                    <BoxSubTitle>간편하고 빠르게 매매/임대차 투자 인사이트를 받아보세요.</BoxSubTitle>
                </div>
                {
                     Array(3).fill("").map((_,i) => <ImageContents>
                    <ContentsText>
                        <div>카카오 비즈 채널</div>
                        <div>카카오 비즈 채널</div>
                        <div>
                            <div>카카오 비즈 채널</div>
                            <div>카카오 비즈 채널</div>
                            <div>카카오 비즈 채널</div>
                        </div>
                    </ContentsText>
                    <ButtonContainer>
                        <ContentsButton>채널 바로가기</ContentsButton>
                    </ButtonContainer>
                </ImageContents>)}
            </InnerContainer>
         </Container>
    )    
}