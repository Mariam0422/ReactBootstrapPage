import Slider from "../Components/Slider";
import Jambotron from "../Components/Jumbotron";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ocean from "../ocean.jpg";

const Home = () => {
  return (
    <>
      <Slider />
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }} className="mt-3">
              <Card.Img variant="top" src={ocean} />
              <Card.Body>
                <Card.Title>WebDev Blog</Card.Title>
                <Card.Text>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="mt-3">
              <Card.Img variant="top" src={ocean} />
              <Card.Body>
                <Card.Title>WebDev Blog</Card.Title>
                <Card.Text>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="mt-3">
              <Card.Img variant="top" src={ocean} />
              <Card.Body>
                <Card.Title>WebDev Blog</Card.Title>
                <Card.Text>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Jambotron />
      <Container className="mt-4">
        <Row>
          <Col xs={12} md={6}>
            <img src={ocean} style={{ height: "40vh" }} alt="ocean" />
          </Col>
          <Col xs={12} md={6}>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
