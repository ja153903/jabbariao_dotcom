import { useState, useEffect } from 'react'
import { IconButton } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'

function ScrollToTopButton() {
  const [visible, setVisible] = useState<boolean>(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight
    setVisible(scrolled > height / 2)
  }

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)

    return () => {
      window.removeEventListener('scroll', toggleVisible)
    }
  }, [visible])

  return (
    <IconButton
      icon={<ArrowUpIcon />}
      colorScheme="teal"
      isRound
      aria-label="Scroll to Top"
      onClick={handleOnClick}
      sx={{
        display: visible ? 'inline' : 'none',
        position: 'sticky',
        bottom: 8,
      }}
    />
  )
}

export default ScrollToTopButton
