  
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';

//icons
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import BusinessIcon from '@material-ui/icons/Business';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PolicyIcon from '@material-ui/icons/Policy';



const preventDefault = (event) => event.preventDefault();

export const mainListItems = (

  <div>  
         <ListItem button component="a"  href="dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
   
    <ListItem button component="a" href="portadores">
          <ListItemIcon>
        < VerifiedUserIcon  />
      </ListItemIcon>
      <ListItemText primary="Portadores" />
    </ListItem>
    <ListItem button component="a" href="empresas">
      <ListItemIcon>
        <BusinessIcon />
      </ListItemIcon>
      <ListItemText primary="Empresas"  />
    </ListItem>
    <ListItem button component="a" href="ambientes" >
      <ListItemIcon>
        <EditLocationIcon />
      </ListItemIcon>
      <ListItemText primary="Ambientes" />
    </ListItem>
    <ListItem button component="a" href="controladoras">
      <ListItemIcon>
        <ControlPointIcon />
      </ListItemIcon>
      <ListItemText primary="Controladoras"  />
    </ListItem>
    <ListItem button component="a" href="politicaAcesso" >
      <ListItemIcon>
        <PolicyIcon />
      </ListItemIcon>
      <ListItemText primary="Politica de Acessos"  />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
  
    <ListItem button>
      <ListItemIcon>
        <PeopleAltIcon />
      </ListItemIcon>
      <ListItemText primary="Usuarios" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PermIdentityIcon />
      </ListItemIcon>
      <ListItemText primary="Permissoes" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon/>
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
  </div>
);