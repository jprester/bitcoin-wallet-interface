const palette = {
  primary: '#65A028',
  secondary: '#C11E0F',
};

const styles = {
  formContainer: {
    border: '1px solid #ccc',
    width: 300,
  },

  formHeader: {
    paddingTop: 3,
    paddingBottom: 8,
    paddingLeft: 18,
    color: '#ffffff',
    backgroundColor: palette.primary,
    fontWeight: 200,
    margin: 0,
    width: 100,
    height: 14,
  },

  inputsContainer: {
    display: 'block',
    marginLeft: 20,
    marginTop: 12,
  },

  inputControl: {
    display: 'block',
    marginBottom: 20,
  },

  textInput: {
    padding: 3,
    fontSize: 12,
  },

  textInputLabel: {
    fontSize: 11,
  },

  addressField: {
    width: 250,
  },

  amountField: {
    width: 150,
  },

  errorMessage: {
    fontSize: 12,
    color: palette.secondary,
    marginLeft: 1,
    marginTop: 2,
  },

  cssLabel: {
    '&$cssFocused': {
      color: palette.primary,
    },
  },

  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: palette.primary,
    },
  },

  formFooter: {
    display: 'flex',
  },

  transactionValueLabel: {
    fontSize: 11,
    marginLeft: 10,
  },

  transactionNumber: {
    marginLeft: 6,
    fontWeight: 500,
  },

  button: {
    '&:hover': {
      backgroundColor: '#FFFFFF',
      border: '1px solid #CCCCCC',
      color: '#CCCCCC',
    },
    width: 60,
    height: 23,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    padding: 5,
    fontWeight: 200,
    color: palette.primary,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#65A028',
    textTransform: 'capitalize',
    fontSize: 12,
    lineHeight: '11px',
    minWidth: 61,
    minHeight: 0,
    boxShadow: '0px 0px 0px #CCCCCC',
    marginTop: 4,
    marginLeft: 'auto',
    marginRight: 24,
  },

  statusWidgetContainer: {
    marginTop: 30,
  },

  statusPanel: {
    display: 'flex',
    fontSize: 13,
  },

  numberLabel: {
    marginLeft: 'auto',
  },
};

export default styles;
