/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
//import { MDXProvider } from '@mdx-js/react'
//import FooterMDX from '../footer.mdx'

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
            <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>
                Introduction
            </Link>
            <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>
                Blog
            </Link>
            <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>
                About
            </Link>
            <div sx={{ mx: 'auto' }} />
            <div sx={{ p: 2 }}>© 2019 Helium</div>
        </footer>
    )
}

export default Footer