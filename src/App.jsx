import { useState } from 'react'
import AppRouters from './routers/AppRouters'
import { ThemeProvider } from '@mui/material' 
import Theme from './themes/theme'
const App=()=> {


  return (
    <ThemeProvider theme={Theme}>
   <AppRouters></AppRouters>
   </ThemeProvider>
  )
}

export default App
