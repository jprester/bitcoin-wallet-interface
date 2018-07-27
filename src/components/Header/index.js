import React from 'react';

import { withStyles } from '@material-ui/core/styles';

// Styles
const styles = {
  walletText: {
    display: 'flex',
    alignItems: 'center',
  },

  adressCode: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
};

function Header(props) {
  const { classes } = props;

  return (
    <div className="app-header">
      <div className="row">
        <div className="content-block block-size-1-3">
          <h1 className="title">Bitcoin Wallet UI</h1>
        </div>
        <div className={`content-block block-size-2-3 ${classes.walletText}`}>
          <div>
            Wallet Address:
            <span className={classes.adressCode}>
              1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzb
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Header);
