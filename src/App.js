import {Provider} from 'react-redux';
import {createTheme} from '@material-ui/core';
import {blue} from '@material-ui/core/colors';
import {ThemeProvider} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import store from './store';
import CardBox from './pages/CardBox';
import NewCardForm from './components/NewCardForm';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});
const App = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h5">Welcome to the Leitner Box</Typography>
            </Toolbar>
          </AppBar>
          <Container>
            <CardBox />
          </Container>
          <Container>
            <NewCardForm />
          </Container>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
