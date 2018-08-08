import axios from "axios";
import { proxy, key } from "./searchConfig";

async function getRecipe(id) {
  try {
    const result = await axios(
      `${proxy}http://food2fork.com/api/get?key=${key}&rId=${id}`
    );
    return result;
  } catch (error) {
    return error;
  }
}

export default getRecipe;
