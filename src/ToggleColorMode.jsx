import { createTheme } from '@mui/material';
import React, { useMemo, useState } from 'react'

function ToggleColorMode() {
    const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  return (
    <div>
      
    </div>
  )
}

export default ToggleColorMode
