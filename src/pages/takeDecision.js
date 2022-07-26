import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import CardItem from '../components/card'

/*const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
    }
  })*/
  const useStyles = makeStyles(() => ({
    input1: {
      height: 50
    },
    input2: {
      height: 100,
      padding: '20px',
      fontSize: "2em"
    }
  }));
function TakeDecision() {

    const classes = useStyles()
  const [title, setTitle] = useState('')
  const [titleError, setTitleError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)

    if (title == '') {
      setTitleError(true)
    }
    if (title ) {
      console.log(title)
    } 
  }
  return (
    <div>
        <Container size="sm">
      
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div id="header-wrapper">
            <TextField className={classes.field}
            onChange={(e) => setTitle(e.target.value)}
            label="Should I ....." 
            variant="outlined" 
            color="secondary" 
            fullWidth
            required
            error={titleError}
            InputProps={{ classes: { input: classes.input2 } }}
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

    <div id="header-wrapper">
      <CardItem title={"pros"} />
      
      <CardItem title={"cons"}/>
    </div>

      
    </Container>
    </div>
  )
}

export default TakeDecision