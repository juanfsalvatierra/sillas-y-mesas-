window.onload = function () {
	const botonDerecho = document.querySelector(".right")
	const botonArriba = document.querySelector(".up")
	const botonIzquierdo = document.querySelector(".left")
	const botonAbajo = document.querySelector(".down")
	const botonRandom = document.querySelector(".random")

	const circulo = document.querySelector(".circle")
 	
 	const botonRojo = document.querySelector(".red")
 	const botonVerde = document.querySelector(".green")
 	const botonAzul = document.querySelector(".blue")

 	let posicionHorizontal = 0
 	let posicionVertical = 0 

 	const MOVIMIENTO = 50

 	function moverCirculoDerecha() {
 		posicionHorizontal += MOVIMIENTO

 		circulo.style.marginLeft = posicionHorizontal
 	}	

 	function moverCirculoAbajo() {
 		posicionVertical += MOVIMIENTO

 		circulo.style.marginTop = posicionVertical
 	}

 	function moverCirculoArriba() {
 		posicionVertical -= MOVIMIENTO

 		circulo.style.marginTop = posicionVertical
 	}

 	function moverCirculoIzquierda() {
		posicionHorizontal -= MOVIMIENTO

 		 circulo.style.marginLeft = posicionHorizontal
 	}


 	botonDerecho.onclick = moverCirculoDerecha
 	botonAbajo.onclick = moverCirculoAbajo
 	botonArriba.onclick = moverCirculoArriba
 	botonIzquierdo.onclick = moverCirculoIzquierda


 	document.onkeydown = function (event) {
 		switch(event.key) {
 			case "ArrowRight":
 				return moverCirculoDerecha()

 			case "ArrowLeft":
 				return moverCirculoIzquierda()
 			
 			case "ArrowUp":
 				return moverCirculoArriba()
 			
 			case "ArrowDown":
 				return moverCirculoAbajo()
 
 			case "r":
 				return rojear()

 			case "v":
 				return verdear()
 			
 			case "a":
 				return azulear()
 			case "w":
 				return moverAleatorio
 			}
 	}

 	function verdear () {
 		circulo.style.background = "green"
 	}

 	function rojear () {
 		circulo.style.background = "red"
 	}

 	function azulear () {
 		circulo.style.background = "blue"
 	}
 	
 	botonVerde.onclick = verdear

 	botonAzul.onclick = azulear

 	botonRojo.onclick = rojear
	
 	function moverAleatorio () {
		const movimientos = [
			"arriba",
			"abajo",
			"derecha",
			"izquierda"
		]

		let numeroRandom = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
		
		let movimientoRandom = movimientos[numeroRandom]

		if (movimientoRandom === "arriba") {
			return moverCirculoArriba()
		} else if (movimientoRandom === "abajo") {
			return moverCirculoAbajo()
		} else if (movimientoRandom === "derecha") {
			return moverCirculoDerecha()
		} else if (movimientoRandom === "izquierda") {
			return moverCirculoIzquierda()
		}
	}

	botonRandom.onclick = function() { 
		setInterval(moverAleatorio, 500)
	}
}


 