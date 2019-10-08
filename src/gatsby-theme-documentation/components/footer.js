/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui'
//import { Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'

import NavLink from './nav-link'
import Content from '../footer.mdx'

//import FooterMDX from '../footer.mdx'

const styles = {
  alignItems: 'center',
  width: '100%',
  h1: {
    m: 0
  },
  ul: {
    ml: 'auto',
    display: 'flex',
    listStyleType: 'none',
  },
  li: {
    ml: 3
  }
}

const components = {
  a: NavLink
}

function Footer() {
  return (
    <footer
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        p: 2,
        variant: 'styles.footer',
      }}>
      <Container>
        <Flex sx={{ justifyContent: 'space-between' }}>
          <Flex sx={styles}>
            <MDXProvider components={components}>
              <Content />
            </MDXProvider>
          </Flex>
        </Flex>
      </Container>

    </footer>
  )
}

export default Footer