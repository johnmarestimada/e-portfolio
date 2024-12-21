// Project Carousel
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");

    const projects = [
        {
            title: "Multi-Board TicTacToe",
            description: "Multi-Board TicTacToe is a strategic version of Tic Tac Toe played on a 3x3 grid of smaller Tic Tac Toe boards. Winning a small board places your symbol on the corresponding spot of a larger board. The first player to align three symbols on the larger board wins. This Java implementation uses Swing to create an interactive graphical interface, allowing players to click buttons to make their moves, with real-time updates and winner detection.",
            imageSrc: "assets/images/TicTacTOe.png",
            githubLink: "https://drive.google.com/drive/folders/196GrgKVD1OCTn4ifGzXbYMNuIVkzqe_3?usp=sharing",
        },
        {
            title: "Python Basic Calculator",
            description: "A Simple Calculator that can solve simple eqaution such as Addtion, Subtraction, Multiplication and Division",
            imageSrc: "assets/images/calculator.png",
            githubLink: "https://drive.google.com/drive/folders/1GMPBmfBVFcQoD6XSuMfQMagG_9He7z4N?usp=sharing",
        },
        {
            title: "PARK IT Parking System",
            description: "A simple project based on Vehicle Parking System which uses Python Language with PyQT for GUI. This vehicle parking system project in Python focuses mainly on dealing with customer's parking details with their number, and slot. Also, the system allows inserting details of vehicle owners including their contact number, vehicle number, and vehicle category.",
            imageSrc: "assets/images/parking.jpg",
            githubLink: "https://drive.google.com/drive/folders/14HZNi9P3GNzJGkNst-CCZFyAUEpeLIEQ?usp=sharing",
        },
      
    ];

    // Generate carousel items
    projects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("carousel-item");
        projectItem.innerHTML = `
            <div class="carousel-image-container">
                <img src="${project.imageSrc}" alt="${project.title} Screenshot">
            </div>
            <div class="carousel-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a class="btn" href="${project.githubLink}" target="_blank" style="
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #333;
                    color: #fff;
                    font-size: 1rem;
                    text-align: center;
                    text-decoration: none;
                    border-radius: 5px;
                    border: none;
                    transition: background-color 0.3s, transform 0.3s;
                ">Check it</a>
            </div>
        `;
        carousel.appendChild(projectItem);
    });

    // Add navigation functionality
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let scrollAmount = 0;
    const scrollStep = 300; // Adjust for scroll sensitivity

    nextButton.addEventListener("click", () => {
        scrollAmount += scrollStep;
        carousel.scrollLeft = scrollAmount;
    });

    prevButton.addEventListener("click", () => {
        scrollAmount -= scrollStep;
        carousel.scrollLeft = scrollAmount;
    });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        event.preventDefault();
        alert('Please fill out all fields.');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const toggleButton = document.createElement("button");
    const navMenu = document.querySelector("nav");

    // Configure toggle button
    toggleButton.classList.add("menu-toggle");
    toggleButton.setAttribute("aria-label", "Toggle navigation menu");
    toggleButton.setAttribute("aria-expanded", "false");
    toggleButton.innerHTML = `
        <img src="assets/images/profile.jpg" alt="Logo" class="menu-logo">
        <div class="lines">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
    `;

    document.body.appendChild(toggleButton);

    // Backdrop for overlay effect
    const backdrop = document.createElement("div");
    backdrop.classList.add("menu-backdrop");
    document.body.appendChild(backdrop);

    // Toggle menu function
    function toggleMenu() {
        const isActive = header.classList.toggle("active");
        toggleButton.setAttribute("aria-expanded", isActive);
        backdrop.classList.toggle("visible", isActive);
        document.body.classList.toggle("no-scroll", isActive); // Prevent body scrolling when menu is open
    }

    // Event listeners
    toggleButton.addEventListener("click", toggleMenu);
    backdrop.addEventListener("click", toggleMenu); // Close menu on backdrop click

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && header.classList.contains("active")) {
            header.classList.remove("active");
            toggleButton.setAttribute("aria-expanded", "false");
            backdrop.classList.remove("visible");
            document.body.classList.remove("no-scroll");
        }
    });
});

