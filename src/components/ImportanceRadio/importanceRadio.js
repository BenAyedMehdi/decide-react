import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

export default function ImportanceRadioButtonsGroup({ changeValue }) {
    const [value, setValue] = React.useState(3)

    const handleChange = (event) => {
        setValue(parseInt(event.target.value))
        changeValue(parseInt(event.target.value))
    }

    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">// Importance</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Not important"
                />
                <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="Important"
                />
                <FormControlLabel
                    value="5"
                    control={<Radio />}
                    label="Very important"
                />
            </RadioGroup>
        </FormControl>
    )
}
