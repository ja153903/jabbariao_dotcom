import { IBlogPost, IFrontMatter } from './interfaces'

export interface WritingProps {
  posts?: IBlogPost[]
}

export interface BlogPostPreviewProps {
  posts: IBlogPost[]
}

export interface NavigationLinkProps {
  href: string
  label: string
  pathname: string
}

export interface PageContainerProps {
  children: React.ReactNode
}

export interface ResumeItemProps {
  title: string
  subTitle: string
  description: string
  isLastItem?: boolean
}

export interface ResumeListItemProps {
  title: string
  items: string[]
  isLast?: boolean
}

export interface SectionProps {
  title?: string
  children?: React.ReactNode
  sx?: object
}

export interface TitleLineProps {
  text: string
}

export interface BlogPageProps {
  frontMatter: IFrontMatter
  mdxSource: any
}

export interface SyntaxHighlighterProps {
  language?: string
  children: React.ReactNode
}

export interface GitHubContributionChartProps {
  contributions?: object[]
}

export interface MDXComponentProps {
  children?: React.ReactNode
  language?: string
}

export interface BlogContentProps {
  mdxSource: any
  tags?: string[]
}