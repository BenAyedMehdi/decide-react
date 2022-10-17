import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import ImportanceRadioButtonsGroup from '../ImportanceRadio/importanceRadio'

const useStyles = makeStyles(() => ({
    input1: {
        height: 50,
    },
    input2: {
        height: 100,
        padding: '20px',
        fontSize: '2em',
    },
}))

export default function CardItem({ type, addItem }) {
    const classes = useStyles()
    const [reason, setReason] = useState('')
    const [value, setValue] = useState(3)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (reason) {
            const item = {
                reasonName: reason,
                importance: value,
            }
            addItem(item)
            setReason('')
        }
    }
    const updateValue = (newValue) => {
        setValue(newValue)
    }

    return (
        <div className="pros-or-cons-card">
            <Container size="sm">
                // Why is it {type === 'pros' ? 'good' : 'bad'}
                <form
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <TextField
                            className={classes.field}
                            onChange={(e) => setReason(e.target.value)}
                            label={type}
                            value={reason}
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            InputProps={{ classes: { input: classes.input1 } }}
                        />
                    </div>
                    <div className="importance-radio-group">
                        <ImportanceRadioButtonsGroup changeValue={updateValue} />
                    </div>
                    <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                        endIcon={<KeyboardArrowRightIcon />}
                    >
                        Add to {type}
                    </Button>
                </form>
            </Container>
        </div>
    )
}
