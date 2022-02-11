import { Text } from '@chakra-ui/react'

import type { GitHubRepoProps } from '@types'
import ExternalLink from './ExternalLink'

import Language from './Language'
import StyledLayout from './StyledLayout'

function GitHubRepo({ repository }: GitHubRepoProps) {
  const { name, url, description, language } = repository

  return (
    <StyledLayout
      layoutType="flex"
      sx={{
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginBottom: '10px',
      }}
    >
      <ExternalLink name={name} url={url} />
      <Text color="snowstorm.100" as="i" mb="15px">
        {description}
      </Text>
      <Language language={language ?? ''} />
    </StyledLayout>
  )
}

export default GitHubRepo
