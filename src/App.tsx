import React from "react";
import styled from "@emotion/styled";
import {
  Button,
  Divider,
  Link,
  Text,
  tokens,
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
  position: "relative",
  marginBottom: 36,
});

const ContactContainer = styled.div({
  padding: 8,
});

const Banner = styled.img({
  width: "100%",
});
const HeadShot = styled.img({
  position: "absolute",
  left: 12,
  bottom: -36,
  borderRadius: "50%",
  border: `solid 4px ${tokens.colorNeutralBackground1}`,
  height: 100,
  width: 100,
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
          <Text weight="semibold" size={400}>
            Joe Durnford
          </Text>
          <Divider
            appearance="strong"
            style={{ display: "inline-block", margin: '0 4px 0 4px' }}
            vertical
          />
          <Text weight="regular" size={400}>
            Chairman
          </Text>
        </div>
        <div>
          <Text weight="medium" size={300}>
            JD Merit & Company
          </Text>
        </div>

        <div>
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
