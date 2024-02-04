import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

/**
 * React component representing a Bar Chart.
 *
 * @component
 * @param {Object} props 
 * @param {Array<number>} props.data 
 * @param {Array<string>} props.labels 
 * @returns {JSX.Element} 
 */
const BarChart = ({ data, labels }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 150); // Dégradé vertical

        gradient.addColorStop(0, 'rgba(105, 129, 103, 0.38)');
        gradient.addColorStop(1, 'rgba(88, 117, 84, 0.94)');

        const dashedLineData = Array(data.length).fill(null);

        /**
         * Create a new Chart instance and assign it to the current ref.
         *
         * @function
         * @param {Object} ctx - The context for the Chart.
         * @param {Object} options - The configuration options for the Chart.
         * @returns {void}
         */
        chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Articles',
                        data: data,
                        backgroundColor: gradient,
                    },
                    {
                        label: 'Dashed Line',
                        data: dashedLineData,
                        borderColor: 'rgba(0, 0, 0, 0)',
                        borderWidth: 1,
                        borderDash: [3, 3],
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        beginAtZero: true,
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        beginAtZero: true,
                        lineDashOffset: 4,
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: true,
                        text: 'Articles',
                        position: 'left',
                    },
                },
                elements: {
                    bar: {
                        borderWidth: 1,
                        borderRadius: 4,
                    },
                },
                responsive: true,
            },
        });
    }, [data, labels]);

    return (
        <div style={{ width: '95%', margin: 'auto', marginBottom: 20 }}>
            <canvas ref={chartRef} />
        </div>
    );

};

export default BarChart;
