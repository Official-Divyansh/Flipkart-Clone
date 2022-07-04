
import {makeStyles , InputBase, alpha} from  '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
   
    search: {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: '#fff',
      marginLeft: 30,
      width: '30%',
      display: 'flex',
      color: 'black'
    },
    searchIcon: {
      padding: 5,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'blue',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),

    },
    
  }));
function SearchBar() {
    const classes = useStyles();
    return (
        <div className={classes.search}>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
      </div>
    )
}
export default SearchBar