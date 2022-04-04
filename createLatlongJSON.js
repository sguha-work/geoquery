const fs = require('fs');
const latLongList = [
    [12.861788, 77.614018],
    [12.862339, 77.614679],
    [12.863476, 77.615089],
    [12.866738, 77.616297],
    [12.867834, 77.616236],
    [12.868977, 77.616253],
    [12.872952, 77.616588],
    [12.875983, 77.616924],
    [12.87622, 77.613946],
    [12.876214, 77.61291],
    [12.876943, 77.610148],
    [12.877092, 77.609044],
    [12.878767, 77.609673],
    [12.88063, 77.610015],
    [12.881476, 77.610066]
];
let year = 2022,
    month = 4,
    dateNumber = 3,
    hour = 9,
    minute = 10;
let outputData = [];
latLongList.forEach((data) => {
    let date = new Date(year, month, dateNumber, hour, minute);
    outputData.push({
        "loc": `${data[0]},${data[1]}`,
        "timestamp": date.getTime()
    });
    minute = ((minute + 10) > 59) ? 0 : (minute + 10);
});
try {
    fs.writeFileSync('output.json', JSON.stringify(outputData));
} catch (err) {
    console.error(err);
}