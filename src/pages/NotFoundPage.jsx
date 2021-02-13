import React from 'react'
import Grid from '@material-ui/core/Grid'
import { IconContext } from 'react-icons'
import Link from '@material-ui/core/Link'
import { Link as LinkRouter } from 'react-router-dom'
import { WiNightStormShowers } from 'react-icons/wi'
import Typography from '@material-ui/core/Typography'

const NotFoundPage = () => {
  return (
    <Grid container className="full" direction="column" justify="center">
      <div className="highlight">
        <Grid item container xs={12} justify="center" alignItems="center">
          <Grid item>
            <IconContext.Provider value={{size: '6em'}}>
              <WiNightStormShowers />
            </IconContext.Provider>
          </Grid>
          <Grid item container direction="column" justify="center" alignItems="center">
            <Typography variant="h4" color="inherit">
              404 | La página no existe
            </Typography>
          </Grid>
          <Link component={LinkRouter} to="/main" color="inherit" aria-label="menu">
            Volver al inicio
          </Link>
        </Grid>
      </div>
    </Grid>
  )
}

export default NotFoundPage
