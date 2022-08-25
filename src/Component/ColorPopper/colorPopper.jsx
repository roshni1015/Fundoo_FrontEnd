import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import { Button, IconButton, Tooltip } from "@mui/material";


export default function ColorPopper(props) {
  console.log(props);
  const [anchorEl, setAnchorEl] = React.useState(null);

  let colorArray = [
                    '#E2725B', '#FFAE42', '#FEFE33', 
                    '#77DD77', '#40E0D0', '#A4DDED', 
                    '#77B5FE', '#BA55D3', '#FFB3DE', 
                    '#C19A6B', '#D3D3D3'
                  ]

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
   
  const takecolor = (color) => {
    if(props.action == 'create'){
        // console.log(color);
        props.listenToColorPopper(color);

    }
    else if(props.action == 'update'){
        console.log(color);
        props.takeColorpopper(color)
    }

  }
  return (
    <div>
      <IconButton className="icons">
        <PaletteOutlinedIcon  aria-describedby={id} onClick= {handleClick}/></IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display:'flex', marginLeft:55, borderRadius:2 }}>
          {
          colorArray.map((color) => (<div onClick={()=> takecolor(color)} style = {{height:35, width:35, borderRadius:50, backgroundColor:color, margin:2 }}></div>))
          }
        </Box>
      </Popper>
    </div>
  );
}
