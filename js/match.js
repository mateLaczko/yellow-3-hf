var tableData = [];
var code = location.href.split("=")[1];
getJson(
    "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/at.1.json",
    function (data) {
        tableData = data.rounds;
        fillTable(tableData);
    }
);

document.querySelector("#title").innerHTML = "Az alábbiakban a 2017-18 évi osztrák labdarúgó bajnokság " + code + " kódú csapatának meccsei láthatók";

function fillTable(rows) {
    var table = document.querySelector("table");
    var content = "";
    for (var i = 0; i < rows.length; i++) {
        for (var j = 0; j < rows[i].matches.length; j++) {
            if (rows[i].matches[j].team1.code == code) {
                var tr = "<tr>";
                tr += "<td>" + rows[i].name.split(" ")[1] + "</td>";
                tr += "<td>" + rows[i].matches[j].date.split("-")[0] + ". " + rows[i].matches[j].date.split("-")[1] + ". " + rows[i].matches[j].date.split("-")[2] + "." + "</td>";
                tr += "<td>" + rows[i].matches[j].team2.name + "</td>";
                tr += "<td>" + rows[i].matches[j].score1 + " - " + rows[i].matches[j].score2 + "</td>";
                tr += "</tr>";
                content += tr;
                console.log(rows[i].matches[j].team1.code);
            } else if (rows[i].matches[j].team2.code == code) {
                var tr = "<tr>";
                tr += "<td>" + rows[i].name.split(" ")[1] + "</td>";
                tr += "<td>" + rows[i].matches[j].date.split("-")[0] + ". " + rows[i].matches[j].date.split("-")[1] + ". " + rows[i].matches[j].date.split("-")[2] + "." + "</td>";
                tr += "<td>" + rows[i].matches[j].team1.name + "</td>";
                tr += "<td>" + rows[i].matches[j].score2 + " - " + rows[i].matches[j].score1 + "</td>";
                tr += "</tr>";
                content += tr;
            }

        }
    }
    table.querySelector("tbody").innerHTML = content;
}