import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Provider } from 'react-redux';
//
import Drone from './components/Drone';
import FooterCopyright from './components/FooterCopyright';
import store from './redux/store';

//
export default function App () {

  return (
    <div style={{ textAlign: "center" }}>
      <Provider store={store}>
        <Container component="main" maxWidth="xs">
          <Drone />
          <Box mt={8}>
            <FooterCopyright
              urlLink={'https://cv.simonxie.dev'}
              urlText={'Simon Xie'}/>
          </Box>
        </Container>
      </Provider>
    </div>
  );
}
