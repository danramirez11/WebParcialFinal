import { useDispatch } from "react-redux";
import { Poem, PoemApi } from "../types/poems";

export const getPoems = async () => {
  
  try {
    const response = await fetch("https://poetrydb.org/poemcount/20");
  const data = await response.json();

  console.log(data);
  
  const organizedData: Poem[] = data.map((poem: PoemApi) => ({
    id: poem.title,
    title: poem.title,
    author: poem.author,
    lines: poem.lines,
    linecount: Number(poem.linecount),
  }
  ))

  console.log(organizedData);



  return organizedData;
  } catch (error) {
    console.error(error);
    return error;
  }
};
