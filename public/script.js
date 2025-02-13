document.getElementById("helloBtn").addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/hello");
    const text = await response.text();
    document.getElementById("helloResponse").textContent = text;
});

document.getElementById("capitalizeBtn").addEventListener("click", async () => {
    const textInput = document.getElementById("textInput").value;
    const response = await fetch("http://localhost:3000/capitalize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: textInput }) 
    });
    
    const text = await response.text();
    document.getElementById("capitalizeResponse").textContent = text;
});
