import React from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";
import slider1 from "../../../assets/images/slider1.jpeg";
import slider2 from "../../../assets/images/slider2.jpeg";
import slider3 from "../../../assets/images/slider3.jpg";
import slider4 from "../../../assets/images/slider4.jpg";
import slider5 from "../../../assets/images/slider5.jpg";
import "../../../assets/css/header.css";

export default class HomePageCarousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
    rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
      <div className="wisereads-logo">
        <Row>
          <Col span={12} style={{ paddingTop: "20px" }}>
            <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
              version={4}
            >
              <div style={{ height: 400 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                  src={slider1}
                />

                <div className="carousel-caption">Image</div>
              </div>
              <div style={{ height: 400 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                  src={slider2}
                />

                <div className="carousel-caption">Image</div>
              </div>
              <div style={{ height: 400 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                  src={slider3}
                />

                <div className="carousel-caption">Image</div>
              </div>
              <div style={{ height: 400 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                  src={slider4}
                />

                <div className="carousel-caption">Image</div>
              </div>
              <div style={{ height: 400 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                  src={slider5}
                />

                <div className="carousel-caption">Image</div>
              </div>
            </RBCarousel>
          </Col>
        </Row>
      </div>
    );
  }
}

/**
 *  Boostrap Component
 */
const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
  <div className={`col-${props.span}`} style={props.style}>
    {props.children}
  </div>
);
