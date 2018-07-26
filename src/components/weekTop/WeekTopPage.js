import React from "react";
import { Grid, Image, Divider, Card, Icon } from "semantic-ui-react";
import Title from "../Title";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../../store/actions/index";

class TopWeekPage extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      this.props.onInitTopWeekIndiv(id);
    }
  }

  render() {
    return (
      <div>
        <Grid celled stackable>
          <Grid.Row>
            <Grid.Column width={2}>
              <Image
                className="icon"
                src="https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/xeT5-soup.png"
                size="large"
              />
            </Grid.Column>
            <Grid.Column width={12}>
              <Title />
              <Divider />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={6} />
            <Grid.Column only="mobile" width={3} />

            <Grid.Column width={8}>
              <Card size="large" key={this.props.cardData.id}>
                <Image size="large" circular src={this.props.cardData.img} />
                <Card.Content>
                  <Card.Header>{this.props.cardData.header}</Card.Header>
                  <Card.Meta>
                    <span className="date">
                      From {this.props.cardData.date}
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    {this.props.cardData.description}
                  </Card.Description>
                  <Card.Description>
                    {this.props.cardData.longerDescription}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    {" "}
                    <Icon name="like" />
                    {this.props.cardData.likes}
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={3} />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column only="computer" width={3} />
            <Grid.Column width={11}>
              <Divider />
            </Grid.Column>
            <Grid.Column width={1} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardData: state.topWeek.topWeekIndiv
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitTopWeekIndiv: id => dispatch(actionCreators.initTopWeekIndiv(id))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TopWeekPage)
);
