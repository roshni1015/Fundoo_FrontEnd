import React from "react";
import './header.css';
import { IconButton, InputBase } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Keep from '../assets/keep.png';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Header = (props) => {
    const listenToHeaderMenu = () => {
        props.listenToHeader()

    }
    return (
        <div>
            <div className="header">
                <div className="header1">
                    <IconButton>
                    <MenuOutlinedIcon onClick ={listenToHeaderMenu} className="menu" />
                    </IconButton>
                    <img src={Keep} alt="keep logo" className="keep" />
                    <h2>Keep</h2>
                </div>
                <div className="header2"> 
                <IconButton id='Searchbar' aria-label="search" size="large">
                            <SearchIcon className="IconSearch" />
                        </IconButton>              
                    <InputBase className="Search" id ="Search" placeholder="Search"/>                        
                    
                </div>
                <div className="header3">
                <IconButton>
                    <div className="logo">
                        <RefreshOutlinedIcon/>
                    </div>
                    </IconButton>                    
                    <IconButton >
                        <div className="logolist" >
                        <ViewStreamOutlinedIcon  />

                        </div>
                    </IconButton>                     
                    <IconButton>
                    <div className="logo" >
                    <SettingsOutlinedIcon/>
                    </div>
                    </IconButton>                 
                    </div>
                <div className="header4">
                <IconButton>
                    <div className="logo" >
                    <AppsOutlinedIcon/>
                    </div>
                    </IconButton>
                    <IconButton>
                    <div className="logo" >
                    <AccountCircleOutlinedIcon/>
                    </div> 
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
export default Header;