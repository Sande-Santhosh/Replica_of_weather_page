
const ctx = document.getElementById('timelinechart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["23%", "29%", "58%", "75%","33%","20%","73%","49%"],
      datasets: [{
        label: '# of Votes',
        data: [23, 29, 58, 75,33,20,73,49],
        borderWidth: 1,
        fill: true,
        backgroundColor:"rgba(114,212,199,0.7)",
        pointRadius:0,
        tension:0.1,
      }]
    },
    options: {
      maintainAspectRatio:false,
      plugins:{
        title:{
          display:false,
          text:'hello'
        },
          legend:{
            display:false,
          }
      },
      scales: {
        x: {
             grid: { display: true,
             color:"black"          
                    }
        },


        y: {
          beginAtZero:true,
          grid: {display: true,
            drawTicks:false,
            drawOnChartArea: false,         
                  },
          ticks: {stepSize:1,
                    display:false,
                  },
          min:0,
          max:100,
        }
      }
      }
    }
  );

  // spedometerchart


  
  
  




