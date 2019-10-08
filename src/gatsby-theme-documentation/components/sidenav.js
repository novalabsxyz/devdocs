/** @jsx jsx */
import { jsx } from 'theme-ui'
import { AccordionNav } from '@theme-ui/sidenav'
import NavLink from './nav-link'
import Sidebar from '../sidebar.mdx'

const components = {
  wrapper: AccordionNav,
  a: NavLink,
}

export default props => (
  <Sidebar
    {...props}
    components={components}
    sx={{
      width: 256,
      flex: 'none',
      px: 3,
      pt: 0,
      pb: 4,
      pr: 4,
      mt: [20, 0],
    }}
  />
)
