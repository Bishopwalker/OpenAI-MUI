import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {deepPurple} from "@mui/material/colors";
import {Avatar, createStyles} from "@mui/material";
import './Display.css'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const styles={
    card : {
        minWidth: 500, maxWidth:500,minHeight:350, maxHeight:350,  overflow:'scroll'
    },
    avatar : {
        bgcolor: deepPurple[500], position:'fixed', left:295
    },
    typography : {
        fontSize: 14,minHeight:30, maxHeight:30,maxWidth:400, overflow:'scroll',margin:'auto',border:'1px solid black',borderRadius:10
},
    typography1 : {
        fontSize: 14,minHeight:100, maxHeight:60,maxWidth:400, overflow:'scroll',margin:'auto'
        ,border:'1px solid black',borderRadius:10,left:300
    }
}
type Props = {
    chatLog: string | null,
    response: string[] | null,
    button: string | null,
}
export default function Display({chatLog, response,button}: Props) {


    return (
        <Card sx={styles.card} variant={'outlined'}>
            <CardContent>
                <div className='div1'>
                <Avatar sx={styles.avatar}>OP</Avatar>
                <Typography sx={styles.typography} color="text.secondary"   gutterBottom>
                    {chatLog}
                </Typography>
                </div>
                <br />
                <Typography variant="h5" component="div">
                    The{bull}All{bull}No{bull}Ing
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    OpenAI GPT-3 Text Generator
                </Typography>
                <Typography sx={styles.typography1} variant="body2">
                    {button=='text'?response:<a>{response}</a>}
                    <br />

                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Image instead of Text?</Button>
            </CardActions>
        </Card>
    );
}