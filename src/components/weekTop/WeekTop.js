import React from 'react';
import { Divider, Header, Card, Image, Icon} from 'semantic-ui-react';

const borderStyle = {
    padding: "15px",
    margin: "15px",
    border: "1px solid #4b4b4b",
    borderRadius: "20px",
    display: "flex"
};


const WeekTop = props => {
 console.log(props)
  const displayCards = props.weekTop.map(el => {
    return <Card size='tiny'
    key={el.id}>  
        <Image  size='small'src={el.img} />
        <Card.Content>
          <Card.Header>{el.header}</Card.Header>
          <Card.Meta>
            <span className='date'>From {el.date}</span>
          </Card.Meta>
          <Card.Description>{el.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
          <Icon name='like' />
            {el.likes}
      </a>
        </Card.Content>
      </Card>
  });

  return (
    <div style={borderStyle}>
        {displayCards}
    </div>
  )
};

export default WeekTop