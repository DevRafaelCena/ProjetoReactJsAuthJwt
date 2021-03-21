
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default  function Footeradmin() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © Cena Tecnologia   '}
        <Link color="inherit" href="">
          Acesse!
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }