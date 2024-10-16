// Project details array
const projects = [
    {
        id: 1,
        title: "Donation_Management",
        description: "In this project every donation information is stored in a centered server. Also which organ is available, how much price, which doctors are available, what is total cost etc"
    },
    {
        id: 2,
        title: "Diabetes-Prediction-System",
        description: "In the Machine Learning course I built a prediction model where users can predict their diabetes result. Are they affected by diabetes or not."
    },
    {
        id: 3,
        title: "PetOrg",
        description: "In this project we built a site where users can adopt pets, buy pet products (food, collar-belt, medicine etc.), council medical experts and read many useful blogs. we provide some services like sitting, gromming, Take care etc."
    },
    {
        id: 4,
        title: "Programming-Contest",
        description: "In this project I built a programming contest site where users attempt ongoing contests, solving programming problems, practice problems in any language and read useful blogs. We built compiler for C and C++. "
    }
];

// Function to show the modal
function showModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    
    // Update modal content
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description;
    
    // Display the modal
    document.getElementById('project-modal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeModal();
    }
};
