import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import * as React from "react";
import {TextField} from "@material-ui/core";
import {Button, ButtonGroup} from "@mui/material";
import Display from "./Display";
import axios from "axios";
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
    const [chatLog,setChatLog] = React.useState<string| null>('');
    const [response,setResponse] = React.useState<string[]|null>([]);
    const [button,setButton] = React.useState<string|null>();
    const state ={
        button:''
    }
    //create a function to handle the change event
    const responseFunction=async()=>{
        console.log('text')

        const response = await axios.post('http://localhost:3080', {
            message: value
        });
        console.log(response);

        setResponse((responses: any) => [...responses, response.data.message.choices[0].text]);
    }
    const responseFunctionImages=async()=>{
        console.log('image')

        const response = await axios.post('http://localhost:3080/image', {
            message: chatLog
        });
        console.log(response);

       setResponse((responses: any) => [...responses, response.data.message.choices[0].text]);
    }
    //create a function to handle the submit event and clear the input field
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
  event.preventDefault();

      //  console.log(event.submitid);
        setChatLog(value);
    if( button === 'text') {
        responseFunction().then(r => console.log(r));
        //clear the input field
    }if( button === 'image'){
        responseFunctionImages().then(r => console.log(r));
    }

    }
    //create a function to clear the input field
    const clearFields = (event:React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        setValue('');
        setChatLog('');
        setResponse([]);
    }
//create a something to use the same ID on the front end and back end
const id = React.useId();
    return (
        <form  onSubmit={handleSubmit}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box
                    sx={styles.form} >
                    <Display chatLog={chatLog} response={response} button={state.button}/>
                    <TextField id={id} label="Ask Your Questions...." variant="filled"  autoFocus={true}
                    color="secondary" fullWidth={true} multiline={true} onChange={(e)=>setValue(e.target.value)} value={value}   />

                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button variant="contained" color="primary" type={'submit'} name='text' onClick={()=>(setButton('text'))} >Text</Button>
                    <Button variant="contained" color="secondary" type={'reset'} onClick={clearFields} >Clear</Button>
                        <Button variant="contained" color="error" type={'submit'} id='image' onClick={()=>(setButton('image'))}  >Image</Button>
                    </ButtonGroup>
                </Box>
            </Container>
        </form>
    )
}
export default Form