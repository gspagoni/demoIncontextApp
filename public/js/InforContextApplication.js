$(document).ready(function () {    

    UnRegisterMessage = function () {
        var messageType = $("#txtSbcMessageType").val();
        infor.companyon.client.unRegisterMessageHandler(messageType)
    }

    RegisterMessage = function () {
        var messageType = $("#txtSbcMessageType").val();
        infor.companyon.client.registerMessageHandler(messageType, function (contextData) {
            ShowMessage(contextData);
        }, "");
    }

    ShowMessage = function (contextData) {
        //$("#paramessage").text(JSON.stringify(contextData));
        $("#paramessage").html(Dump(contextData, 2));
    }

    SetHeight = function (contextData) {
        //Height Dinamic
        var data = {}; data.height = ($("#main").outerHeight(true) + 50) + "px";
        infor.companyon.client.sendMessage(window.name, data);
    }

    Dump = function (arr, level) {
        var dumped_text = "";
        if (!level) level = 0;

        //The padding given at the beginning of the line.
        var level_padding = "";
        for (var j = 0; j < level + 1; j++)

            level_padding += "&nbsp;";
        if (typeof (arr) == 'object') { //Array/Hashes/Objects 
            for (var item in arr) {
                var value = arr[item];

                if (typeof (value) == 'object') { //If it is an array,
                    dumped_text += "<br/><b>" + level_padding + item + "</b><br/>";
                    dumped_text += this.dump(value, level + 1);
                } else {
                    dumped_text += level_padding + "" + item + " = \"" + value + "\"\n<br/>";
                }
            }
        } else { //Stings/Chars/Numbers etc.
            dumped_text = "===>" + arr + "<===(" + typeof (arr) + ")";
        }
        return dumped_text;
    } 

    //Width for Ritght Pane
    var width = $("#main").css("width");
    var widthInt = width.substring(0, width.length - 2);
    if (widthInt < 300) {
        $("#tab1").css("width", "270px");
        $("#tab2").css("width", "270px");
        $("#txtMessage").css("width", "270px");
    }

    //Height Dinamic
    var data = {}; data.height = ($("#main").outerHeight(true) + 50) + "px";
    infor.companyon.client.sendMessage(window.name, data);
});