import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const HalfDonutChart = ({ data, labels }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [
                    {
                        data: data,
                        backgroundColor: ['#43BE83', '#E26169'],
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            font: {
                                size: 14,
                                family: 'dmsansmedium',
                            },
                            color: ['#43BE83', '#E26169'],
                        },
                    },
                },
                cutout: `80%`,
                rotation: 270,
                circumference: 180,
                elements: {
                    arc: {
                        borderRadius: 50,
                    },
                },
            },
        });
    }, [data, labels]);

    return (
        <div style={{ width: '80%', margin: 'auto', marginBottom: 20 }}>
            <canvas ref={chartRef} />
        </div>
    );

};

export default HalfDonutChart;
