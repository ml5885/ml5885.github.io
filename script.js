const projects = document.getElementById("projects");
const projectImages = document.querySelectorAll(".project-image");

projects.addEventListener("mouseover", (event) => {
	const target = event.target;
	if (
		target.tagName === "LI" ||
		target.tagName === "A" ||
		target.tagName === "P"
	) {
		const projectImage = target.querySelector(".project-image");
		if (projectImage) {
			projectImage.style.display = "block";
		}
	}
});

projects.addEventListener("mousemove", (event) => {
	const target = event.target;
	if (
		target.tagName === "LI" ||
		target.tagName === "A" ||
		target.tagName === "P"
	) {
		const projectImage = target.querySelector(".project-image");
		if (projectImage) {
			projectImage.style.top = `${event.clientY - 170}px`;
			projectImage.style.left = `${event.clientX + 250}px`;
		}
	}
});

projects.addEventListener("mouseout", () => {
	projectImages.forEach((image) => {
		image.style.display = "none";
	});
});
