const projectItems = document.querySelectorAll("#projects li");

projectItems.forEach((item) => {
	let activeImage = null;
	let mouseX = 0,
		mouseY = 0;
	let imageX = 0,
		imageY = 0;
	const speed = 0.075;
	let isAnimating = false;

	function animate() {
		if (!isAnimating) return;

		if (activeImage) {
			const imageHeight = activeImage.offsetHeight;

			const paddingX = 20;
			const paddingY = 20;

			const desiredImageX = mouseX + paddingX;
			const desiredImageY = mouseY - paddingY;

			imageX += (desiredImageX - imageX) * speed;
			imageY += (desiredImageY - imageY) * speed;

			activeImage.style.left = `${imageX}px`;
			activeImage.style.top = `${imageY - imageHeight}px`;
		}

		requestAnimationFrame(animate);
	}

	item.addEventListener("mouseenter", (event) => {
		const projectImage = item.querySelector(".project-image");
		if (projectImage) {
			activeImage = projectImage;

			projectImage.style.display = "block";

			projectImage.style.animation = "bounceIn 0.3s ease forwards";

			mouseX = event.clientX;
			mouseY = event.clientY;
			imageX = mouseX + 20;
			imageY = mouseY - 20;

			isAnimating = true;
			animate();
		}
	});

	item.addEventListener("mousemove", (event) => {
		mouseX = event.clientX;
		mouseY = event.clientY;

		if (activeImage) {
			const hoveredElement = document.elementFromPoint(mouseX, mouseY);
			if (hoveredElement.closest("a")) {
				if (activeImage.style.display !== "none") {
					activeImage.style.display = "none";
				}
			} else {
				if (activeImage.style.display === "none") {
					activeImage.style.display = "block";
				}
			}
		}
	});

	item.addEventListener("mouseleave", () => {
		if (activeImage) {
			activeImage.style.display = "none";
			activeImage = null;
			isAnimating = false;
		}
	});
});

const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
	document.body.classList.toggle("dark-mode");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		const target = document.querySelector(this.getAttribute("href"));
		if (target) {
			target.scrollIntoView({
				behavior: "smooth",
			});
		}
	});
});
