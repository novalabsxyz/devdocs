/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
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
  },
  a: {
    mr: 10,
    textDecoration: 'none',
  }
}



function Footer() {
  return (
    <footer
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        background: '#171c2d',
        p: 1,
        marginTop: 100,
        width: '100%',
        variant: 'styles.footer',
        justifyContent: 'center',
        textAlign: 'left',
        boxSizing: 'border-box'
      }}>
      <Container sx={styles}>
              <Content />
              <p>Copyright Helium 2019</p>
         
      </Container>

    </footer>
  )
}

export default Footer