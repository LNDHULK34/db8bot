exports.run = function (client, message, args) {
    message.channel.send((Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails');
}