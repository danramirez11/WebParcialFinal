export interface Poem {
  id: string;
  title: string;
  author: string;
  lines: string[];
  linecount: number;
  category?: string;
}

export interface PoemApi {
  title: string;
  author: string;
  lines: string[];
  linecount: string;
}
