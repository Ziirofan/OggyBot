
exports.run = (bot, msg, args) => {
    var message =' ';
    var nbr=0;
    for(var i = 0; i<args.length;i++){
        message += args[i];
        message += " ";
    }
    nbr= Math.floor(Math.random() * (100-0)+0);
    msg.channel.send({embed: {
        color: 3447003,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: "Cafardrate",
        url: "http://cafardrate.com",
        fields: [{
            name: "rate",
            value: message+'est cafard à '+nbr+'%'
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: "© oggy"
        }
      }
    });
};