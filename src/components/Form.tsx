import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import * as React from "react";
import {TextField} from "@material-ui/core";
import {Button, ButtonGroup} from "@mui/material";
import Display from "./Display";
//add type for ref prop

//create a variable to hold styles
const styles = {
    form: {
        bgcolor: '#c1c7cc', height: '90vh',
        width: '60vw', display: 'flex',
        alignItems: 'center',
        borderRadius:'10px', color: 'white', fontSize: '2rem',
        flexDirection: 'column', justifyContent: 'space-evenly'
    }
}

const Form = ( ) => {

//create a ref to access the form element
const ref = React.useRef<HTMLFormElement>(null);

//Use this React 18 hook to sycnronize the state with the DOM
    //create a state variable to hold the value of the input field
    const [value,setValue] = React.useState<string|null>('');
    const [chatLog,setChatLog] = React.useState<string>('');
    const [response,setResponse] = React.useState<string[]|null>([]);
    //create a function to handle the change event

    //create a function to handle the submit event and clear the input field
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(value);
        //clear the input field
        setChatLog(value?value:'');
setValue('');
    }
    //create a function to clear the input field
    const clearFields = (event:React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        setValue('');
        setChatLog('');
    }
//create a something to use the same ID on the front end and back end
const id = React.useId();
    return (
        <form  onSubmit={handleSubmit}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box
                    sx={styles.form} >
                    <Display chatLog={chatLog} response={response}/>
                    <TextField id={id} label="Ask Your Questions...." variant="filled"  autoFocus={true}
                    color="secondary" fullWidth={true} multiline={true} onChange={(e)=>setValue(e.target.value)} value={value}   />

                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button variant="contained" color="primary" type={'submit'} >Text</Button>
                    <Button variant="contained" color="secondary" type={'reset'} onClick={clearFields} >Clear</Button>
                        <Button variant="contained" color="error" type={'submit'} onClick={clearFields} >Image</Button>
                    </ButtonGroup>
                </Box>
            </Container>
        </form>
    )
}
export default Form