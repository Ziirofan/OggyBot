exports.run = (bot, msg, args) => {
    var nbr=0;
    nbr= Math.floor(Math.random() * (100-0)+0);
    msg.channel.send(msg.author.username+' a faim à '+nbr+'%');
};