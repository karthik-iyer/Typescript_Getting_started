"use strict";
window.onload = function () {
    var calc = new Calculator();
    calc.init('X', 'Y', 'Output');
};
class Calculator {
    init(x, y, output) {
        this.x = document.getElementById(x);
        this.y = document.getElementById(y);
        this.output = document.getElementById(output);
        this.wireEvents();
    }
    wireEvents() {
        document.getElementById('Add').addEventListener('click', event => {
            this.output.innerHTML = this.add(parseInt(this.x.value), parseInt(this.y.value)).toString();
        });
        document.getElementById('Subtract').addEventListener('click', event => {
            this.output.innerHTML = this.subtract(parseInt(this.x.value), parseInt(this.y.value)).toString();
        });
    }
    add(x, y) {
        return x + y;
    }
    subtract(x, y) {
        return x - y;
    }
}
