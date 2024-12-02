function calculate(id) {
    const btn = document.getElementById(id);
    const idName = btn.getAttribute("id");
    let firstIn = document.getElementById(idName + "A");
    let secondIn = document.getElementById(idName + "B");
    const v1 = firstIn.value;
    const v2 = secondIn.value;
    if (idName==="triangle") {
        let total = multiHalf(v1, v2);
        show(idName, total);
    }

    else {
        let total = multi(v1, v2);
        show(idName, total);
    }
}

function multiHalf (a,b) {
    return 0.5 * a * b;
}

function multi(a, b) {
    return a * b;
}

function show(i,t) {
    const ol = document.getElementById("result");
    const li = document.createElement("li");
    li.innerHTML = `${i}= ${t}cm<sup>2</sup>`;
    ol.appendChild(li);
}