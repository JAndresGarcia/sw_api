import React, { Component } from "react";
import Particles from "react-particles-js";

class Canvas extends Component {
  state = { width: "0px", height: "0px" };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`
    });
  };
  render() {
    const { width, height } = this.state;
    console.log(width, height);
    return (
      <Particles
        {...this.state}
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "star",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 3
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
              }
            },
            size: {
              value: 0.4,
              random: true,
              anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: false,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 133.99274002972194,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3
              },
              repulse: {
                distance: 400,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          }
        }}
      />
    );
  }
}

export default Canvas;