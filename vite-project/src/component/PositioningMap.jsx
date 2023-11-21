import React from 'react';
import { Scatter } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export default function PositioningMap(props) {
  const { pushData, detailUser } = props;

  const data = {
    datasets: [],
  };

  for (let i = 0; i < pushData.length; i++) {
    data.datasets.push({
      label: detailUser[i]?.first_name + ' ' + detailUser[i]?.last_name,
      data: [pushData[i]],
      pointRadius: 15,
    });
  }
  // オプションの定義
  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'linear',
        position: 'center',
        min: -10,
        max: 10,
        ticks: {
          font: {
            size: 18,
          },
        },
      },
      y: {
        type: 'linear',
        position: 'center',
        min: -10,
        max: 10,
        ticks: {
          font: {
            size: 18,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 20,
          },
        },
      },
      title: {
        display: true,
        text: 'ソーシャルスタイル診断',
        font: {
          size: 25,
        },
      },
    },
  };

  return (
    <div className="canvas">
      <Scatter data={data} options={options} />
    </div>
  );
}
