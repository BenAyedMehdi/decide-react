import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import CardItem from '../components/card'
import BasicTable from '../components/Table'
import apiCalls from '../apiCalls'

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
  const [currentId, setCurrentId] = useState(0)
  const [titleError, setTitleError] = useState(false)
  const [pros, setPros] = useState([])
  const [cons, setCons] = useState([])
  const [finished, setFinished] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTitleError(false)

    if (title === '') {
      setTitleError(true)
    }
    if (title) {
      const response = await apiCalls.AddDecision({idea: title})
      console.log(response)
      setCurrentId(response.decisionId)
    }
  }
  //new UI
  const addPro = (item) => {
    setPros([...pros, item])
    const newPro = {
      reasonName : item.reason,
      importance : item.value,
      decisionId : currentId
    }
    const res = apiCalls.AddPro(newPro)
    //console.log(res)
  }
  const addCon = (item) => {
    setCons([...cons, item])
    const newCon = {
      reasonName : item.reason,
      importance : item.value,
      decisionId : currentId
    }
    const res = apiCalls.AddCon(newCon)
  }

  const terminateDecision = async (e)=> {
    e.preventDefault()
    const res = await apiCalls.FinishDecision(currentId)
    setFinished(true)
  }
  return (
    <div>
        <Container size="sm">
      {currentId==0&&
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
      }
      

    {currentId>0&& 
    <>
      <h2>{title}</h2>
      {!finished&&
      <div id="add-reasons">
        <div className='CardItem'>
          <CardItem addItem={addPro} type={'pros'}></CardItem>
        </div>
        
        <div className='CardItem'>
          <CardItem addItem={addCon} type={'cons'}></CardItem>
        </div>
      </div>
    }

      <div className='the-table'>
      <BasicTable pros={pros} cons={cons} />
      </div>

      {!finished&&
      <Button
      onClick={terminateDecision}
      type="submit" 
      color="secondary" 
      variant="contained"
      endIcon={<KeyboardArrowRightIcon />}>
          Finish
      </Button>
      }
      {finished&&
      <Button
      onClick={terminateDecision}
      type="submit" 
      color="secondary" 
      variant="contained"
      endIcon={<KeyboardArrowRightIcon />}>
          Share your decision
      </Button>
      }
    </>
    }

    
    
    
    </Container>
    </div>
  )
}

export default TakeDecision