

import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(10),
    
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  leftSidebar:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    // justifyContent: 'space-around',
    

  },
  leftSidebar_top:{

  },
  leftSidebar_bottom:{
    marginTop: 10,
    
  },
  sum:{
    marginTop: 20,

  },
  
 

 
}));
