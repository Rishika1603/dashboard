import React from 'react';
import { Box, Grid, Typography, Button, Tabs, Tab, Card, CardContent } from '@mui/material';
import { Search as SearchIcon, Settings as SettingsIcon } from '@mui/icons-material';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: '#3ECF8E',
    },
  ],
};
const DashboardMetrics = () => {
  
    const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <Box sx={{ padding: '20px' }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Dashboard
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <SearchIcon />
          <Button variant="outlined">Customize</Button>
          <Button variant="outlined">Export</Button>
        </Box>
      </Box>

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleChange}>
          <Tab label="Market Analysis" />
          <Tab label="Performance" />
        </Tabs>
      </Box>

      {/* Cards */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1">Today's revenue</Typography>
              <Typography variant="h5">$1,280</Typography>
              <Typography color="textSecondary" variant="body2">
                <span style={{ color: '#3ECF8E' }}>▲ 15%</span> last mth
              </Typography>
              {/* Line chart */}
              <Line data={chartData} height={80} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1">Today's orders</Typography>
              <Typography variant="h5">14</Typography>
              <Typography color="textSecondary" variant="body2">
                <span style={{ color: '#3ECF8E' }}>▲ 10%</span> last mth
              </Typography>
              {/* Line chart */}
              <Line data={chartData} height={80} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1">Avg. order value</Typography>
              <Typography variant="h5">$91.42</Typography>
              <Typography color="textSecondary" variant="body2">
                <span style={{ color: '#3ECF8E' }}>▲ 20%</span> last mth
              </Typography>
              {/* Line chart */}
              <Line data={chartData} height={80} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardMetrics;
