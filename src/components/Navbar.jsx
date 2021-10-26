import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from "@material-ui/icons"
import { Badge } from '@material-ui/core';
import {mobile} from "../responsive"
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';

const Container = styled.div`
height: 60px;
${mobile({height:"50px"})}

`;

const Wrapper = styled.div` 
padding: 10px 20px;
display: flex;
align-items:center;
justify-content: space-between;
${mobile({padding:"10px 0px"})}

`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center`; 

const Language = styled.span`
font-size:14px;
cursor:pointer;
${mobile({display:"none"})}

`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding: 5px`

const Input = styled.input`
border:none;
${mobile({width:"50px"})}
`

const Center = styled.div`
flex: 1;
text-align:center`;

const Logo = styled.img`
width = "220px";
${mobile({width:"100px", padding:"15px"})}
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex:2, justifyContent:"center" })}
`;

const MenuItem = styled.a`
font-size:14px;
cursor: pointer;
margin-left:25px;
${mobile({fontSize:"12px", marginLeft:"10px"})}

`
//Header = NAVBAR.JSX 

const Navbar = () => {
//const quantity = useSelector(state => state.cart.quantity)
    return (
        <Container>
         <Wrapper>
             <Left>
                 <Language>
                     EN
                 </Language>
                 <SearchContainer>
                     <Input placeholder="Search"/>
                     <Search style={{color:"gray", fontSize:16}}/>
                 </SearchContainer>
             </Left>
             <Center>
                 <Link to="/">
                 <Logo src= {"/images/SneakersLoop.png"} alt={"logo"}> 
                 </Logo>
                 </Link>
             </Center>

             <Right>
                 <MenuItem> 
                 <Link to = "/login" style={{textDecoration: "none"}}><i className="fas fa-user"></i> Sign In
                 </Link>
                 </MenuItem>

                 <Link to="/cart"> 
                 <MenuItem> 
                     <Badge color="primary">
                     <ShoppingCartOutlined   />
                     </Badge>
                     </MenuItem>
                </Link>
             </Right>
             </Wrapper>      
         </Container>            
    )
}

export default Navbar
