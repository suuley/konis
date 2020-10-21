var getBarChartData = function(player_data) {

  var keys_list = ['Def', 'Dribbling', 'Ball control', 'Value', 'Wage', 'Overall'];

  data = [];
  d3.format("($.2f");
  for(var i = 0; i < keys_list.length; ++i) {
    var t_key = keys_list[i];
    data.push(
      {
      "label": t_key,
      "value": player_data[t_key]
    }
  );
  }
   console.log('getBarChartData():data:', data);

   data_chart = [
     {
     key: "Player_Data_Chart",
     values: data
   }
 ];
    return data_chart;
}




var drawChart = function(player) {
nv.addGraph(function() {
  var chart = nv.models.discreteBarChart()
    .x(function(d) { return d.label })
    .y(function(d) { return d.value })
    .staggerLabels(true)
    .showValues(true)

  d3.select('#chart svg')
    .datum(getBarChartData(player))
    .transition().duration(500)
    .call(chart)
    ;

  nv.utils.windowResize(chart.update);

  return chart;
});

}
