// your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// Function to download an image
function downloadImage(image) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
    img.src = image.url;
  });
}

// Function to download all images in parallel
function downloadImages(images) {
  const promises = images.map(downloadImage);
  return Promise.all(promises);
}

// Function to display downloaded images on the webpage
function displayImages(images) {
  images.forEach((image) => {
    output.appendChild(image);
  });
}

// Event listener for the button click
btn.addEventListener("click", () => {
  // Clear previous content in the output div
  output.innerHTML = "";

  // Start downloading and display images
  downloadImages(images)
    .then(displayImages)
    .catch((error) => console.error(error));
});
