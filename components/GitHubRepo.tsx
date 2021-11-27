import { Flex, Text } from '@chakra-ui/react'

import type { GitHubRepoProps } from '../@types'
import ExternalLink from './ExternalLink'

import Language from './Language'

// This component should render the items within
// the GitHubRepoContainer
// should have name of repo with url
// description of repo
// languages we use for it
function GitHubRepo({ repository }: GitHubRepoProps) {
  const { name, url, description, language } = repository

  return (
    <Flex
      direction="column"
      wrap="wrap"
      justify="flex-start"
      mb="20px"
      border="1px"
      padding="10px"
      maxW="xl"
    >
      <ExternalLink name={name} url={url} />
      <Text color="snowstorm.100" as="i" mb="15px">
        {description}
      </Text>
      <Language language={language} />
    </Flex>
  )
}

export default GitHubRepo
