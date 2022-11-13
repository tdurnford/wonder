import React from 'react';
import styled from '@emotion/styled';
import { Subtitle1, Subtitle2, Title3 } from '@fluentui/react-components';
import { Call24Filled } from '@fluentui/react-icons';

import './App.css';

import HeadShotImage from './resources/images/headshot.jpg';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  maxWidth: 420,
  minWidth: 320
});

const HeadShot = styled.img({ 
});

function App() {

  return (
    <Container>
      <HeadShot alt="" src={HeadShotImage} />
      <div>
        <div>
          <Title3>Joe Durnford</Title3>
        </div>
        <div>
          <Subtitle1>JD Merit & Company</Subtitle1>
        </div>
        <div>
          <Subtitle2>Chairman</Subtitle2>
        </div>
        <div>
          {/* <Call24Filled /> */}
          <a href="tel:+13038080256">(303)808-0256</a>
        </div>
        <a href="https://www.dropbox.com/s/vvwp4aoxg5wp2mt/joe.vfc?dl=1">Contact</a>
      </div>
    </Container>
  );
}

export default App;
