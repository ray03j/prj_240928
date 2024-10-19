"use client"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { allowedCategories } from '@/app/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname(); // 現在のパスを取得

  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar component="nav" sx={{bgcolor: "primary.main"}}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link href={`/`}>
              Envild
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {allowedCategories.map((item) => (
              <Button 
                key={item} 
                sx={{ color: pathname === `/${item}` ? '#888' : '#fff' }}
                disabled={pathname === `/${item}`}
              >
                <Link href={`/${item}`}>
                  {item}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};