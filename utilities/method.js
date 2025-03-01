
function innerText(id) {
    const innerText = document.getElementById(id).innerText;
    return innerText;
}

function tasksCompleted() {
    const allButtons = document.getElementsByClassName("click-btn");
    let allDisabled = true;

    for (let btn of allButtons) {
        if (!btn.disabled) {
            allDisabled = false;
            break;
        }
    }

    if (allDisabled) {
        alert("🎉 Congrates!!! You have completed all the current task.");
    }
}