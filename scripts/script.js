var content = '';

function print(data) {

    content += data + '<br/>';

    document.getElementById('output').innerHTML = content;
}

function unsavedPrint(data) {

    document.getElementById('output').innerHTML = data;
}

function min(a, b) {

    return a < b ? a : b;
}

function max(a, b) {

    return a > b ? a : b;
}

function getInput(id) {

    return +(document.getElementById(id).value);
}


function checkPointQuarter() {

    var x = getInput('x');
    var y = getInput('y');

    var secondQuarter = (x, y) => { return x < 0 && y > 0 ? 'Second' : 'undefined'; };
    var firstQuarter = (x, y) => { return x > 0 && y > 0 ? 'First' : secondQuarter(x, y); };

    print(firstQuarter(x, y));
}