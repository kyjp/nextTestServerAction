'use client'
import { Box, Button, Container, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import SendIcon from "@mui/icons-material/Send"
import React from 'react'

const Sample = () => {
  return (
    <Container maxWidth="md">
        <p>test</p>
        <Box sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
            border: "1px dashed gray"
        }}>
            <p>test2</p>
            <p>test3</p>
            <Typography
                variant='h1'
                color={'red'}
            >
                test4
            </Typography>
            <TextField
                id="outlined"
                label="outlined"
                variant="outlined"
                name="outlined"
                defaultValue={"test"}
                onChange={e => console.log(e.target.value)}
            />
            <Box
                sx={{
                    width: "100%",
                    mt: 2
                }}
            >
                <InputLabel
                    id="demo-sample-select-label"
                >
                    年齢
                </InputLabel>
                <Select
                    labelId="demo-sample-select-label"
                    id="demo-simple-select"
                    label="Age"
                    name="age"
                    defaultValue={10}
                    fullWidth
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormLabel
                    id="demo-radio-buttons-group-label"
                >
                    Gender
                </FormLabel>
                <RadioGroup
                    aria-labelledby='demo-radio-buttons-group-label'
                    defaultValue='female'
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="female" />
                    <FormControlLabel value="male" control={<Radio />} label="male" />
                    <FormControlLabel value="other" control={<Radio />} label="other" />
                </RadioGroup>
                <TextField id="outline-basic" label="コメント" variant="outlined" fullWidth sx={{mt: 2}} name="comment"/>
                <Button variant="contained" sx={{mt: 2}} endIcon={<SendIcon />} fullWidth>
                    送信
                </Button>
            </Box>
        </Box>
    </Container>
  )
}

export default Sample