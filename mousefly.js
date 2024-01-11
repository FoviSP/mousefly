function tick(R){
	x_r = R*Math.sin(ticks)
	y_r = R*Math.cos(ticks)
	rot = ticks * R % 360;
	
	fly.style.left = x - x_r % R
	fly.style.top = y - y_r % R
	fly.style.transform = 'rotate('+rot+'deg)'
	ticks+=0.1;
}

window.addEventListener('mousemove', (e)=>{
	x = e.clientX-fly.offsetWidth/2
	y = e.clientY-fly.offsetHeight/2
})

window.addEventListener('load', () => {
	ticks = 0
	R = 50
	x = window.clientWidth/2
	y = window.clientHeight/2
	
	fly = document.createElement('div')
	fly.style.position = 'absolute'
	fly.style.width = "20px"
	fly.style.height = "20px"
	
	fly.style.left = x
	fly.style.top = y
	
	fly.style.backgroundImage = 'url("https://i.pinimg.com/550x/20/24/d3/2024d3ca44d227fded566e24c0ac3cc6.jpg")'
	fly.style.backgroundSize = '100% 100%'
	fly.style.transform = 'rotate(0deg)'
	
	document.body.appendChild(fly)
	
	setInterval(tick,50,R)
})