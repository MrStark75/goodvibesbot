module.exports = (client, Discord) => {

    console.log(`${client.user.tag} is Online!`); // console log that the bot has turned online

    client.user.setPresence({ // Code created by my g techno ninja
        activity: 
          { 
            name: '%help',
            type: 'PLAYING'
          },
          status: "idle"
    });

    const arrayOfStatus = [ // List of status'
        `In ${client.guilds.cache.size} Servers`,
        `Sending good vibes!`,
        `dev Mr. Stark`,

    ];
    
    let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        client.user.setActivity(status);
        index++;
    }, 15000);
}