// x = ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00']
// y = [1, 3, 6]

var dataArr = [100];
var dates = [new Date()];
graph();


function graph() {
    if (dates.length != 1) {
        Plotly.deleteTraces("graph", 0);
    }
    if (dates.length == 12) {
        dates.shift();
        dataArr.shift();
    }
    var data = [
        {
          x: dates,
          y: dataArr,
          type: 'scatter',
          marker: {
            color: 'rgb(255,165,0)',
            size: 10,
            line: {
              color: 'rgba(255, 255, 255,0.5)',
              width: 3
            }
          }
        }
    ];
    var layout = {
        title: {
          text:'<i>TechKing</i> Current Growth Rate',
          font: {
            family: 'Courier New, monospace',
            size: 24,
            color: "white"
          },
          xref: 'paper',
          x: 0.05,
        },
        xaxis: {
          tickcolor: "white",
          gridcolor: "white",
          tickfont : {
            color : 'white'
          },      
          title: {
            text: 'Turkey Time',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: 'white'
            },
          },
        },
        yaxis: {
          tickfont : {
            color : 'white'
          },      
          tickcolor: "white",
          gridcolor: "white",
          title: {
            text: 'Earnings in USD($)',
            font: {
              family: 'Courier New, monospace',
              size: 20,
              color: 'white'
            }
          }
        },
        plot_bgcolor:"#011",
        paper_bgcolor:"#011"
    };
    Plotly.plot('graph', data, layout);      
    dataArr.push(getData(dataArr));
    dates.push(getDate());
}


function getDate() {
    return new Date();
}

function getData(arr) {
    let cur = arr[arr.length-1];
    let rand = Math.round(Math.random()*7-2); 
    if (rand >= 0) {
        rand++;
    }
    return rand + cur;
}
/*
setInterval(function() {
    console.log(dataArr[dataArr.length-1]);
    dataArr.push(getData(dataArr));
    dates.push(getDate());
    Plotly.plot("graph",{x:dates,y:[dataArr[dataArr.length-1]]},[0]);
},2000)*/

setInterval(function() {
    graph();
},2000);