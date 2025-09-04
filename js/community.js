// Modal
const modal = document.getElementById("reportModal");
const reportBtn = document.getElementById("reportBtn");
const closeBtn = document.querySelector(".close");

reportBtn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }

// Incident Data Array
let incidents = [];

// Form Submit
const form = document.getElementById("incidentForm");
const incidentList = document.getElementById("incidentList");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = document.getElementById("city").value;
    const risk = document.getElementById("risk").value;
    const description = document.getElementById("description").value;

    const incident = { city, risk, description, upvotes: 0 };
    incidents.push(incident);
    form.reset();
    modal.style.display = "none";
    renderIncidents();
});

// Render Incident Cards
function renderIncidents() {
    incidentList.innerHTML = "";
    incidents.forEach((inc, index) => {
        const card = document.createElement("div");
        card.classList.add("incident-card");
        card.innerHTML = `
            <h3>${inc.city} - ${inc.risk.toUpperCase()}</h3>
            <p>${inc.description}</p>
            <div class="upvote" onclick="upvote(${index})">Upvote (${inc.upvotes})</div>
        `;
        incidentList.appendChild(card);
    });
}

// Upvote Function
function upvote(index) {
    incidents[index].upvotes++;
    renderIncidents();
}
