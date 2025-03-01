document.getElementById("dashboard").addEventListener("click", function(){
    window.location.href="../blog.html";
})

document.getElementById("date-main").innerText =new Date().toDateString();

const buttons = document.getElementsByClassName("click-btn");
for(let button of buttons){
    button.addEventListener("click", function(event){
        event.preventDefault();

        let workDone = parseFloat(innerText("work-done"));
        let taskAssigned = parseFloat(innerText("task-assigned"));
        
        const newWorkDone = workDone + 1;
        const newTaskAssigned = taskAssigned - 1;

        alert('Board updated Successfully')

        document.getElementById("work-done").innerText = newWorkDone;
        document.getElementById("task-assigned").innerText = newTaskAssigned;

        const title = button.closest(".task").querySelector(".task-title").innerText;

        const activityContainer = document.getElementById("activity-container");

        const p = document.createElement("p");
        p.classList.add("text-xs", "p-2", "bg-whites-bg", "rounded-lg", "mb-3");
        p.innerHTML = `You have Complete The Task ${title} at ${new Date().toLocaleTimeString()}.`

        activityContainer.appendChild(p);            

        button.disabled = true;
        button.classList.add("bg-slate-300")


        tasksCompleted();
    })
    
}

const clearHistory = document.getElementById("clear-history").addEventListener("click", function(event){
    event.preventDefault();

    document.getElementById("activity-container").innerHTML="";
})