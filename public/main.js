const peer = new Peer({
  host: 'localhost',
  port: 9000,
  path: '/peerjs'
});

peer.on('open', id => {
  document.getElementById('peer-id').value = id;
});
