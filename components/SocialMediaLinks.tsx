import { ButtonGroup, IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function SocialMediaLinks() {
  return (
    <ButtonGroup variant="outline" color="aurora.500">
      <IconButton
        as="a"
        href="https://www.linkedin.com/in/jaime-louis-abbariao-972a1399/"
        aria-label="LinkedIn"
        icon={<FaLinkedin fontSize="15px" />}
        target="_blank"
        size="sm"
      />
      <IconButton
        as="a"
        href="https://github.com/ja153903"
        aria-label="GitHub"
        icon={<FaGithub fontSize="15px" />}
        target="_blank"
        size="sm"
      />
      <IconButton
        as="a"
        href="https://twitter.com/ja153903"
        aria-label="Twitter"
        icon={<FaTwitter fontSize="15px" />}
        target="_blank"
        size="sm"
      />
    </ButtonGroup>
  )
}

export default SocialMediaLinks
