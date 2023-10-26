const image = document.getElementById("enlarge-image");

image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1.2)"; // Increase the scale to make it bigger
});

image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1)"; // Revert to the original size
});