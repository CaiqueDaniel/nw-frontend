import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Navbar } from '../features/Navbar/Navbar';

export function FormLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <Box
        px={8}
        pt={3}
        height="100vh"
      >
        <Box className="bg-with-map-tile" px={12} pb={8}>{children}</Box>
      </Box>
    </>
  );
}
