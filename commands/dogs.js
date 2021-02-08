module.exports = {
    name: 'dogs',
    aliases: ['dog'],
    description: 'This command presents a dog picture.',
    execute(client, message, args, Discord, cmd){
        let replies = ["https://i.pinimg.com/originals/b3/49/54/b34954a4243ee09850c73a085ac1810d.jpg",
         "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
         "https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg",
         "https://filmdaily.co/wp-content/uploads/2020/05/dog-videos-lede-1300x868.jpg", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-dog-quotes-1580508958.jpg?crop=0.670xw:1.00xh;0.167xw,0&resize=640:*",
         "https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.226xh&resize=480:*"];

        const reply = replies[Math.floor(Math.random() * replies.length)];
        message.channel.send(reply);
    }
}