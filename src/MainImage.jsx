import styled from "styled-components";

const ContainerImage=styled.div`
width:100%;
height:80vh;
overflow: hidden;
position: relative;
&::after{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255,0.5);
}
`
const MainImages=styled.img`
width:100%;
height: 100%;
object-fit: cover;
object-position: center;
`

const MainTitle=styled.div`
  position:absolute;
  width:1000px;
  transform: translate(-50%, -50%);
  font-weight: 900;
  font-size: 60px;
  top: 50%;
  left: 50%;
  z-index:99; 
  text-align: right;
`;

const SubTitle=styled.div`
padding-left: 10px;
font-size: 30px;
margin-top: 10px;
color: rgba(0,0,0.0.6);
`;

export default function MainImage(){
    return(
        <ContainerImage>
        <MainImages src="https://images.unsplash.com/photo-1682695796497-31a44224d6d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></MainImages>
         <MainTitle>
          <div>영진직업전문학교</div>
          <SubTitle>취업률 전국 최고</SubTitle>
         </MainTitle>
      </ContainerImage>
    )
}