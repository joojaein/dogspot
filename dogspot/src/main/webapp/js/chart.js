google.charts.load('current', { 'packages': ['corechart'] });
//google.charts.setOnLoadCallback(drawChart);

var options = {
    vAxis: { minValue: 0 },
    chartArea: {left:50, right:150, top:20, bottom:30},
    width: 900,
    height: 400,
    legend:{position:'rigth', alignment:'center', textStyle:{fontSize:13}},
    selectionMode: 'multiple', 
    tooltip: { trigger: 'selection' },
    aggregationTarget: 'none'
};

var dataVal=[
    ['', '가입자수', '방문자수', '리뷰 등록수', '댓글 등록수', '좋아요 등록수'],
    ['8월', 10, 30, 10, 30, 40],
    ['9월', 12, 40, 15, 35, 20],
    ['10월', 18, 35, 7, 40, 37],
    ['11월', 30, 90, 19, 90, 59]
];


function drawChart() {
    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    var data = google.visualization.arrayToDataTable(dataVal);
    chart.draw(data, options);

    google.visualization.events.addListener(chart, 'select', selectHandler);
    function selectHandler() {
        var selection = chart.getSelection();
        selectArr = [];
        for (var i = 0; i < selection.length; i++) {
            var item = selection[i];
            console.log(item.row +" / " + item.column);
            if (item.row != null && item.column != null) {
                var isPushed=false;
                for(var j=0; j<item.row; j++){
                    if(selectArr[j]==null){
                        selectArr[j] = { row: item.row, column: item.column };
                        isPushed=true;
                        break;
                    }
                }
                if(!isPushed)
                    selectArr[item.row] = { row: item.row, column: item.column };
            }
        }
        chart.setSelection(selectArr);
    }
}

function drawChart_v(dataVal) {
    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    var data = google.visualization.arrayToDataTable(dataVal);
    chart.draw(data, options);

    google.visualization.events.addListener(chart, 'select', selectHandler);
    function selectHandler() {
        var selection = chart.getSelection();
        selectArr = [];
        for (var i = 0; i < selection.length; i++) {
            var item = selection[i];
            if (item.row != null && item.column != null) {
                selectArr[item.row] = { row: item.row, column: item.column };
            }
        }
        chart.setSelection(selectArr);
    }
}
