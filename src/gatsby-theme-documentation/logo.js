import { jsx, ThemeProvider } from 'theme-ui'
export default props => (
  <ThemeProvider>
    <div {...props} />
  </ThemeProvider>
)