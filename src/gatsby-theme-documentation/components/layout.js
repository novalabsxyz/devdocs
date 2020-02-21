/** @jsx jsx */
import { useState, useRef } from 'react'
import { Global } from '@emotion/core'
import { AccordionNav } from '@theme-ui/sidenav'
import { Styled, Layout, Main, Container, jsx, useThemeUI } from 'theme-ui'
import Sidebar from '../sidebar.mdx'
import NavLink from './nav-link'
import { globalHistory } from '@reach/router'
import Header from './header'
import Footer from './footer'

const sidenav = {
  wrapper: AccordionNav,
  a: NavLink,
}

export default props => {
  const { theme: { colors = {} } } = useThemeUI()
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = useRef(null)

  const bodyStyles = {
    body: {
      margin: 0,
      color: colors.text,
      backgroundColor: colors.background
    }
  }

  return (
    <Styled.root>
      <Global styles={bodyStyles} />
      <Layout>
        <Header nav={nav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Main>
          <Container py={0} px={3}>
            <div
              ref={nav}
              sx={{
                display: ['block', 'flex'],
                mx: -3,
              }}
            >
              <Sidebar
                open={menuOpen}
                components={sidenav}
                pathname={globalHistory.location.pathname}
                sx={{
                  width: 230,
                  flex: 'none',
                  px: 3,
                  pt: 20,
                  pb: 4,
                  pr: 4,
                }}
                // sx={{ display: [null, 'block'] }}
                onFocus={() => setMenuOpen(true)}
                onBlur={() => setMenuOpen(false)}
                onClick={() => setMenuOpen(false)}
              />
              <div
                sx={{
                  overflow: 'hidden',
                  px: 3,
                }}
              >
                {props.children}
              </div>
            </div>
          </Container>
        </Main>
        <Footer />
      </Layout>
    </Styled.root>
  )
}
