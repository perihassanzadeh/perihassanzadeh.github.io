import React from "react";
import Card from "react-bootstrap/Card";
import { BiTennisBall, BiWorld } from "react-icons/bi";
import { BsSpotify, BsLightbulb } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Peri Hassanzadeh </span>
            from <span className="purple"> Pittsburgh, Pennsylvania.</span>
            <br /> I am an embedded software engineer at <span className="purple">Gecko Robotics</span>!
            <br />
            I specialize in <span className="purple">firmware</span> development for robotic solutions. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <BiTennisBall /> Staying Active (Lifting, Tennis, Hiking)
            </li>
            <li className="about-activity">
              <BsSpotify /> Reading and Listening to Podcasts
            </li>
            <li className="about-activity">
              <BiWorld /> Traveling and Exploring New Cultures
            </li>
            <li className="about-activity">
              <BsLightbulb /> Learning about Space Technology and Embedded Systems
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The greater the difficulty, the more the glory in surmounting it."{" "}
          </p>
          <footer className="blockquote-footer">Epicurus</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
