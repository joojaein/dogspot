window.addEventListener("load", function () {
    var main = document.querySelector("main");
    var chartOpts = main.querySelector("#chart-option");
    var termCategory = chartOpts.querySelector("select");
    var inputBeginDate = chartOpts.querySelector("input[name='date_begin']");
    var inputEndDate = chartOpts.querySelector("input[name='date_end']");

    var tableSc = main.querySelector("#statistic-table");
    var table = tableSc.querySelector("table");

    google.charts.setOnLoadCallback(drawChart);



    function drawTable() {
        var txt;
        var tr = document.createElement("tr");
        var thead = table.querySelector("thead");
        var tbody = table.querySelector("tbody");
        thead.innerHTML = "";
        tbody.innerHTML = "";

        for (var i = 0; i < dataVal[0].length; i++) {
            var td = document.createElement("td");
            if (i == 0) {
                txt = document.createTextNode("기간");
            }
            else {
                var tempString = dataVal[0][i];
                if (tempString.indexOf(" ") != -1) {
                    tempString = tempString.substring(0, tempString.indexOf(" "));
                }
                txt = document.createTextNode(tempString);
            }
            td.appendChild(txt);
            tr.appendChild(td);
        }
        thead.append(tr);

        for (var i = 1; i < dataVal.length; i++) {
            var tbtr = document.createElement("tr");

            for (var j = 0; j < dataVal[i].length; j++) {
                var td = document.createElement("td");
                txt = document.createTextNode(dataVal[i][j]);
                td.appendChild(txt);
                tbtr.appendChild(td);
            }
            tbody.append(tbtr);
        }
    }

    chartOpts.addEventListener("click", function (evt) {
        if (evt.target.nodeName != "INPUT") return;
        if (evt.target.className != "checkbox") return;
        
        createData();
    });

    termCategory.onchange = function () {
        createData();
    }

    inputBeginDate.addEventListener("blur", function (evt) {
        chkDate();
    });

    inputEndDate.addEventListener("blur", function (evt) {
        chkDate();
    });

    function chkDate() {
        if (inputBeginDate.value == "") return;
        if (inputEndDate.value == "") return;
        if (inputBeginDate.value > inputEndDate.value) return;

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        if (dd < 10) dd = '0' + dd
        if (mm < 10) mm = '0' + mm
        today = yyyy + "-" + mm + "-" + dd;
        if (inputEndDate.value > today) return;
        createData();
    };

    function createData() {
        var tempData = [];
        var dataPart = [];
        dataPart.push('');

        var beginDate = new Date(inputBeginDate.value);
        var endDate = new Date(inputEndDate.value);

        var term = termCategory.value;

        if (term == "연도별") {
            endDate.setMonth(11);
            endDate.setDate(31);
        }
        else if (term == "월별") {
            endDate.setMonth(endDate.getMonth() + 1);
            endDate.setDate(0);
        }

        while (true) {
            if (term == "연도별") {
                var tempYear = beginDate.getYear();
                var tempYearStr = tempYear + "";
                tempYearStr = tempYearStr.substring(1, 3);
                dataPart.push(tempYearStr + "년");
                beginDate.setYear(tempYear + 1901);
            }
            else if (term == "월별") {
                var tempYear = beginDate.getYear();
                var tempYearStr = tempYear + "";
                tempYearStr = tempYearStr.substring(1, 3);
                var tempMonth = beginDate.getMonth() + 1;
                if (tempMonth < 10)
                    dataPart.push(tempYearStr + "년 0" + tempMonth + "월");
                else
                    dataPart.push(tempYearStr + "년 " + tempMonth + "월");
                beginDate.setMonth(tempMonth);
            }
            else if (term == "일별") {
                var tempMonth = beginDate.getMonth() + 1;
                var tempDate = beginDate.getDate();
                if (tempMonth < 10) {
                    if (tempDate < 10)
                        dataPart.push("0" + tempMonth + "월 0" + tempDate + "일");
                    else
                        dataPart.push("0" + tempMonth + "월 " + tempDate + "일");
                }
                else {
                    if (tempDate < 10)
                        dataPart.push(tempMonth + "월 0" + tempDate + "일");
                    else
                        dataPart.push(tempMonth + "월 " + tempDate + "일");
                }
                beginDate.setDate(tempDate + 1);
            }
            else {
                break;
            }
            if (beginDate > endDate) {
                break;
            }
        }

        tempData.push(dataPart);
        var chks = chartOpts.querySelectorAll("input[type='checkbox']")
        for (var i = 0; i < chks.length; i++) {
            if (chks[i].checked) {
                dataPart = [];
                dataPart.push(chks[i].name);

                for (var j = 0; j < tempData[0].length; j++) {
                    dataPart.push(j * 5);
                }

                tempData.push(dataPart);
            }
        }

        dataVal = [];
        for (var i = 0; i < tempData[0].length; i++) {
            dataPart = [];
            for (var j = 0; j < tempData.length; j++) {
                dataPart.push(tempData[j][i]);
            }
            dataVal.push(dataPart);
        }

        google.charts.setOnLoadCallback(drawChart());
        drawTable();

    }

});

