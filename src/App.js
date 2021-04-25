import './App.css';

import CurrentsTable from './components/CurrentsTable'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles/style'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';



function App() {
  const classes = useStyles();
  return (
    <div className="App">

      <Container className={classes.root} maxWidth="lg">
        <Grid container spacing={3}>

          <Grid item xs={4} >
            <Paper className={classes.paper}>
              <div className={classes.leftSidebar} >
                <div className={classes.leftSidebar_top}>
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Curr</InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={10}

                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>


                <div className={classes.leftSidebar_bottom}>
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Curr</InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={10}
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className={classes.sum}>
                  <Typography variant="h4" component="h2">
                    60,3434234 Руб.
                  </Typography>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>

            <CurrentsTable/>



              </Paper>
          </Grid>

        </Grid>
      </Container>

    </div>
  );
}

export default App;

