
let checkbox = document.getElementById("cbox")
let linkCode = document.getElementById("linkCode")
let secretCode = document.getElementById("secretCode")

linkCode.addEventListener("click", () => {
	(!checkbox.checked)
		? alert("Para obtener un código de descuento debe aceptar los térmnos y codiciones.")
		: secretCode.classList.toggle('hidden')
})

