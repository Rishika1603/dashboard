import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register components to be used by Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const containerStyle = {
    width: '100px',
    margin: 'auto',
    textAlign: 'center',
  };

  const chartSectionStyle = {
    width: '100px',
    height: '100px',
    margin: 'auto',
  };

  const trendingInfoStyle = {
    marginTop: '20px',
    fontSize: '14px',
  };

const Trending = () =>{
    const data = {
        labels: ['Wooden Floor', 'Pattern Tiles', 'Stone Textured Tiles'],
        datasets: [
          {
            label: 'Trending in your Industry',
            data: [49, 32, 27],
            backgroundColor: ['#005F73', '#94D2BD', '#FFD166'],
            borderWidth: 1,
          },
        ],
      };return (
        <div className="dashboard-container">
          <h3>Trending in your Industry</h3>
          <div className="chart-section">
            {/* Pie Chart */}
            <Pie data={data} />
          </div>
          <div className="trending-info">
            <p>
              <span style={{ fontWeight: 'bold' }}>Wooden Floor is trending</span>, set up a campaign for wooden tiles to reach these users.
            </p>
          </div>
        </div>
      );
    };

    export default Trending;