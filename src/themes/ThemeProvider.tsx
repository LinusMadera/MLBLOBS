import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#ea580c', // Color for primary elements
          contrastText: '#fafaf9', // White color for text on primary elements
        },
        secondary: {
          main: '#d3500c', // Secondary color, used for hover state
        },
        error: {
          main: '#7b310b', // Color for error states and disabled elements
        },
        background: {
          default: '#0c0a09', // Background color for the theme
          paper: '#0c0a09',
        },
        text: {
          primary: '#fafaf9', // White color for primary text
          secondary: '#a19b98', // Muted color for secondary text
          disabled: '#7b310b', // Disabled text colo
          
        },
        divider: '#292524', // Color for dividers and outlines
      },
      shape: {
        borderRadius: 16,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 20,
              textTransform: 'none',
              fontWeight: 600,
              backgroundColor: 'none',
              border: '1px solid #ea580c',
              '&:hover': {
                backgroundColor: '#d3500c',
                borderColor: '#fafaf9',
              },
              '&.Mui-disabled': {
                backgroundColor: 'none',
                color: '#7b310b',
                borderColor: '#7b310b',
              },
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              backgroundColor: '#0c0a09',
              color: '#fafaf9',
              borderRadius: 16,
              border: '1px solid #292524',
              boxShadow: 'none',
              backgroundImage: 'none', // Ensuring no background image is applied
            },
          },
        },
        MuiTypography: {
          styleOverrides: {
            h6: {
              color: '#a1a1aa', // Explicit white color for h6
              fontWeight: 600,
              fontSize: '.8rem',
            },
            h4: {
              color: '#fafaf9', // Explicit white color for h4
              fontWeight: 600,
            },
            h3: {
              color: '#a1a1aa', // Explicit white color for h3
              fontWeight: 500,
              fontSize: '1.5rem',
            },
            h2: {
              color: '#fafaf9', // Explicit white color for h2
              fontWeight: 900,
              fontSize: '4rem',
            },
            h1: {
              color: '#fafaf9', // Explicit white color for h1
              fontWeight: 900,
              fontSize: '3rem',
            },

            // Ensure all other typography elements have no background image
            root: {
              backgroundImage: 'none',
              color: '#fafaf9', // Explicit white color for all text
              '& a': { // Styles for links
                color: '#ea580c', // Orange color for links
                textDecoration: 'underline', // Underline for links
              },
            },
          },
        },
        // Apply "backgroundImage: 'none'" to all other components as needed
      },
      typography: {
        fontFamily: 'Geist Variable',
        h1: { fontWeight: 700, color: '#fafaf9' },
        h2: { fontWeight: 700, color: '#fafaf9' },
        h3: { fontWeight: 700, color: '#fafaf9' },
        h4: { fontWeight: 600, color: '#fafaf9' },
        h5: { fontWeight: 600, color: '#fafaf9' },
        h6: { fontWeight: 300, color: '#fafaf9' }, // Already customized h6 above
        subtitle1: { fontWeight: 500, color: '#fafaf9' },
        subtitle2: { fontWeight: 500, color: '#fafaf9' },
        body1: { fontWeight: 400, color: '#fafaf9' },
        body2: { fontWeight: 400, color: '#fafaf9' },
        button: { fontWeight: 600, color: '#fafaf9' },
        caption: { fontWeight: 400, color: '#fafaf9' },
        overline: { fontWeight: 400, color: '#fafaf9' },
      },
      // Ensure that the global style has no background images
})
