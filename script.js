// app.js
const imageUrls = [
  { url: 'https://example.com/image1.jpg' },
  { url: 'https://example.com/image2.jpg' },
  // Add more image URLs as needed
];

function downloadImage(image) {
  return new Promise((resolve, reject) => {
    const imgElement = new Image();
    imgElement.onload = () => resolve(imgElement);
    imgElement.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
    imgElement.src = image.url;
  });
}

document.getElementById('download-images-button').addEventListener('click', () => {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = ''; // Clear previous images

  Promise.all(imageUrls.map(downloadImage))
    .then(images => {
      images.forEach(img => {
        outputDiv.appendChild(img);
      });
    })
    .catch(error => console.error(error));
});

// Your GitHub repo name: parallel-processing-promises-Princegautam741
