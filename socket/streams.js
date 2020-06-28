module.exports = function(io) {
    io.on('connection', socket => {
       socket.on('refresh', (data) => {
          io.emit('refreshPage', {})
       });
    });
};