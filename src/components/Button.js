import styled from "styled-components";


const CartButton = styled.button`
text-transform : capitalize;
font-size : 1.4 rem;
background-color :  ${props => props.nocart? "green" :"transparent"} ;
border :  solid var(--mainWhite);
color:  ${props => props.nocart? "black" :"var(--mainYellow)"} ;

border-color: white;
border-width : 2px;
border-radius: 3px;
padding : 0.2rem 0.5rem;
cusror:pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
text-decoration:none;
&:hover{
  color : var(--mainWhite);
  background-color: var(--mainBlue);
 
}
`;

export default CartButton;