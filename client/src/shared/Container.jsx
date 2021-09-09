import React from 'react'
import { Box } from 'rebass'

export const Container = ({children}) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1024,
        mx: "auto"
      }}
    >
      {children}
    </Box>
  )
}

