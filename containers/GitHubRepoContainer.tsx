import { Flex } from '@chakra-ui/react'

import type { IRepository } from '@types'

import GitHubRepo from '@components/GitHubRepo'
import Section from '@components/Section'

const GITHUB_REPOSITORIES: IRepository[] = [
  {
    name: 'jabbariao_dotcom',
    url: 'https://github.com/ja153903/jabbariao_dotcom',
    description:
      'Source code for my personal website built with Next.js and Chakra UI',
    language: 'typescript',
  },
  {
    name: 'problem_solving',
    url: 'https://github.com/ja153903/problem_solving',
    description: 'Working on algorithmic problem solving!',
    language: 'python',
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
