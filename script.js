const images = document.getElementById('images');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn')


function getID(e) {
    if (e.target.classList.contains('img')) {
        const imgID = e.target.id;

        showModal(imgID);
    }
}

function showModal(imgID) {
    modal.classList.add('show')
}

function closeModal(e) {
    console.log(e)
    modal.classList.remove('show')

    addImages();
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