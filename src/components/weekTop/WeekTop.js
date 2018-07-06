import React from 'react';
import { Divider, Header, Card, } from 'semantic-ui-react';

const borderStyle = {

    padding: "15px",
    margin: "15px",
    border: "1px solid #4b4b4b",
    borderRadius: "20px"

}


const WeekTop = props => {
 console.log(props)
  const displayCards = props.weekTop.map(el => {
    return <Card />
  });

  return (
    <div style={borderStyle}>
        {displayCards}
    </div>
  )
};

export default WeekTop