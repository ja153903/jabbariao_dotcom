import { ButtonGroup, IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function SocialMediaLinks() {
  return (
    <ButtonGroup variant="outline" color="#B48EAD">
      <IconButton
        as="a"
        href="https://www.linkedin.com/in/jaime-louis-abbariao-972a1399/"
        aria-label="LinkedIn"
        icon={<FaLinkedin fontSize="20px" />}
        target="_blank"
      />
      <IconButton
        as="a"
        href="https://github.com/ja153903"
        aria-label="GitHub"
        icon={<FaGithub fontSize="20px" />}
        target="_blank"
      />
    </ButtonGroup>
  )
}

export default SocialMediaLinks
