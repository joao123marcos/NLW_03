//add a referencia do meu mapa
const map = L.map('mapid').setView([-21.2439047,-44.9981574], 15.80)

//mapa add
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//criando incone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize:[58, 68],
    icoAnchor: [58, 68],
    popupAnchor: [170,1],
})

//poup create
const popup = L.popup({
    clouseButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orfanato.html?id=1" class=="choose-orfanato"> <img src="./public/images/arrow-white.svg"> </a>')
//add popuo no mapa
L.marker([-21.2439047,-44.9981574],{icon}).addTo(map)
    .bindPopup(popup)