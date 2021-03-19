var ctx = document.getElementById('myChart').getContext('2d');
var oReq = new XMLHttpRequest();
function reqListener () {
    var results = Papa.parse(this.responseText,{});
    var results = results.data;
    let headers = [];
    let mathScores = [];
    let readingScores = [];
    let writingScores = [];
    let genders = [];
    let labels = [];
    for (let i=0;i < results.length;i++) {
        if (i == 0) {
            headers.push(results[i][5]);
            headers.push(results[i][6]);
            headers.push(results[i][7]);
        }
        else {
            labels.push(String(i));
            genders.push(results[i][0]);
            let mathScore = Number(results[i][5]);
            let readingScore = Number(results[i][6]);
            let writingScore = Number(results[i][7]);
            mathScores.push(mathScore);
            readingScores.push(readingScore);
            writingScores.push(writingScore);
        }
    }
    let size = 40;
    console.log(results)
    let data = {
        labels: labels.slice(0,size),
        datasets: [{
            label: 'Math Scores',
            data: mathScores.slice(0,size),
            backgroundColor: "Blue",
            borderColor: "Blue",
            fill: false
        },
        {
            label: 'Reading Scores',
            data: readingScores.slice(0,size),
            backgroundColor: "Green",
            borderColor: "Green",
            fill: false
        },
        {
            label: 'Writing Scores',
            data: writingScores.slice(0,size),
            backgroundColor: "Pink",
            borderColor: "Pink",
            fill: false
        }]
    }
    let options = {
        tooltips: {
            cornerRadius: 0,
            caretSize: 0,
            xPadding: 16,
            yPadding: 10,
            backgroundColor: 'rgba(0, 150, 100, 0.9)',
            titleFontStyle: 'normal',
            titleMarginBottom: 15
        },
        title: {
            display: true,
            text: 'SAT Test Results'
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgb(255, 255, 255)",
                }
            }],
            yAxes: [{
                gridLines: {
                    color: "rgb(255, 255, 255)",
                }   
            }]
        }    
    }
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });  
    console.log(mathScores)  
}

oReq.addEventListener("load", reqListener);
oReq.open("GET", "export/StudentsPerformance.csv");
oReq.send();

