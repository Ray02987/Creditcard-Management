import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = (props) => {
  const { labels, color, label, value } = props;

  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: value,
        backgroundColor: color.background,
        borderColor: color.border,
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      {labels.length === 0 ? (
        <div className="text-center">
          <p
            style={{
              fontSize: '1rem',
              fontWeight: '400',
              marginTop: '1.5rem',
            }}
          >
            No data available to show.
          </p>
        </div>
      ) : (
        <div
        //  style={{ width: '800px' }}
        >
          <Pie
            data={data}
            height={400}
            // width={800}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      )}
    </>
  );
};

export default PieChart;
