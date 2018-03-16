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
    
    const embed = new Discord.RichEmbed()
    .setTitle("Maitre Yoda:")
    .setAuthor("yoda")
    .setColor(0x00AE86)
    .addField(cit)
    .setFooter
    .setTimestamp()
    .setImage("http://localhost/8080/home/ziirofan/Document/proj_perso/nodejs/botjs/image/miniyoda.jpg")
    msg.channel.send(embed);
});

 

    
    
    db.close();

};
