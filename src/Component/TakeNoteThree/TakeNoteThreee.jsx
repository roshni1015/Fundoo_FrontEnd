import React from 'react'
import './TakeNoteThree.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IconButton } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import ColorPopper from '../ColorPopper/colorPopper';
import { TrashNotes } from '../../Service/dataService';
import { editNotes, archiveNotes } from '../../Service/dataService';
import DeleteOutlineOutlined from '@mui/icons-material/DeleteOutlineOutlined';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}; 
function TakeNote3(props) {
  const [open, setOpen] = React.useState(false);
  const [note, setNote] = React.useState({})
    const handleOpen = (obj) => {
        setNote(obj);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);


    const takeColorpopper = (color) => {
      const data = {
        Title: props.note.Title,
        Descreption: props.note.Descreption,
        Color: color 

      }
      editNotes(data, props.note._id).then((res)=>{
        console.log(res)})
        props.GetNote()
        .catch((error)=>{
          console.log(error)})

    }
    const isArchive = () => {
      archiveNotes(props.note._id).then((res)=>{
        console.log(res)
      }).catch((error)=>{
        console.log(error)})

    }
    
    const isTrash = () => {
      TrashNotes(props.note._id).then((res) => {
          console.log(res);
      }).catch((err) => {
          console.log(err);
      })
    }
    const editTitle = (event) => {
      setNote(prevState => ({ ...prevState, Title: event.target.value }))
}  
    const editDescreption = (event) => {
      setNote(prevState => ({ ...prevState, Descreption: event.target.value }))

}  
const editColor = (event) => {
  setNote(prevState => ({ ...prevState, Color: event.target.value }))

}  
    const onClose = () => {
      editNotes(note, props.note._id).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})


    } 
   
  return (

      <div className='main3'>
        <div style={{ backgroundColor: props.note.Color }} class="box1">
              <div onClick={() => handleOpen(props.note)} class="top part">
                  <div style={{ backgroundColor: props.note.Color }} >{props.note.Title}</div>
                  <PushPinOutlinedIcon fontSize='small'/>
              </div>
            <div onClick={() => handleOpen(props.note)} class="middle part">
              <div style={{ backgroundColor: props.note.Color}} >{props.note.Descreption}</div></div>            
              <div class="bottom part">
                  <AddAlertOutlinedIcon fontSize='small'/>
                  <PersonAddAltOutlinedIcon fontSize='small'/>
                  <ColorPopper takeColorpopper = {takeColorpopper} action='update' />
                  <InsertPhotoOutlinedIcon fontSize='small'/>
                  <ArchiveOutlinedIcon onClick={isArchive} fontSize='small'/>
                  <DeleteOutlineOutlined onClick={isTrash} fontSize='small'/>
                  <MoreVertOutlinedIcon fontSize='small'/>
              </div>
          </div>
        
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        aria-colourby="modal-modal-Color"
      >
        <Box style={{ backgroundColor: props.note.Color }} className="modelBox" sx={style} >
        <input style={{ backgroundColor: props.note.Color }} className="model"  onChange={editTitle} id="modal-modal-title" variant="h6" component="h2" defaultValue={note.Title}/> 
            
          
        <input style={{ backgroundColor: props.note.Color }}className="model"  onChange={editDescreption} id="modal-modal-description" sx={{ mt: 2 }} defaultValue= {note.Descreption}/>
          <div className="modal_box3">
                    <div className="modal_icon-group">
                        <Tooltip title="Remind me">
                            <IconButton className="icons3">
                                <AddAlertOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Collaborator">
                            <IconButton className="icons3">
                                <PersonAddAltOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Background options">
                            <IconButton className="icons3">
                                <ColorPopper  id="modal-modal-Color" onChange={editColor} takeColorpopper={takeColorpopper} action='update' />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Add Image">
                            <IconButton className="icons3">
                                <InsertPhotoOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Archive">
                            <IconButton className="icons3">
                                <ArchiveOutlinedIcon onClick={isArchive} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Trash">
                            <IconButton className="icons3">
                                <DeleteOutlineOutlined onClick={isTrash} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="More">
                            <IconButton className="icons3">
                                <MoreVertOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div onClick={onClose} className='modal_closeButton'>
                        <Button size="small" className="buttonclose">Close</Button>
                    </div>
                </div>
          {/* <Button onClick={onClose} >Close</Button>   */}
          
        </Box>
      </Modal>
    </div>
  )
}

export default TakeNote3