import styles from './AttendanceOveriew.module.css'
import { Box, Typography, Menu, MenuItem, Button, FormControl, InputLabel, Select } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

import { useState } from "react";
import { Today } from "@mui/icons-material";

const AttendanceOverview = () => {
  const [age, setAge] = useState('');
  
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  // Data for the chart
  const data = {
    labels: ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "60%",
        data: [60, 60, 60, 60, 60, 60, 60],
        backgroundColor: "#f59e0b",
        borderRadius: 10,
        barThickness: 10,
      },
      {
        label: "80%",
        data: [80, 80, 80, 80, 80, 80, 80],
        backgroundColor: "#ef4444",
        borderRadius: 10,
        barThickness: 10,
      },
      {
        label: "100%",
        data: [100, 100, 100, 100, 100, 100, 100],
        backgroundColor: "#6366f1",
        borderRadius: 10,
        barThickness: 10,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        grid: {
          drawBorder: false,
          color: "#e5e7eb",
        },
        ticks: {
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Attendance Overview
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 120, borderRadius:10 }} size="small" style={{borderRadius: 10}}>
          <Select
           displayEmpty
           inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="Today" className={styles.selectOption}>Today</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ height: 300 }}>
        <Bar data={data} options={options} />
      </Box>
    </Box>
  );
};

export default AttendanceOverview;
