
    // setup 
    const data = {
      labels: ['Mon', 'Tue', 'Wed'],
      datasets: [{
        label: 'Weekly Sales',
        data: [2, 2, 2,2,2],
        backgroundColor: [
          'rgba(114,212,199,0.9)',
          'rgba(114,212,199,0.9)',
          'rgba(114,212,199,0.9)',
          'rgba(241,241,241,0.9)',
          'rgba(241,241,241,0.9)'
        
        ],
        borderColor:[
          'rgba(114,212,199,0)',
        ],
        needleValue:6.3,
        cutout:'85%',
        borderWidth:0,
        circumference:180,
        rotation:270,
        borderRadius:50,
        

      }]
    };
    //gauge needel
    const gaugeNeedle = {
      id: 'gaugeNeedle',
      afterDatasetDraw(chart, args, options){
        const{ ctx, config, data, chartArea: { top, bottom, left, right, width, height}} = chart;
        ctx.save( );
        
        const needleValue=data.datasets[0].needleValue
        const dataTotal =data.datasets[0].data.reduce((a,b) => a+b,0);
        const angle = Math.PI + (1 / dataTotal * needleValue * Math.PI);
        const cx= width/2;
        const cy= chart._metasets[0].data[0].y -24;

        //needle

        ctx.translate(cx, cy);
        ctx.rotate(angle);
        ctx.beginPath( );
        ctx.moveTo(6,4);
        ctx.lineTo(height - (ctx.canvas.offsetTop +65) ,0)
        ctx.lineTo(6,-4)
        ctx.fillStyle = "rgba(114,212,199,0.7)"
        ctx.fill( );
        ctx.restore();

        // needle dot
  
        ctx.beginPath( );
        ctx.arc( cx,cy, 5, 0, 10);
        ctx.fillStyle = "rgba(114,212,199,0.7)"
        ctx.fill( );
        ctx.restore( );

      }
    }

    // config 
    const config = {
      type: 'doughnut',
      data,
      options: {
        responsive:true,
        maintainAspectRatio:false,
          plugins:{
            legend:{
              display:false
            },
            tooltip:{
             enabled:false,
              displayColors:false
            },
          }
      },
      plugins:[gaugeNeedle]
    };

    // render init block
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );

    // Instantly assign Chart.js version
    const chartVersion = document.getElementById('chartVersion');
    chartVersion.innerText = Chart.version;
