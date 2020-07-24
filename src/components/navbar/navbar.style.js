import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    nav: {
        
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navLeft: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        gridGap: 20,
        alignItems: 'center'
    },
    navRight: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    toggleBtn: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'block'
        },
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
      
    },
    navLinks: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        width: 'calc(100% - 48px)',
        height: 'auto',
    },
    ml2: {
        marginLeft: theme.spacing(4)
    },

    search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },
    searchToggle: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  }

}));

export default useStyles;