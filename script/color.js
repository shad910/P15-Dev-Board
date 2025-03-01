const colors = ["bg-green-500", "bg-blue-500", "bg-red-500", "bg-violet-500", "bg-purple-500",  "bg-pink-500", "bg-orange-500", "bg-yellow-400", "bg-slate-400"];

let colorIndex = 0;

document.getElementById("changeColorBtn").addEventListener("click", function () {

    document.body.classList.remove(colors);

    document.body.classList.add(colors[colorIndex]);

    colorIndex = (colorIndex + 1) % colors.length;

});

// Learn Something new toady.
