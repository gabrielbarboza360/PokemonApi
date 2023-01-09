import styled from "styled-components";









export const Global = styled.div`
  margin: 0px;
  padding: 0px;
  display: grid;
  

 .id{
  font-size: 14pt;
  color: rgba(0, 0, 0, 0.44);
  margin: 0px;
  padding: 0px;
  padding-left: 20px;
}
 }

 .img{
  display: flex;
    width: 10rem;
    height:160px;
    margin: auto;
    margin-top: 20px;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.41);
    border-radius: 50px;
 }

 .name{
  text-align: center;
  margin: 0px;
  margin-top: 10px;
  font-family: 'East Sea Dokdo', cursive;
}
 }

`


export const Select = styled.div`
  
  width:100%;
  height: 90px;
  background-color: #EFF3F6;
  margin:auto;
  margin-top: 0px;
  

  h1{
    color: #2F3133;
    text-align: center;
    
  }
`

export const Section = styled.section`

.normal {
  background-color: #a6a877;
}

.grass {
  background-color: #77c850;


}

.poison{
  background-color: #a040a0;
}

.fire {
  background-color: #ee7f30;
}

.water {
  background-color: #678fee;
}

.electric {
  background-color: #f7cf2e;
}

.ice {
  background-color: #98d5d7;
}

.ground {
  background-color: #dfbf69;
}

.flying {
  background-color: #a98ff0;
}



.fighting {
  background-color: #bf3029;
}

.psychic {
  background-color: #f65687;
}

.dark {
  background-color: #725847;
}

.rock {
  background-color: #b8a137;
}

.bug {
  background-color: #a8b720;
}

.ghost {
  background-color: #6e5896;
}

.steel {
  background-color: #b9b7cf;
}

.dragon {
  background-color: #6f38f6;
}

.fairy {
  background-color: #f9aec7;
}





display: grid;
margin: auto;
grid-template-columns: repeat(1,1fr);
grid-gap: 20px;

   



   div{
   

    box-shadow: 4px 4px 20px #0000003d;
    width: 300px;
    cursor:pointer;
    height: 280px;
    margin-top: 90px;
    border-radius: 20px;
   }



   @media (min-width:540px){
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 3.2rem;
      
    }

  

    
`

// ---------------------------- specificationPokemon

export const SectionSpecification = styled.section`

.normal {
  background-color: #a6a877;
}

.grass {
  background-color: #77c850;


}

.poison{
  background-color: #a040a0;
}

.fire {
  background-color: #ee7f30;
}

.water {
  background-color: #678fee;
}

.electric {
  background-color: #f7cf2e;
}

.ice {
  background-color: #98d5d7;
}

.ground {
  background-color: #dfbf69;
}

.flying {
  background-color: #a98ff0;
}



.fighting {
  background-color: #bf3029;
}

.psychic {
  background-color: #f65687;
}

.dark {
  background-color: #725847;
}

.rock {
  background-color: #b8a137;
}

.bug {
  background-color: #a8b720;
}

.ghost {
  background-color: #6e5896;
}

.steel {
  background-color: #b9b7cf;
}

.dragon {
  background-color: #6f38f6;
}

.fairy {
  background-color: #f9aec7;
}









#border{
  position: fixed;
  transform: translate(-50%, -50%);
  z-index: 1;
  top: 50%;
  left: 50%;

}



width:100%;
height:1200px;


    #cont{
      @media (max-width:539px){ width: 90%; height: 500px;display:block; }

        @media (min-width:540px){
          display:flex;
        }
    }


div{

  color:white;
  margin:auto;
 
  border-radius: 20px;
    
      @media (min-width:540px){
         
          color:white;
          display:flex;
          width:710px;
          height:508px;
          margin:auto;
          border-radius: 20px;
  }
  

    .contImg{
        width:100%;
        height: 100%; }

      @media (min-width:540px){width: 710px; height: 505px;
         .contImg > img{
          width:90%;
          height:90%;
         }
          
     
  }

    @media (min-width:540px){ 
      .about{
       background-color: rgba(0,0,0,0.41);
       display: block;
       text-shadow: 2px 2px 4px black;
      }
     
      .name{
       margin-top: 50px;
       margin-bottom:50px;
       margin-left: 20px;
      }
     
      .type{
       margin-top: 50px;
       margin-bottom:50px;
       margin-left: 20px;
      }

      .weight{
        margin-left: 20px;
      }
     
      .height{
       margin-top: 50px;
       margin-bottom:50px;
       margin-left: 20px;
      }
     
       .abilities{
       margin-top: 50px;
       margin-bottom:50px;
       margin-left: 20px;
      }}


 .about{
  
 }

 .name{
   
 }

 .type{
  
 }

 .height{

 }

  .abilites{
 
 }
}




`

/*   =============================== tamanho : web

#cont{
  display:block;
}

div{
background-color: black;
color:white;
 display:flex;
 width:710px;
 height:508px;
 margin:auto;
 border-radius: 20px;

.contImg{
  background:red;
  width: 550px;

  h1{
    width:100%
  }
}


      @media (min-width:540px){ 
 .about{
  display: block;
  margin-left: 40px;
 }

 .name{
  margin-top: 50px;
  margin-bottom:50px;
 }

 .type{
  margin-top: 50px;
  margin-bottom:50px;
 }

 .height{
  margin-top: 50px;
  margin-bottom:50px;
 }

  .abilites{
  margin-top: 50px;
  margin-bottom:50px;
 }}
} */