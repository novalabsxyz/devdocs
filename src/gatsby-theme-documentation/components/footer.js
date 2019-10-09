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
    mr: '20px'
  },
  li: {
    ml: 3,
    fontSize: 1,
  },
  p: {
    fontSize: 1,
    paddingTop: '0px'
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
        background: '#171c2d',
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