import React from 'react'
import styled from 'styled-components'
export default function footer() {
    return (
     <Footer>
        <h4>Created with &hearts; Guruprasad Veerannavaru</h4>  
     </Footer>
    );
}

const Footer=styled.div` 
  background-color:#343a40;
  color:white;
  padding:0.3rem;
  text-align:center;
  position:fixed;
  bottom:0vh;
  display:block;
  width:100%;

`