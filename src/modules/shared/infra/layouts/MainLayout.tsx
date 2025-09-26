import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Navbar } from '../features/Navbar/Navbar';

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <Box px={3} pt={3} bgcolor="#ededed" height="100vh">
        {children}
      </Box>
    </>
  );
}
