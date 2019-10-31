/** @jsx jsx */
import { jsx } from 'theme-ui'
import { AccordionNav } from './accordian'
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
      width: 230,
      flex: 'none',
      px: 3,
      pt: 20,
      pb: 4,
      pr: 4,
      
    }}
  />
)
