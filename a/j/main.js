
// Initialisation

var canvasDiv = document.getElementById('particle-canvas');
var options = {
  particleColor: '#fff',
  background: 'a/i/gfr_media.jpg',
  interactive: true,
  speed: 'fast',
  density: 'low'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);