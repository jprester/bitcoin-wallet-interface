import React from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  footerContainer: {
    borderTop: '1px solid #cccccc',
    paddingTop: 10,
    paddingRight: 20,
    marginTop: 40,
  },
  footerText: {
    textAlign: 'right',
    fontSize: 10,
  },
};

function Footer(props) {
  const { classes } = props;

  return (
    <footer className={classes.footerContainer}>
      <p className={classes.footerText}>Made by Janko Prester: janko.prester@gmail.com</p>
    </footer>
  );
}

export default withStyles(styles)(Footer);
