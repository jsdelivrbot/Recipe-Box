import React from "react";
import { Grid, Image, Divider, Header, Card } from "semantic-ui-react";
import Title from "../../components/Title";

export default class WhoWeAre extends React.Component {
  state = {
    team: [
      {
        id: 0,
        name: "Oliver Yates",
        role: "Developer",
        description: "Makes all the gears and cogs, and keeps them well oiled",
        quote: "Don't worry it might never happen!",
        img:
          "https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/TN1m-myAvatar%20(1).png"
      },
      {
        id: 1,
        name: "James Steevenson",
        role: "Chef",
        description: "Comes up with all the good ideas",
        quote: "Time for a drink",
        img:
          "https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/bkwC-myAvatar.png"
      }
    ]
  };

  render() {
    const cardsStyle = {
      display: "flex",
      margin: "60px"
    };

    const individualCardStyle = {
      margin: "40px"
    };

    const team = [...this.state.team];
    const displayCards = team.map(teamMember => {
      return (
        <Card
          size="small"
          style={individualCardStyle}
          image={teamMember.img}
          header={teamMember.name}
          meta={teamMember.role}
          description={teamMember.description}
          extra={teamMember.quote}
          key={teamMember.id}
        />
      );
    });

    return (
      <div>
        <Grid celled stackable>
          <Grid.Row>
            <Grid.Column only="computer" width={2}>
              <Image
                className="icon"
                src="https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/xeT5-soup.png"
                size="large"
              />
            </Grid.Column>
            <Grid.Column only="computer" width={12}>
              <Title />
              <Divider />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={2} />
            <Grid.Column width={12}>
              <Header as="h1">The Team</Header>
              <div style={cardsStyle}> {displayCards} </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2} />
            <Grid.Column width={12}>
              <p>
                Our aim is to provide you with an easy way to get high-quality
                dishes wherever you are{" "}
              </p>
              <p>
                We are two passionate guys trying to make your life easier!{" "}
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
