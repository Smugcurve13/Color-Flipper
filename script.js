let r , g , b;

function randColor() {
    r = (Math.floor(Math.random() * 255) + 1)
    g = (Math.floor(Math.random() * 255) + 1)
    b = (Math.floor(Math.random() * 255) + 1)

    let color = (`rgb(${r},${g},${b})`)

    document.body.style.backgroundColor = color;
    document.getElementById("colorDisplay").textContent = `Background Color: ${color}`
}

function rbgToHex(r,g,b) {
    let red = r.toString(16).padStart(2,'0');
    let green = g.toString(16).padStart(2,'0');
    let blue = b.toString(16).padStart(2,'0');

    let hexColor = '#'+red+green+blue
    return hexColor
}

randColor()

document.getElementById('colorBtn').addEventListener("click", function() {
    randColor()
    document.getElementById('hexDisplay').textContent='';
})


document.getElementById('hexBtn').addEventListener("click", function() {
    let hexColor = rbgToHex(r,g,b);
    document.getElementById("hexDisplay").textContent = `${hexColor}`
});


