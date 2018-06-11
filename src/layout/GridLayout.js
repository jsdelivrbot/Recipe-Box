import React from 'react';

const GridLayout = props => (
  <div>
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={3}>
          <Image src='/assets/images/wireframe/image.png' />
        </Grid.Column>
        <Grid.Column width={13}>
          <Image src='/assets/images/wireframe/centered-paragraph.png' />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={3}>
          <Image src='/assets/images/wireframe/image.png' />
        </Grid.Column>
        <Grid.Column width={10}>
          <Image src='/assets/images/wireframe/paragraph.png' />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src='/assets/images/wireframe/image.png' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default GridLayout