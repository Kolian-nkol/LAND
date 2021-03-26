// import SearchIcon from '@material-ui/icons/Search';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import InputBase from '@material-ui/core/InputBase';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.35),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.35),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));
import { useState } from "react";
import SearchField from "react-search-field";

import '../../node_modules/react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';


export function Gallery(props) {

  const { output, setOutput } = useState('true');
  const { search, setSearch } = useState("");
  const [value, setValue] = useState()

  const onChange = () => {
    setOutput('false')
    setSearch()
    console.log('search')
    console.log(search)
    console.log(output)
  }
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Eye of god</h2>
          <p>
            Search for information about a person by phone number.
          </p>
          <SearchField
            placeholder="Search..."
            onChange={onChange}
          // classNames="test-class"
          />

          <PhoneInput
            color='black' 
            placeholder="Enter phone number"
            value={value}
            onChange={setValue} />

          {output === '1' ? <div class="well well-lg">INFORMATIONS</div> : null}
        </div>
      </div>
    </div>
  )
}
