import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Navbar } from '../features/Navbar/Navbar';

export function FormLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <Box
        px={16}
        pt={3}
        height="100vh"
        sx={{
          backgroundImage: 'url("/map.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {children}
      </Box>
    </>
  );
}
