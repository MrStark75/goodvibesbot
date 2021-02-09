module.exports = {
    name: 'vibe',
    cooldown: 2,
    description: 'this is a heyo command!',
    execute(client, message, args, Discord, cmd){
        let replies = ["idk", "Relax and take some deep breaths.", "Listen to some Music.", "AOOOOOOOOOGA", 
        "When you feel like quitting, think about why you started.", "Focus on the step in front of you, not the whole staicase.",
        "Lavender.", "Get glowing. The world needs your Magic.", "You have two choices: evolve or repeat.", "Three months from now, you will thank yourself.", "Make sure to get some water.",
        "The key to being happy is knowing you have the power to choose what to accept and what to let go.", "Walk away from anything that gives you bad vibes. There is no need to explain or make sense of it. It's your life. Do what makes you happy.",
        "You've always had the power my dear, you just had to learn it for yourself.", "There will be haters, doubters, non-believers. And then there will be you, proving them wrong.", 
        "In the middle of difficulty lies opportunity.", "Free spot avalible, DM me to put in some good vibes (DM Mr. Stark75)", "Nutsacks (Adel requested)", ":eye:", "Your :cool:"];

        const reply = replies[Math.floor(Math.random() * replies.length)];
        message.channel.send(reply);
    }
}