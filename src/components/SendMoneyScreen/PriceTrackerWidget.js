import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { displayFiatValue } from '../../utils/utils';
import styles from './_styles_SendMoneyScreen';


const PriceTrackerWidget = (props) => {
  const { classes } = props;

  return (
    <div className={classes.statusWidgetContainer}>
      <h2>Current BTC price</h2>
      <div className={classes.statusPanel}>
        <p className={classes.textLabel}> BTC/USD </p>
        <p className={classes.numberLabel}> {displayFiatValue(props.btcPrice)} </p>
      </div>
    </div>
  );
};

export default withStyles(styles)(PriceTrackerWidget);
