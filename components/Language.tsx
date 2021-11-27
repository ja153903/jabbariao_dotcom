import { Box, Icon } from '@chakra-ui/react'
import { MdCircle } from 'react-icons/md'

const ColorLanguageMap: Map<string, string> = new Map()
ColorLanguageMap.set('typescript', 'aurora.300')
ColorLanguageMap.set('lua', 'aurora.400')

function getColorByLanguage(language: string): string {
  return ColorLanguageMap.get(language) ?? 'aurora.500'
}

function Language({ language }: { language: string }) {
  return (
    <Box>
      <Icon as={MdCircle} w={3} h={3} color={getColorByLanguage(language)} />{' '}
      {language}
    </Box>
  )
}

export default Language
