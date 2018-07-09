import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const WeekTopIndividual = props => {
  return (<Card size='large' 
    key={props.id}>
    <Image size='large' src={props.img} />
    <Card.Content>
      <Card.Header>{props.header}</Card.Header>
      <Card.Meta>
        <span className='date'>From {props.date}</span>
      </Card.Meta>
      <Card.Description>{props.description}</Card.Description>
      <Card.Description>{props.longerDescription}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='like' />
        {props.likes}
      </a>
    </Card.Content>
  </Card>
  );
}

export default WeekTopIndividual