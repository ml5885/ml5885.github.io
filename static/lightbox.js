(function () {
	const overlay = document.createElement("div");
	overlay.className = "lightbox";
	overlay.innerHTML = `<img alt="" />`;
	document.body.appendChild(overlay);

	const overlayImg = overlay.querySelector("img");

	document.querySelectorAll(".pub-thumb img").forEach((img) => {
		img.addEventListener("click", () => {
			overlayImg.src = img.src;
			overlayImg.alt = img.alt;
			overlay.classList.add("open");
		});
	});

	overlay.addEventListener("click", (e) => {
		if (e.target !== overlayImg) overlay.classList.remove("open");
	});

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") overlay.classList.remove("open");
	});
})();
