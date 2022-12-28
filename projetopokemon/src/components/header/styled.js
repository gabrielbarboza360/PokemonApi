
import styled from "styled-components";
import imgfundo from '../../assents/red-background.png'



export const Container = styled.div`

display:inline-grid;
width: 100%;
height: 540px;
background:url(${imgfundo}) no-repeat;
background-size: 100% 540px;


h1{
    text-align: center;
    margin: auto;
    width: 70%;
    color:white;
    font-size: 26pt;
    font-family: serif;
    text-shadow: black 2px 2px 4px;
    
    @media (min-width:540px){
    margin-top: -45px;
}
}


`

export const ContainerLogo = styled.div`

display: block;
width: 150px;
height: 90px;
margin-top: 15px;
margin-left: 10px;

@media (min-width:540px){
    margin-left: 45px;
}

img{
    width:100%;
    height:100%;
}

`
export const ContainerBall = styled.div`
    display: flex;
     width: 70%;
     margin: auto;
    @media (min-width:540px){
    display: flex;
     margin: auto;
    width: 30%;
    
}

    img{
    width:100%;
    height:100%;
    }

`