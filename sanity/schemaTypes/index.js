import { post } from './post';
import { author } from './author';
import { category } from './category';
import { comment } from './comment';

export const schema = {
  types: [post, author, category, comment],
};
