import { Carousel } from "react-bootstrap";
import oceanOne from "../ocean.jpg";
import oceanTwo from "../ocean2.jpg";
import oceanThree from "../ocean3.jpg";
const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item style={{height: "90vh"}}>
        <img className="d-block w-100" src={oceanOne} alt="ocean" />
        <Carousel.Caption>
          <h3>Beautiful ocean background</h3>
          <p>Do work very Quickly</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: "90vh"}}>
        <img className="d-block w-100" src={oceanTwo} alt="ocean" />
        <Carousel.Caption>
          <h3>Beautiful ocean background</h3>
          <p>Do work very Quickly</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: "90vh"}}>
        <img className="d-block w-100" src={oceanThree} alt="ocean" />
        <Carousel.Caption>
          <h3>Beautiful ocean background</h3>
          <p>Do work very Quickly</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
