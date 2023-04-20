function convertToFahrenheit() {
    var celsius = document.getElementById("celsiusInput").value;
    var fahrenheit = (9 / 5) * celsius + 32;

    alert("Цельсий: " + celsius + ", Фаренгейт: " + fahrenheit.toFixed(1));
}