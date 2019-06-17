/**
 * 是否是中文的验证规则
 * 参数，输入的值
 * 返回 正确为true，不正确为false
 */
function isChinese(value) {
    var re = /^[\u4e00-\u9fa5]+$/;
    if (!re.test(value)) {
        return false;
    } else {
        return true;
    }
}

/**
 * 手机号码的验证规则
 * 参数，输入的手机号码
 * 返回 正确为true，不正确为false
 */
function isPhoneNo(phone) {
    var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    if (!reg.test(phone)) {
        return false;
    } else {
        return true;
    }
}

/**
 * 身份证号码的验证规则
 * 参数，输入的证件号码
 * 返回 正确为true，不正确为false
 */
function isIdCardNo(value) {
    if ((value == null || (value = $.trim(value)).length == 0)) {
        return false;
    }
    value = value.toUpperCase();
    var rID = /^(\d{15}|\d{17}(\d|X))$/;
    var bVal = rID.test(value);

    if (!bVal) {
        return false;
    }
    var yyyy = value.slice(6, 10), mm = value.slice(10, 12) - 1, dd = value.slice(12, 14);
    var d = new Date(yyyy, mm, dd),
        year = d.getFullYear(),
        mon = d.getMonth(),
        day = d.getDate(),
        now = new Date();
    if (year != yyyy || mon != mm || day != dd || d > now || now.getFullYear() - year > 140) {
        return false;
    }
    if (bVal && value.length == 18) {
        var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        var VC = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
        var Ai = 0;
        var AiWi = 0;
        for (var i = 0; i < 17; i++) {
            Ai = parseInt(value.substring(i, i + 1));
            AiWi += Ai * Wi[i];
        }
        var mVal = AiWi % 11;

        if (VC[mVal] != value.substring(17, 18)) {
            bVal = false;
        }
    }
    if (!bVal) {
        return false;
    }
    return true;
}