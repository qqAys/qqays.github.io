function updateCurrentTime() {
    const currentTime = Date.now();
    const currentEpoch = Math.floor(currentTime / 1000);
    document.getElementById('currentEpoch').innerText = currentEpoch;
    document.getElementById('currentHumanTime').innerText = new Date(currentTime).toLocaleString();
}

function convertTimestamp() {
    let timestamp = document.getElementById('timestampInput').value;
    if (timestamp) {
        if (timestamp.length === 10) {
            timestamp *= 1000;
        }
        let date = new Date(parseInt(timestamp));
        document.getElementById('humanDateOutput').innerText = `本地时间: ${date.toLocaleString()} \n GMT时间: ${date.toUTCString()}`;
    } else {
        document.getElementById('humanDateOutput').innerText = "输入不能为空";
    }
}

function convertHumanDate() {
    let date = document.getElementById('dateInput').value;
    let time = document.getElementById('timeInput').value;
    if (date && time) {
        let dateTime = new Date(date + 'T' + time + ':00');
        let timestamp = Math.floor(dateTime.getTime() / 1000);
        document.getElementById('timestampOutput').innerText = `时间戳: ${timestamp} \n 时间戳(毫秒ms): ${timestamp * 1000}`;
    } else {
        document.getElementById('timestampOutput').innerText = "输入不能为空";
    }
}

setInterval(updateCurrentTime, 1000);
updateCurrentTime();