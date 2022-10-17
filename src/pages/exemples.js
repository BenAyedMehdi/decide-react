import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import CardItem from '../components/card'
import BasicTable from '../components/Table'
import {  useLocation} from "react-router-dom";

function Exemples({s}) {
  /*
  const useStyles = makeStyles(() => ({
    input1: {
      height: 50
    },
    input2: {
      height: 100,
      padding: '20px',
      fontSize: "2em"
    }
  }));*/
  //let location = useLocation();
  const [title, setTitle] = useState('')
  const [state, setState] = useState(s)
  
  const [titleError, setTitleError] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    console.log(s)

    if (title === '') {
      setTitleError(true)
    }
    if (title ) {
      console.log(title)
    } 
    //on branch newUI
  }
  
  return (
    <div>
      {
        
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div id="header-wrapper">
            <TextField
            onChange={(e) => setTitle(e.target.value)}
            label="Should I ....." 
            variant="outlined" 
            color="secondary" 
            fullWidth
            required
            error={titleError}
            />
          </div>
        <Button
          type="submit" 
          color="secondary" 
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}>
          Submit
        </Button>
      </form>
      }
      
    </div>
  )
}

export default Exemples