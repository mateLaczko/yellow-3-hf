var code = location.href.split("=")[1];
getJson(
    "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/at.1.json",
    function (tableData) {
        fillTable(tableData);
    }
);

function fillTable(rows) {
    // 
}