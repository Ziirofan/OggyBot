exports.run=(bot,msg,args) =>{
    
    const Discord = require("discord.js");    
    

    const sqlite3=require('sqlite3').verbose();
    let db = new sqlite3.Database('db/yoda.db');
    var num=Math.floor(Math.random()*(10-1)+1);

    let sql = `SELECT CIT
    FROM yoda WHERE id  = ?`;
    let id = num;
    let cit;

    // first row only
    db.get(sql, [id], (err, row) => {
    if (err) {
    return console.error(err.message);
    }
    cit=row.CIT;
    //console.log(cit);
    
    const embed = new Discord.RichEmbed()
    .setTitle("Maitre Yoda:")
    .setColor(123432)
    .addField(cit)
    .setFooter("SW")
    .setTimestamp()
    .setImage("https://i.imgur.com/DOrAP6B.jpg");
    msg.channel.send(embed);
});

 

    
    
    db.close();

};
