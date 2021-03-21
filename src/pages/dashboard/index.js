import React, { useEffect,useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import imgDash from '../../assets/imgs/seg1.jpg'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

import MenuSuperior from '../../components/menuSuperior';
import Footer from '../../components/footeradmin'
import api from '../../Context/api';
//const drawerWidth = 240;



import {Context} from '../../Context/AuthContext'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
        
    title: {
      flexGrow: 1,
    },
       
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fundo:{
        width: '70vw',
        height:'80vh',
    }
    
  }));



export default function Dashboard() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const {handleLogout} = useContext(Context)

    useEffect(()=>{
      (async ()=>{
        const {data} = await api.get('admin/lista')

        console.log(data)
      })()
    },[])
  
  return (
    <div className={classes.root}>
    <CssBaseline />
      <MenuSuperior title={"Dashboard"} />
    
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>

              <img className={classes.fundo} src={imgDash}/>
        
          
            
          </Grid>
          <Box pt={4}>            
                <Footer/>
                <button type="button" onClick={handleLogout}>sair</button>
          </Box>
        </Container>
      </main>
    </div>
  );
}
