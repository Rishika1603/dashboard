import React from 'react';
import GaugeChart from 'react-gauge-chart';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
const Opportunities = () => {
  return (
    <Box
    sx={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '20px',
      textAlign: 'center',
    }}
  >
    <Typography variant="h6" gutterBottom>
      Industry Opportunities
    </Typography>

    {/* Gauge Chart */}
    <GaugeChart
      id="gauge-chart"
      nrOfLevels={20}
      percent={0.44} // 44% Opportunities
      colors={['#3ECF8E', '#9CCC65']}
      arcPadding={0.02}
      needleColor="#757575"
      arcWidth={0.3}
    />

    <Typography variant="body1" sx={{ mt: 2 }}>
      You can achieve <strong>44%</strong> more opportunities in market
    </Typography>

    {/* Legend */}
    <List dense>
  <ListItem button={true}>
    <ListItemText
      primary="Your Position in Market"
      primaryTypographyProps={{ style: { color: '#3ECF8E' } }}
    />
  </ListItem>
  <ListItem button={true}>
    <ListItemText
      primary="Total Market Opportunities"
      primaryTypographyProps={{ style: { color: '#43A047' } }}
    />
  </ListItem>
  <ListItem button={true}>
    <ListItemText
      primary="Achievable Market Opportunities"
      primaryTypographyProps={{ style: { color: '#9CCC65' } }}
    />
  </ListItem>
</List>

  </Box>
  );
};

export default Opportunities;
