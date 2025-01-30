import {Stack,TextField,InputAdornment} from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

const Mui_textfield = () => {
    const [visible, setVissible] = useState<any>(true)

    const togglePassword=()=>{
        

        setVissible(!visible) 
        
       
    }
  return (
    <Stack spacing={4} >
        {/* <Stack spacing={2} direction="row">
            <TextField label="Name" variant="outlined" />
            <TextField label="Name" variant="filled" />
            <TextField label="Name" variant="standard" />
        </Stack>
        <Stack spacing={2} direction="row">
            <TextField required label="name required" size="small" color="secondary" />
            <TextField  inputProps={{readOnly:true}} label="readOnly" size="small" color="primary" />
        </Stack>
        <Stack spacing={2} direction="column">
            <TextField type="text" label="enter name" size="small"/>
            <TextField type="password" size="small" color="info" label="Password" />
            <TextField type="date" size="small" color="warning"  />
        </Stack> */}
        <Stack spacing={2} direction="column">
            <TextField label="Amount" 
             InputProps={{ startAdornment : <InputAdornment position="start" >$</InputAdornment>}}
            />
            <TextField label="weight" 
             InputProps={{endAdornment : <InputAdornment position="end" >kg</InputAdornment>}}
            />
            <TextField 
             label="password" 
             type={visible ? "password" : "text"}
            
             InputProps={{endAdornment : 
             
            <InputAdornment onClick={togglePassword} position="end" >
               {visible ? <VisibilityIcon  /> : <VisibilityOffIcon />}
            </InputAdornment>}}
            />
        </Stack>
    </Stack>
  )
}

export default Mui_textfield