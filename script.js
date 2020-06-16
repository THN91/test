const images = document.getElementById('images');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const imgModal = document.getElementById('imgModal');
const comments = document.getElementById('comments')


function getID(e) {
    if (e.target.classList.contains('img')) {
        const imgID = e.target.id;

        showModal(imgID);
    }
}

function showModal(imgID) {
    modal.classList.add('show')
    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${imgID}`)
        .then(res => res.json())
        .then(item => {
            imgModal.src = `${item.url}`

            comments.innerHTML = `
            <div>18.11.2020</div>
            <p>${item.comments[0].text}</p>
            `
        })
}

function closeModal(e) {
    modal.classList.remove('show')
}

function addImages() {
    fetch('https://boiling-refuge-66454.herokuapp.com/images')
        .then(res => res.json())
        .then(data => {

            const pictures = data.map(item => item.url);
            const imgID = data.map(item => item.id);

            for (let i = 0; i <= 10; i++) {
                if (pictures[i] !== undefined) {
                    pic = document.createElement('img');
                    pic.className = 'img';
                    pic.id = `${imgID[i]}`;
                    pic.src = `${pictures[i]}`;
                    images.appendChild(pic)
                } else {
                    break;
                }
            }
        })
}

addImages();

images.addEventListener('click', getID);
closeBtn.addEventListener("click", closeModal);