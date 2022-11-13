import React from "react";
import styled from "@emotion/styled";
import {
  Body1,
  Button,
  Divider,
  Link,
  Subtitle1,
  Title3,
} from "@fluentui/react-components";
import { ArrowDownload24Regular } from "@fluentui/react-icons";

import HeadShotImage from "./resources/images/headshot.jpg";
import BannerImage from "./resources/images/banner.jpg";

const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: 420,
  minWidth: 320,
});

const BannerContainer = styled.div({
  position: 'relative',
  marginBottom: 36
});

const ContactContainer = styled.div({
  padding: 8
})

const Banner = styled.img({
  width: '100%'
});
const HeadShot = styled.img({
  position: 'absolute',
  left: 12,
  bottom: -36,
  borderRadius: '50%',
  border: 'solid 4px white',
  height: 100,
  width: 100
});

function App() {
  return (
    <Container>
      <BannerContainer>
        <Banner alt="" src={BannerImage} />
        <HeadShot alt="" src={HeadShotImage} />
      </BannerContainer>
      <ContactContainer>
        <div>
          <Title3>Joe Durnford</Title3> <Divider appearance="strong" style={{ display: 'inline-block' }} vertical /> <Body1>Chairman</Body1>
        </div>
        <div>
          <Subtitle1>JD Merit & Company</Subtitle1>
        </div>
        <div>
          
        </div>
        <div>
          {/* <Call24Filled /> */}
          <a href="tel:+13038080256">(303)808-0256</a>
        </div>
        <Link href="https://www.dropbox.com/s/vvwp4aoxg5wp2mt/joe.vfc?dl=1">
          <Button
            href="https://www.dropbox.com/s/vvwp4aoxg5wp2mt/joe.vfc?dl=1"
            icon={<ArrowDownload24Regular />}
          />
        </Link>
      </ContactContainer>
    </Container>
  );
}

export default App;
