const images = document.getElementById('images');


function addImages() {
    fetch('https://boiling-refuge-66454.herokuapp.com/images')
        .then(res => res.json())
        .then(data => {

            const pictures = data.map(index => index.url);

            for (let i = 0; i <= 10; i++) {
                if (pictures[i] !== undefined) {
                    console.log(pictures[i]);
                    pic = document.createElement('img');
                    pic.className = 'img';
                    pic.src = `${pictures[i]}`;
                    images.appendChild(pic)
                } else {
                    break;
                }
            }
        })
}

addImages();