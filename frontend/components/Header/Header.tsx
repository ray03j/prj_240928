import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { allowedCategories } from '@/app/constants';
import { theme } from '@/app/theme';

export const Header = () => {
  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar component="nav" sx={{ bgcolor: theme.palette.primary.main}}>
        <Toolbar >
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Envild
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {allowedCategories.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};