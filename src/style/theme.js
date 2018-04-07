import { createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';

export default createMuiTheme({
  palette: {
    primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
//   overrides: {
//     MuiButton: {
//       root: {
//         color: 'white',
//         '&:hover': {
//           backgroundColor: 'purple'
//         }
//       }
//     }
//   }
});