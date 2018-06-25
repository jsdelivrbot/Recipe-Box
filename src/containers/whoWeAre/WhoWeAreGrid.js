import React from 'react';
import { Grid, Image, Divider, Header, Search, Card } from 'semantic-ui-react';
import Title from '../../components/Title';
import SearchRecipes from '../../components/search/Search';

export default class WhoWeAre extends React.Component {
  state = {
    team: [{
      name: 'Oliver Yates',
      role: 'Developer',
      description: 'Makes all the gears and cogs, and keeps them well oiled',
      quote: 'Don\'t worry it might never happen!'
    }, {
      name: 'James Steevenson',
      role: 'Chef',
      description: 'Comes up with all the good ideas',
      quote: 'Time for a drink'
    }]
  }


  render() {

  const teamTitle = <Header as='h2'>The amazing team</Header>;
  const team = [...this.state.team];
  const displayCards = team.map(teamMember => {
    return ( <Card
      image='/assets/images/avatar/large/elliot.jpg'
      header={teamMember.name}
      meta={teamMember.role}
      description={teamMember.description}
      extra={teamMember.quote}
    />
    )
  })

    return (
      <div>
        <Grid celled stackable>
          <Grid.Row>
            <Grid.Column width={2}>
              <Image className='icon' src='https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/xeT5-soup.png' size='large' />
            </Grid.Column>
            <Grid.Column width={12}>
              <Title />
              <Divider />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              <SearchRecipes
                searchHandleResultSelect={this.props.searchHandleResultSelect}
                handleSearchChange={this.props.handleSearchChange}
                searchValue={this.props.searchValue}
                searchResults={this.props.searchResults}
                searchID={this.props.searchID}
                searchIsLoading={this.props.searchIsLoading}
                searchOnClickHandler={this.props.searchOnClickHandler} />
            </Grid.Column>
          <Grid.Column width={12}>
               <teamTitle />
               <displayCards />
          </Grid.Column>        
          </Grid.Row>        
        </Grid>
      </div>
    )
  }
}