import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Icon } from "semantic-ui-react";

const borderStyle = {
  padding: "15px",
  margin: "15px",
  border: "1px solid #4b4b4b",
  borderRadius: "20px",
  display: "flex"
};

const cardStyle = {
  margin: "4px",
  cursor: "pointer"
};

const WeekTop = props => {
  const displayCards = props.weekTop.map(el => {
    return (
      <Card size="tiny" style={cardStyle} key={el.id}>
        <Link to={"/top" + el.id}>
          <div>
            <Image size="small" src={el.img} />{" "}
          </div>
        </Link>
        <Card.Content>
          <div>
            <Link to={"/top" + el.id}>
              <Card.Header>{el.header}</Card.Header>
              <Card.Meta>
                <span className="date">From {el.date}</span>
              </Card.Meta>
              <Card.Description>{el.description}</Card.Description>
            </Link>
          </div>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="like" />
            {el.likes}
          </a>
        </Card.Content>
      </Card>
    );
  });

  return <div style={borderStyle}>{displayCards}</div>;
};

export default WeekTop;
