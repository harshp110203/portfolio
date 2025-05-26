// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Fetch GitHub Projects
fetch('https://api.github.com/users/YOUR_GITHUB_USERNAME/repos')
    .then(response => response.json())
    .then(repos => {
        const container = document.getElementById('projects-container');
        repos.forEach(repo => {
            container.innerHTML += `
                <div class="project-card" data-aos="zoom-in">
                    <h3>${repo.name}</h3>
                    <p>${repo.description || ''}</p>
                    <a href="${repo.html_url}" target="_blank">View Project</a>
                </div>
            `;
        });
    });

// Initialize Animations
AOS.init({
    duration: 1000,
    once: true
});
