//页签切换效果
function setChange(name, cursel, n) {
    for (var i = 1; i <= n; i++) {
        var menu = $("#" + name + i);
        var con = $("#con_" + name + "_" + i);
        if (i == cursel) {
            $(menu).addClass("hover");
            $(con).fadeTo("slow", 1);
        }
        else {
            $(menu).removeClass("hover");
            $(con).hide();
        }
    }
}

function setContent(name, cursel, n) {
    for (var i = 1; i <= n; i++) {
        var menu = $("." + name + i);
        var con = $(".con_" + name + "_" + i);
        if (i == cursel) {
            $(menu).addClass("hover");
            $(con).show();
        }
        else {
            $(menu).removeClass("hover");
            $(con).hide();
        }
    }
}
