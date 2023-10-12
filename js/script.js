let caraPenyelesaian = document.getElementById('cara-penyelesaian');
let tombolHitung = document.getElementById('btn-konversi');
let tombolReset = document.getElementById('btn-reset');

let inputanAtas = document.getElementById('suhu-atas');
let inputanBawah = document.getElementById('suhu-bawah');

let nilai = '';
var hasilSuhu;

inputanAtas.addEventListener('click', function(){
    nilai = 'celcius'
});

inputanBawah.addEventListener('click', function(){
    nilai = 'fahren'
});

tombolHitung.addEventListener('click', function(){
    if (nilai == 'celcius'){
        hasilSuhu = (inputanAtas.value * 9/5) + 32;
        inputanBawah.value = hasilSuhu;
        caraPenyelesaian.innerText = "(" + inputanAtas.value + "°C * 9/5) + 32 = " + hasilSuhu.toFixed(1) + "°F";
    } else if (nilai == 'fahren'){
        hasilSuhu = 5/9 * (inputanBawah.value - 32);
        inputanAtas.value = hasilSuhu;
        caraPenyelesaian.innerText = "5/9 * (" + inputanBawah.value + "°F - 32) = " + hasilSuhu.toFixed(1) + "°C";
    }
});

tombolReset.addEventListener('click', function(){
    inputanAtas.value = '';
    inputanBawah.value = '';
    caraPenyelesaian.innerHTML = '';
});