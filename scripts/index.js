let capaian = $('#capaian');
capaian.on('click', function (e) {
  window.location.href = 'templates/cp.html';
});

let materi = $('#materi');
materi.on('click', function (e) {
  window.location.href = 'templates/materi.html';
});
let video = $('#video');
video.on('click', function (e) {
  window.location.href = 'video.html';
});
let soal = $('#soal');
soal.on('click', function (e) {
  window.location.href = 'soal.html';
});

// float
let float = $('#floatBtn');
float.on('click', function () {
  window.history.back();
});

// icon
let iconCp = $('#cpIcon');
let delay = 5000;
setTimeout(function () {
  iconCp.src = 'icon/CP.gif';
}, delay);
