const cardsData1 = [
    { id: 1, top: 0, left: 0, img: 'https://via.placeholder.com/150', text: 'Programming Language Simple', githubLink: 'https://github.com/CcpC-cuj/Voice_Bot-Py' },
    { id: 2, top: 50, left: 120, img: 'https://via.placeholder.com/150', text: 'Programming Language Concept of DSA/MySQL/DBMS', githubLink: 'https://github.com/CcpC-cuj/Algo_Visuals' },
    { id: 3, top: 100, left: 240, img: 'https://via.placeholder.com/150', text: 'Web-Development', githubLink: 'https://github.com/CcpC-cuj/Webdev' },
    { id: 4, top: 150, left: 360, img: 'https://via.placeholder.com/150', text: 'AI/Ml', githubLink: 'https://github.com/CcpC-cuj/Climate_Agri_Optimize_Predict' },
    { id: 5, top: 200, left: 480, img: 'https://via.placeholder.com/150', text: 'Graphics', githubLink: '#' },
    { id: 6, top: 250, left: 600, img: 'https://via.placeholder.com/150', text: 'UI/UX', githubLink: '#' }
];
// const cardsData2 = [
//     { id: 1, top: 0, left: 0, img: 'https://via.placeholder.com/150', text: 'Card A Text' },
//     { id: 2, top: 50, left: 120, img: 'https://via.placeholder.com/150', text: 'Card B Text' },
//     { id: 3, top: 100, left: 240, img: 'https://via.placeholder.com/150', text: 'Card C Text' },
//     { id: 4, top: 150, left: 360, img: 'https://via.placeholder.com/150', text: 'Card D Text' },
//     { id: 5, top: 200, left: 480, img: 'https://via.placeholder.com/150', text: 'Card E Text' }
// ];

function createCards(containerId, cardsData) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear existing cards

    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.style.top = `${card.top}px`;
        cardElement.style.left = `${card.left}px`;

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');

        const imgElement = document.createElement('img');
        imgElement.src = card.img;
        cardFront.appendChild(imgElement);

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');

        cardBack.innerHTML = `
        <div class="text">
            ${card.text}
            <a href="${card.githubLink}" target="_blank"><i class="fab fa-github"></i></a>
        </div>
    `;

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardElement.appendChild(cardInner);
        container.appendChild(cardElement);
    });
}

function showCards(containerId) {
    // Hide all containers
    const containers = document.querySelectorAll('.cards-container');
    containers.forEach(container => {
        container.style.display = 'none';
    });

    // Display the selected container and create cards
    const selectedContainer = document.getElementById(containerId);
    selectedContainer.style.display = 'block';

    if (containerId === 'container1') {
        createCards(containerId, cardsData1);
    } else if (containerId === 'container2') {
        createCards(containerId, cardsData2);
    }
}

// Show the first set of cards by default
showCards('container1');
