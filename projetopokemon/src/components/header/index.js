 import React from 'react'

// IMG
import Logo from '../../assents/pokemon-logo.png'
import Ball from '../../assents/pokeball-02.png'

//Components

import {Container,ContainerLogo, ContainerBall,} from './styled';



 function Header (){
    return(
        <Container> 
            
           
            <ContainerLogo>
                 <img src={Logo}/> 
            </ContainerLogo>    
            
            

           
            
           <h1> Do you Like Pokemon?</h1>

            <ContainerBall>
                  <img src={Ball}/>
            </ContainerBall>
            
            
         </Container>
    )
 }

 export default Header