// 將當地時間轉換為目標時間 例如，想計算某地在台灣的時間，function 帶入台灣時區，假設某地為美國時間20190812 000000，return targetDate在台時間 20190812 120000
function getTargetTime(timeZone = 8) {
    var localDate = new Date();

    // 當地在目標時區的時間 = 當地時間 - 兩地相差的時間
    var minusDate = localDate - getDiffTime(localDate, timeZone);

    // 重新設定時間物件
    var targetDate = new Date(minusDate);

    return targetDate;
}

/**
 * 取得當地時區(localTimeZone)和目標時區(timeZone)相差的時間
 * @returns diffTime 相差時間
 */
function getDiffTime(localDate, timeZone = 8)
{
    // 當地時區
    var localTimeZone = localDate.getTimezoneOffset() / (-60);

    // 兩地相差的時間
    var diffTime = (localTimeZone - timeZone) * 60 * 60 * 1000;

    return diffTime;
}

/**
 *
 * @param {string} target 倒數結束的時間，請代入'Y/m/d H:i:s'的格式
 *
 * return countTime: 距離倒數時間還有多久，單位為毫秒
 */
function getCountDown(target) {

    // 當地與格林威治時間差，以分鐘為單位。
    var localTimeZone = new Date().getTimezoneOffset() / -1;

    // 台灣與格林威治時間差，以分鐘為單位。
    var taiwanZone = 8 * 60;

    // 兩地時間相差多少分鐘
    var minusTime = localTimeZone - taiwanZone;

    var nowTime = new Date().getTime();

    // 計算target與當地現在時間相差多久
    var countTime = (Date.parse(target) + minusTime * 60 * 1000) - nowTime;

    return countTime;
}

function isTargetCountryOrNot($country) {
    var targetDate = new Date();
    switch ($country) {
        case 'USA':
            if (getDiffTime(targetDate, -5) === 0 || getDiffTime(targetDate, -6) === 0 || getDiffTime(targetDate, -7) === 0 || getDiffTime(targetDate, -8) === 0) {
                return true;
            }
            break;
        case 'TW':
            if (getDiffTime(targetDate, +8) === 0) {
                return true;
            }
            break;
        default:
            return false;
    }
    return false;
}
