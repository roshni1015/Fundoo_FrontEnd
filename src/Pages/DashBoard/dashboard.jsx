import React, { useState } from 'react'
import Header from '../../Component/Header/header'
import Takenote1 from '../../Component/TakeNoteOne/TakeNoteOne'
import Takenote2 from '../../Component/TakeNoteTwo/TakeNoteTwo'
import TakeNote3 from '../../Component/TakeNoteThree/TakeNoteThreee'
import { getAllNotes } from '../../Service/dataService'
import SideNav from '../../Component/Drawer/drawer'

function Dashboard() {
    const[SwitchNote, setSwitchNote] = useState(false)
    const[NoteArray, setNoteArray] = useState([])
    const[drawer, setDrawer] = useState(false)
    const noteHeader = () => {
        setSwitchNote(true)

    }
    const listenToHeader = () => {
        setDrawer(!drawer)

    }
    React.useEffect(() => {getAllNotes().then((res)=>{console.log(res);setNoteArray(res.data.data)}).catch((error)=>{console.log(error)})},[])
    const Array = NoteArray.map(note => <TakeNote3 note={note}/>  )
  return (
    <div>
        <Header listenToHeader = {listenToHeader}/>
        <SideNav drawer = {drawer}/>
        {
            SwitchNote? <Takenote2/> : <Takenote1 noteHeader = {noteHeader}/>
        }

        {
            Array
        }
      
    </div>
  )
}

export default Dashboard
