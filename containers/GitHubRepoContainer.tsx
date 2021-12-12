import { Flex } from '@chakra-ui/react'

import type { IRepository } from '../@types'
import GitHubRepo from '../components/GitHubRepo'
import Section from '../components/Section'

const GITHUB_REPOSITORIES: IRepository[] = [
  {
    name: 'nvim',
    url: 'https://github.com/ja153903/nvim',
    description: 'My neovim configuration',
    language: 'lua',
  },
  {
    name: 'jabbariao_dotcom',
    url: 'https://github.com/ja153903/jabbariao_dotcom',
    description:
      'Source code for my personal website built with Next.js and Chakra UI',
    language: 'typescript',
  },
  {
    name: 'leetcode-typescript',
    url: 'https://github.com/ja153903/leetcode-typescript',
    description:
      'Keeping myself sharp by solving LeetCode problems in TypeScript',
    language: 'typescript',
  },
  {
    name: 'advent-of-code',
    url: 'https://github.com/ja153903/advent-of-code',
    description: 'Advent of Code 2021 Solutions in TypeScript',
    language: 'typescript',
  },
]

function GitHubRepoContainer() {
  return (
    <Section title="Active Projects on GitHub">
      <Flex wrap="wrap" direction="column" mb="-20px">
        {GITHUB_REPOSITORIES.map((repository: IRepository) => (
          <GitHubRepo repository={repository} key={repository.name} />
        ))}
      </Flex>
    </Section>
  )
}

export default GitHubRepoContainer
