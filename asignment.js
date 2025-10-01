const ctx = document.getElementById('financeChart').getContext('2d');
          const financeChart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
              datasets: [{
                label: 'Amount',
                data: [12000, 5000, 15000, 28000, 27000, 39000, 43000, 52210],
                borderColor: 'purple',
                borderWidth: 2,
                backgroundColor: 'purple',
                fill: false,
                tension: 0,
                pointBackgroundColor: 'purple',
                pointBorderColor: '#fff',
                pointRadius: 0,
              }]
            },
            options: {
              responsive: false,
              plugins: {
                legend: {
                  display: false
                }
              },
              scales: {
                y: {
                  beginAtZero: true,
                  max: 60000,
                  ticks: {
                    color: 'red',
                    weight:'bold',
                    font: {
                      family: 'AKbalthom Kbach',
                      size: 14,
                    },
                    callback: function(value) {
                      return '$' + value.toLocaleString(undefined, {minimumFractionDigits: 2});
                    }
                  },
                  grid: {
                    display: true,
                    drawBorder: false
                  }
                },
                x: {
                  ticks: {
                    color: 'navy',
                    font: {
                      family: 'AKbalthom Kbach',
                      size: 14,
                    },
                  },
                  grid: {
                    display: false
                  }
                }
              }
            }
          });
          ////===///
          // message Dropdown Toggle
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('messageBtn');
    const dropdown = document.getElementById('messageDropdown');

    btn.addEventListener('click', () => {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Optional: Hide dropdown if clicked outside
    document.addEventListener('click', function (e) {
        if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
});
// Notification Dropdown Toggle
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('bellBtn');
    const dropdown = document.getElementById('bellDropdown');

    btn.addEventListener('click', () => {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Optional: Hide dropdown if clicked outside
    document.addEventListener('click', function (e) {
        if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
});
// Notification Dropdown Toggle
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('bell1Btn');
    const dropdown = document.getElementById('bell1Dropdown');

    btn.addEventListener('click', () => {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Optional: Hide dropdown if clicked outside
    document.addEventListener('click', function (e) {
        if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
});

function closeDropdown() {
    document.getElementById("bell1Dropdown").style.display = "none";
}
function closeMessage() {
    document.getElementById("messageDropdown").style.display = "none";
}