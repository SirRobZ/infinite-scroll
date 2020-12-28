const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

//Unsplash API
const count = 10;
const apiKey= 'V-bcaSUb2X3DA1iTCCyA81GLP7BFGChKUInY1Ji21jE';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;



//Set Attributes on DOM elements
function setAttributes(elements, attributes) {
    for (const key in attributes) {
        elements.setAttribute(key, attributes[key])
    }
}

//Create elements and link to DOM
function displayPhotos() {
    photosArray.forEach((photo) => {
        //Create <a> to link to unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        });
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        // Create img for photo
        const img = document.createElement('img');
        setAttributes (img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });
        // img.setAttribute('src', photo.url.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);
        //Put <img> inside <a>, then put both inside image container <div>
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}


//Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch(error) {
        //Catch error here
    }
}

//On Load
getPhotos();