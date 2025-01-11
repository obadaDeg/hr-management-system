import {
  Box,
  Typography,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { useState } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const AttendanceOverview: React.FC = () => {
  const [filter, setFilter] = useState<string>("Today");

  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    setFilter(event.target.value);
  };

  const chartData: ChartData<"bar", number[], string> = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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

  const chartOptions: ChartOptions<'bar'> = {
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
          color: '#e5e7eb',
          borderColor: 'transparent', // Hides the y-axis border
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
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            value={filter}
            onChange={handleFilterChange}
            displayEmpty
            inputProps={{ "aria-label": "Filter" }}
          >
            <MenuItem value="Today">Today</MenuItem>
            <MenuItem value="This Week">This Week</MenuItem>
            <MenuItem value="This Month">This Month</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ height: 300 }}>
        <Bar data={chartData} options={chartOptions} />
      </Box>
    </Box>
  );
};

export default AttendanceOverview;
