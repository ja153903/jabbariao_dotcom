export interface MediumArticle {
  url: string
  name: string
  publishedDate: string
}

export interface FrontMatter {
  title?: string
  date?: string
  description?: string
  tags?: string[]
}

export interface BlogPost {
  slug: string
  frontMatter: FrontMatter
}
