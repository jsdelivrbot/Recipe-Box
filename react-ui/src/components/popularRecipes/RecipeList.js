import React from "react";
import { Card, Image } from "semantic-ui-react";

const RecipeList = props => {
  const recipeListStyle = {
    padding: "15px",
    margin: "15px",
    border: "3px solid #4b4b4b",
    borderRadius: "20px",
    width: '400px'
  };
  let recipeList;
  if (props.popularRecipes !== undefined) {
    recipeList = props.popularRecipes.map((el, i) => {
      let color;
      if (i % 2 === 0) {
        color = "red";
      } else {
        color = "blue";
      }
      const id = el.id;

      return (
        <Card className="popRecipes" key={el.id} fluid color={color}>
          <Card.Content>
            <Card.Header>{el.header}</Card.Header>
            <Card.Description>
              {el.description}
              <Image
                onClick={e => props.addFav(e, id)}
                className="popHeartStyle"
                size="mini"
                src="https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/jV5Y-heart.png"
              />
            </Card.Description>
          </Card.Content>
        </Card>
      );
    });
  }

  return (
    <div className="recipeList" style={recipeListStyle}>
      {recipeList}
    </div>
  );
};
export default RecipeList;
