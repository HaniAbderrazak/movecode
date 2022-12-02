import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import vi from './images/vi.jpg'; 
  
const Footer = () => {
  return (
    
    <Box>
        
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        GeeksforGeeks: A Computer   Science Portal for Geeks
        <button>TOP</button>
      </h1>
      <img src={vi} className="App-logo" alt="logo" />
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="https://www.amazon.com/Unisex-Wednesday-Addams-T-Shirt-Halloween/dp/B08CD8KNGW">Aim</FooterLink>
            <FooterLink href="https://www.flashscore.com">Vision</FooterLink>
            <FooterLink href="https://www.topnet.tn/">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="https://www.leagueoflegends.com/fr-fr/">Writing</FooterLink>
            <FooterLink href="https://www.friv5online.com/fr">Internships</FooterLink>
            <FooterLink href="https://fivem.net/">Coding</FooterLink>
            <FooterLink href="https://www.google.com/maps/@35.815806,10.5971471,12z">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="https://www.bet365.com/#/HO/">Uttar Pradesh</FooterLink>
            <FooterLink href="https://igorizraylevych.medium.com/how-to-validate-forms-in-react-native-a-personal-approach-50e19b27355"> Ahemdabad</FooterLink>
            <FooterLink href="https://www.google.com/search?q=south+africa&sxsrf=ALiCzsZUUSdxMYR5Q3u4W1kMXqp8cSlU6g%3A1669941274999&ei=GkiJY9nMPLadkdUPxZKKwA0&gs_ssp=eJzj4tDP1TfIqMqpMmD04inOLy3JUEhMK8pMTgQAYAcIFg&oq=SOUTH&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgBMgsILhCABBDUAhDLATILCC4Q1AIQgAQQywEyCwguEIAEENQCEMsBMggILhCABBDLATIICC4QgAQQywEyCwguEIAEENQCEMsBMgsILhCABBCxAxCDATIICC4QgAQQywEyCAguEIAEEMsBMgsILhCABBDUAhDLAToKCAAQRxDWBBCwAzoKCC4Q1AIQsAMQQzoMCC4QyAMQsAMQQxgBOg8ILhDUAhDIAxCwAxBDGAE6BwgjEOoCECc6BwguEOoCECc6BAguECc6BAgjECc6BAguEEM6CggAELEDEIMBEEM6CwgAEIAEELEDEIMBOggIABCABBCxAzoRCC4QgAQQsQMQgwEQxwEQ0QM6BwguENQCEEM6BQguEIAEOggILhCABBCxAzoFCAAQgAQ6DgguEIAEELEDEIMBENQCOg4ILhCABBCxAxDHARCvAUoECEEYAEoECEYYAVDxCVifOGDzSGgEcAF4AIABwwGIAfIEkgEDMC41mAEAoAEBsAEKyAERwAEB2gEGCAEQARgI&sclient=gws-wiz-serp">Indore</FooterLink>
            <FooterLink href="https://fr.wikipedia.org/wiki/Sri_Lanka">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>     Social Media</Heading>
            <FooterLink href="https://www.youtube.com">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://twitter.com">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                         Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.facebook.com/">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;