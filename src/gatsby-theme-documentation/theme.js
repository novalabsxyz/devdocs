import fonts from '../fonts/fonts.css'

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  a: {
    color: 'inherit',
    textDecoration: 'none'
  }
}

export default {
  colors: {
    text: '#9395bd',
    background: '#27284B',
    primary: '#29D391',
    secondary: '#19B87A',
    purple: '#BE73FF',
    muted: '#171B2E',
    gray: '#6a86b2',
    white: '#fff',
  },
  fonts: {
    body: 'soleil, sans-serif',
    heading: 'soleil, sans-serif',
    monospace: '"input-mono", Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: '300',
    heading: '600',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  textStyles: {
    heading,
    display: {
      variant: 'textStyles.heading',
      fontSize: [3, 4, 5, 6],
      mt: 3,
      
    },
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024,
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      overflowX: 'hidden',
    },
    h1: {
      variant: 'textStyles.display',
      letterSpacing: '-0.05rem',
      fontSize: 4,
      color: 'white',
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 4,
      fontWeight: '400',
      marginTop: 50,
      paddingTop: 50,
      borderTop: '1px solid #4B4B71',
      letterSpacing: '-0.5',
            color: 'white',


    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 1,
      textTransform: 'uppercase',
      letterSpacing: '3px',
      marginTop: 50,
      color: 'primary',

    },
    h4: {
      
      fontSize: 2,
      marginTop: 20,
      color: 'white',
      fontWeight: 400,
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 1,
      textTransform: 'uppercase',
      letterSpacing: '3px',
      color: 'white',
      mb: '10px',
      mt: '20px',
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 1,
    },
    a: {
      color: 'purple',
      '&:hover': {
        color: '#8D41D0',
      },
    },

    ul: {
      mt: 30,
      mb: 30,
    },

    li: {
      mb:10,
    },

    strong: {
      color: 'white',
      fontWeight: 500,
    },
    pre: {
      variant: 'prism',
      fontFamily: 'monospace',
      fontSize: 1,
      borderRadius: '10px',
      p: 20,
      marginTop: 40,
      marginBottom: 40,
      color: 'text',
      bg: 'muted',
      overflow: 'auto',
      code: {
        color: 'inherit',
      },
    },
    blockquote: {
      color: 'background',
      marginTop: 40,
      backgroundColor: 'purple',
      marginLeft: '0',
      p: '20px',
      pt: '5px',
      pb: '5px',
      borderRadius: 10,
      fontWeight: 400,
      borderLeft: '10px solid #9446D7',
      pl: '30px',
      pr: '30px',

      a: {
        color: '#27284B',
        ":hover": {
          color: 'white',
          textDecoration: 'underline',
        },
        
      },
      

    },
    code: {
      fontFamily: 'monospace',
      color: 'secondary',
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'primary',
      bg: 'muted',
      p: '2px 6px',
      borderRadius: '2px',
      fontSize: 1,
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      [['th', 'td']]: {
        textAlign: 'left',
        py: '4px',
        pr: '4px',
        pl: 0,
        borderColor: 'muted',
        borderBottomStyle: 'solid',
      },
    },
    th: {
      verticalAlign: 'bottom',
      borderBottomWidth: '2px',
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: '1px',
    },
    hr: {
      border: 0,
      borderBottom: '1px dotted',
      borderColor: 'text',
      marginTop: 50,
      marginBottom: 50,
    },
    img: {
      maxWidth: '100%',
      borderRadius: '6px',
      mt: '20px',
      mb: '20px',
    }
  },
  prism: {
    [[
      '.comment',
      '.prolog',
      '.doctype',
      '.cdata',
      '.punctuation',
      '.operator',
      '.entity',
      '.url',
    ]]: {
      color: 'gray',
    },
    '.comment': {
      fontStyle: 'italic',
    },
    [[
      '.property',
      '.tag',
      '.boolean',
      '.number',
      '.constant',
      '.symbol',
      '.deleted',
      '.function',
      '.class-name',
      '.regex',
      '.important',
      '.variable',
    ]]: {
      color: 'purple',
    },
    [['.atrule', '.attr-value', '.keyword']]: {
      color: 'primary',
    },
    [[
      '.selector',
      '.attr-name',
      '.string',
      '.char',
      '.builtin',
      '.inserted',
    ]]: {
      color: 'secondary',
    },
  },
}
