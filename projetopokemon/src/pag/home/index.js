
import Header from "../../components/header/index";
import Api from "../../components/Api/index";
import React, { useState } from 'react';
import {Select,Global,Section,SectionSpecification} from './style';



function Home(){
 
    return(
<Global>
                    <Header/>
                    <Select>
                        <h1>Select your Pokemon</h1>
                    </Select>

                 <Section id='contPokemon'>    
                 </Section>     
 </Global>
);
}

export default Home;
