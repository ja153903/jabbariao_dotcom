export interface IMediumArticle {
  url: string
  name: string
  publishedDate: string
}

export interface IFrontMatter {
  title?: string
  date?: string
  description?: string
  tags?: string[]
}

export interface IBlogPost {
  slug: string
  frontMatter: IFrontMatter
}
