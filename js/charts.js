/*-----------------Gráficas-------------------*/

google.charts.load('current', {'packages':['bar']});
     google.charts.setOnLoadCallback(drawStuff);

     function drawStuff() {
       var data = new google.visualization.arrayToDataTable([
         ['Estudiantes', 'Porcentaje'],
         ["Activas", active,],
         ["Inactivas", inactive,],
       ]);

       var options = {
         title: 'Estudiantes',
         width: 900,
         legend: { position: 'none' },
         chart: { title: 'Estudiantes',
                  subtitle: 'porcentaje de activas e inactivas' },
         bars: 'horizontal', // Required for Material Bar Charts.
         axes: {
           x: {
             0: { side: 'top', label: 'Porcentaje'} // Top x-axis.
           }
         },
         bar: { groupWidth: "60%" }
       };

       var chart = new google.charts.Bar(document.getElementById('top_x_div'));
       chart.draw(data, options);
     };
/*Termina Gráfica*/
