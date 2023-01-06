
import Header from "../../components/header/index";
import API from "../../components/Api/index";


import {Select,Global,Section} from './style';




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