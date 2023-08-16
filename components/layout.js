import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ResponsiveDrawer from "./drawer";
import Toolbar from '@mui/material/Toolbar';


export default function Layout({ children, mode, toggleMode }) {

    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center'
      }}>
        <CssBaseline />

        {/* Responsive Drawer */}
        <ResponsiveDrawer />

        <Box
        sx={{
          width: '100%'
        }}
        >
            <Toolbar />
            {children}
        </Box>
      </Box>
    )
  }