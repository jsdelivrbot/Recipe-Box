import axios from 'axios';
import { proxy, key } from './searchConfig';

async function getRecipe() {

  try {

    const res = await axios(`${proxy}http://food2fork.com/api/get?key=${key}&rId=${this.id}`);
    this.title = res.data.recipe.title;
    this.author = res.data.recipe.publisher;
    this.img = res.data.recipe.image_url;
    this.url = res.data.recipe.source_url;
    this.ingredients = res.data.recipe.ingredients;

  } catch (error) {
    console.log('err: ' + error);
  }
}

export default getRecipe