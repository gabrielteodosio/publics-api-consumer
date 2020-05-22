import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import styles from './login.module.less';

function LoginPage() {
  function handleButtonClick(e) {
    e.preventDefault();
  }

  return (
    <Grid container component="main" className={styles.root}>
      <CssBaseline/>
      <Grid item xs={false} sm={4} md={7} className={styles.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={styles.paper}>
        <Button
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          className={styles.submit}
          onClick={handleButtonClick}
        >
          <span>Entrar</span>
        </Button>
      </Grid>
    </Grid>
  )
}

export default LoginPage;
