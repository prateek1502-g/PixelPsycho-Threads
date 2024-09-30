document.getElementById('applyColor').addEventListener('click', function() {
    const tshirt = document.getElementById('tshirt');
    const selectedColor = document.getElementById('tshirtColor').value;
    tshirt.style.backgroundColor = selectedColor;
});

document.getElementById('orderButton').addEventListener('click', function() {
    alert('Thank you for your order! Your eco-friendly T-shirt will be on its way.');
});

function openCustomize() {
    // Code to open the customize window
    window.open('customize.html', '_blank', 'width=800,height=600');
}

function closeCustomize() {
    // Close the customization window
    window.close(); // This will close the current window opened by window.open()
}
