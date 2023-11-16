function inicializar() {
    const display = document.createElement('date-range-display');
    document.getElementById('saida').appendChild(display);
    
    var input = document.getElementById('datas');
    input.addEventListener('change', () => {
        display.setAttribute('value', input.value);
    });
}