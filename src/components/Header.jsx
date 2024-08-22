import React,{ useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Box,Drawer,List, ListItem, ListItemIcon, ListItemButton,ListItemText } from "@mui/material";
import  HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import  CommentRoundedIcon  from "@mui/icons-material/CommentRounded";
import PhobeRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon  from "@mui/icons-material/ShoppingCartRounded";
import  Logo from"../assets/Logo.png";

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions =[
        {
            icon: <HomeIcon/>,
            text: "Home",
        },

        {
            icon: <InfoIcon/>,
            text: "Sobre",
        },

        {
            icon: <CommentRoundedIcon/>,
            text: "Depoimentos",
        },

        {
            icon: <PhobeRoundedIcon/>,
            text: "Contato",
        },

        {
            icon: <ShoppingCartRoundedIcon/>,
            text: "Carrinho",
        },
    ]

    return(
        <nav className="header">
            <div className="nav__logo-container">
                <img src={Logo} alt="" />
            </div>
            <div className="navbar__links-container">
                <a href="">
                    <BsCart2 className="navbar__cart-icon"/>
                </a>
                <a href="">Home</a>
                <a href="">Depoimentos</a>
                <a href="">Contato</a>
                <a href="">Sobre</a>
                <button className="primary__button">Faça sua reserva!</button>
            </div>
            <div className="navbar__menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{ width: 250}} 
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) =>(
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon> {item.icon} </ListItemIcon>
                                    <ListItemText primary={item.text}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    )
}

export default Header ;