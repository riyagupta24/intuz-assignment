import React, { useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function CustomizedSnackbars(props) {
    const { openSnackbar, variantIcon, closeSnackabr, message } = props;
    const classes = useStyles();
    
    useEffect(()=>{
        console.log("-----------------check", openSnackbar)

    }, [openSnackbar])
    
    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{ vertical:'top', horizontal:'center' }}
                open={openSnackbar}
                color={variantIcon}
                onClose={closeSnackabr}
                message={message}
                key={1}
                autoHideDuration={6000}
            />
        </div>
    );
}

export default CustomizedSnackbars;