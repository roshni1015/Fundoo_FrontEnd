import React from "react";
import './TakeNoteTwo.css'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { Button, IconButton, Tooltip } from "@mui/material";
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import ColorPopper from "../ColorPopper/colorPopper";
import { createNotes } from "../../Service/dataService";


const Takenote2 = (props) => {
    const [noteObj, setNoteObj] = React.useState({ Title: '', Descreption: '', Color: '', isArchived: false})

const takeTitle = (event) => {
    setNoteObj(prevState => ({ ...prevState, Title: event.target.value }))
}

const takeDescription = (event) => {
    setNoteObj(prevState => ({ ...prevState, Descreption: event.target.value }))
}

const listenToColorPopper = (color) => {
    setNoteObj(prevState => ({ ...prevState, Color: color }))
}
const handleArchive = () => {
    setNoteObj(prevState => ({ ...prevState, isArchived: true }))


}
const createNote = () => {
    createNotes(noteObj).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})
}
    return (<div>
        <div className="takenote2">
            <div style={{ backgroundColor: noteObj.Color }} className="takenote2a">
                <div className="note2a">
                    <input style={{ backgroundColor: noteObj.Color }} onChange={takeTitle}  className="title" placeholder="Title.."></input>
                    <Tooltip title="Pin note">
                        <IconButton className="icons">
                            <PushPinOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </div>
                <div className="note2b">
                    <input style={{ backgroundColor: noteObj.Color }} onChange={takeDescription} className="takenote" placeholder="Take a note..."></input>
                </div>
                <div className="note2c">
                    <div className="noteIcons">
                        <Tooltip title="Remind me">
                            <IconButton className="icons">
                                <AddAlertOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Collaborator">
                        <IconButton className="icons">
                            <PersonAddAltOutlinedIcon />
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Background color">
                        <IconButton className="icons">
                        <ColorPopper action = 'create' listenToColorPopper={listenToColorPopper}/>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Add Image">
                        <IconButton className="icons">
                            <InsertPhotoOutlinedIcon />
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Archive" >
                        <IconButton className="icons">
                            <ArchiveOutlinedIcon onClick={handleArchive}/>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="More">
                        <IconButton className="icons">
                            <MoreVertOutlinedIcon />
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Undo">
                        <IconButton className="icons">
                            <UndoOutlinedIcon />
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Redo">
                        <IconButton className="icons">
                            <RedoOutlinedIcon />
                        </IconButton> 
                        </Tooltip>
                    </div>
                    <div className="close">
                        <Button onClick={createNote} size="small" className="closebutton">Close</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Takenote2;