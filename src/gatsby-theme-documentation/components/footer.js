
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
//import { MDXProvider } from '@mdx-js/react'
//import FooterMDX from '../footer.mdx'

function Footer() {
    return (
        <footer
            sx={{
                fontSize: 2,
                variant: 'styles.footer',
            }}>
            <div
                sx={{
                    display: 'grid',
                    gridTemplateRows: 'repeat(4, 32px)',
                    gridTemplateColumns: [
                        'repeat(2, 1fr)',
                        'repeat(4, 1fr)',
                    ],
                    gridAutoFlow: 'column',
                    px: 2,
                    py: 4,
                }}>
                <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>Home</Link>
                <Link to='/device' sx={{ variant: 'styles.navlink', p: 2 }}>Device</Link>
            </div>
            <div
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 3,
                }}>
                <Link to='/' sx={{ color: 'inherit' }}>Privacy Policy</Link>
                <div sx={{ mx: 1 }} />
                <Link to='/' sx={{ color: 'inherit' }}>Terms of Use</Link>
                <div sx={{ mx: 1 }} />
                © 2019 Jane Doe
            </div>
        </footer>
    )
}

export default Footer