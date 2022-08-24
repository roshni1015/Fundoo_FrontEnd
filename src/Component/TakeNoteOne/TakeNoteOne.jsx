import React from "react";
import './TakeNoteOne.css'
import { IconButton, Tooltip } from "@mui/material";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

const Takenote1 = (props) => {
    const switchToNote2 = () => {
        props.noteHeader()
    }

    return (<div>
        <div className="takenote">
            <div onClick={switchToNote2} className="takenote1">
                <input placeholder="Take note" className="note1"></input>
                <div className="takenoteIcon">
                    <Tooltip title="New List">
                        <IconButton className="icons">
                            <CheckBoxOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="New note with drawing">
                    <IconButton className="icons">
                        <BrushOutlinedIcon />
                    </IconButton>
                    </Tooltip>
                    <Tooltip title="New note with image">
                    <IconButton className="icons">
                        <ImageOutlinedIcon />
                    </IconButton>
                    </Tooltip>
                </div>
            </div>
        </div>
    </div>)
}

export default Takenote1;