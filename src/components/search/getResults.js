import axios from 'axios';
import {proxy, key} from './searchConfig';

 async function getResults(query) {
  try {
    const result = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = result.data.recipes;
    return recipes;
  } catch (error) {
    console.log(error);
  }

}

