interface PostType {
  title: string;
  author: string;
  created_at: string;
  _tags: string[];
  url: string;
}

interface CardType {
  post: PostType;
}
