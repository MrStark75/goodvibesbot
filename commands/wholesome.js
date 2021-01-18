module.exports = {
    name: 'wholesome',
    description: 'This command presents a wholesome gif.',
    execute(client, message, args, Discord){
        let replies = ["https://i.redd.it/se2ij0rv6sw41.gif", "https://data.whicdn.com/images/183274876/original.gif",
         "https://64.media.tumblr.com/2f884a7119938942111598710d26f6fd/tumblr_n1w6hqKuL61qc4uvwo1_500.gifv",
         "https://i.gifer.com/Dccu.gif", "https://i.pinimg.com/originals/16/f3/b4/16f3b400b546c94f92e90bf24e1bcdf3.gif",
         "https://64.media.tumblr.com/a8c6c5ba1dacbf28c75c0e8662003c48/tumblr_o0d18kutFc1qc4uvwo1_r1_500.gif",
         "https://media4.giphy.com/media/9rewwOlDAlgCDoPQo2/source.gif", "https://www.gif-vif.com/Wholesome-gif-of-the-day-102.gif"];

        const reply = replies[Math.floor(Math.random() * replies.length)];
        message.channel.send(reply);
    }
}