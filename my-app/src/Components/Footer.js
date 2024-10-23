import { Container } from "react-bootstrap";
const Footer = () => {
    return ( 
        <>
       <Container fluid style={{backgroundColor: "#212529", color: "#fff"}}>
          <Container className="d-flex justify-content-center p-3">
            <p>
                Web Developer Blog
            </p>
          </Container>
       </Container>
        </>
     );
}
 
export default Footer;