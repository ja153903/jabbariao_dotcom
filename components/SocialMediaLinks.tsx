import { ButtonGroup, IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Aurora } from '../themes'

function SocialMediaLinks() {
  return (
    <ButtonGroup variant="outline" color={Aurora.Nord15}>
      <IconButton
        as="a"
        href="https://www.linkedin.com/in/jaime-louis-abbariao-972a1399/"
        aria-label="LinkedIn"
        icon={<FaLinkedin fontSize="12px" />}
        target="_blank"
        size="xs"
      />
      <IconButton
        as="a"
        href="https://github.com/ja153903"
        aria-label="GitHub"
        icon={<FaGithub fontSize="12px" />}
        target="_blank"
        size="xs"
      />
      <IconButton
        as="a"
        href="https://twitter.com/ja153903"
        aria-label="Twitter"
        icon={<FaTwitter fontSize="12px" />}
        target="_blank"
        size="xs"
      />
    </ButtonGroup>
  )
}

export default SocialMediaLinks
