// line chart
const ctx = document.getElementById('myChartbar').getContext('2d');

const data1 = {
    labels: ['','Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
        label: 'Daily Data',
        data: [100, 380, 150, 450, 590, 180, 430, 50],
        fill: true,
        borderColor: 'grey',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        pointBackgroundColor: 'grey',
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.4
    }]
};

const def = {
    type: 'line',
    data: data1,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Days',
                    color: '#6c757d',
                    font: {
                        size: 19,
                        weight: 'light'
                    }
                }
            },
            y: {
                ticks: {
                    stepSize: 100,
                    callback: function(value) {
                        return value;
                    },
                    color: '#6c757d',
                    font: {
                        size: 12
                    }
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                min: 0,
                max: 600,
            }
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#343a40',
                    font: {
                        size: 14
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 123, 255, 0.9)',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#007bff',
                borderWidth: 1
            }
        }
    }
};

const myChartbar = new Chart(ctx, def);

// Pie Chart
const cty = document.getElementById("myBarChart").getContext("2d");
const myBarChart = new Chart(cty, {
  type: "pie",
  data: {
    labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
    datasets: [
      {
        label: "Expenses",
        data: [30, 25, 20, 15],
        backgroundColor: ["#ff7f0e", "#0000ff", "#ff00ff", "#2f3e75"],
        borderColor: ["#ff7f0e", "#0000ff", "#ff00ff", "#2f3e75"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true, // Show or hide the legend
        position: "top", // Change the position of the legend
      },
      tooltip: {
        enabled: true, // Enable or disable tooltips
      },
    },
  },
});



// line chart
const ctz = document.getElementById('myChart').getContext('2d');

const data = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', ''],
    datasets: [{
        label: 'Monthly Data',
        data: [100, 380, 150, 450, 690, 180, 430, 50],
        fill: true,
        borderColor: '#007bff',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        pointBackgroundColor: '#007bff',
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.4
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Months',
                    color: '#6c757d',
                    font: {
                        size: 19,
                        weight: 'light'
                    }
                }
            },
            y: {
                ticks: {
                    stepSize: 200,
                    callback: function(value) {
                        return value;
                    },
                    color: '#6c757d',
                    font: {
                        size: 12
                    }
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                min: 0,
                max: 1000,
            }
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#343a40',
                    font: {
                        size: 14
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 123, 255, 0.9)',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#007bff',
                borderWidth: 1
            }
        }
    }
};

const myChart = new Chart(ctz, config);
