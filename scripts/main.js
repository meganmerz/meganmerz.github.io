function main() {
    console.log("reeady");

    // document.querySelector("#docker").onclick = (event) => {
    //     collapse(document.querySelector("#docker"));
    // };

    document.querySelector("#thesis").onclick = (event) => {
        collapse(document.querySelector("#thesis"));
    };

    // document.querySelector("#gitlab").onclick = (event) => {
    //     collapse(document.querySelector("#gitlab"));
    // };

    document.querySelector("#processor").onclick = (event) => {
        collapse(document.querySelector("#processor"));
    };

}

function collapse(label) {
        sibling = label.nextElementSibling;
        if (sibling.style.display === "block") {
            sibling.style.display = "none";
            label.innerHTML = label.innerHTML.replace("(collapse)", "(expand)");
        } else {
            sibling.style.display = "block";
            label.innerHTML = label.innerHTML.replace("(expand)", "(collapse)");
        }
}


main();