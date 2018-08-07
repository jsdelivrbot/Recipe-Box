import React from "react";
import { Grid, Image, Divider } from "semantic-ui-react";
import Title from "../../components/Title";
import Auth from "./Auth";

const AuthPage = props => {
  return (
    <div className="backgroundPages">
      <Grid celled stackable>
        <Grid.Row>
          <Grid.Column only="computer" width={2}>
            <Image
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
          <Grid.Column width={5} />
          <Grid.Column width={7}>
            <Auth />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default AuthPage;
