const Discord = require("discord.js");
const myid = ["716108764641624075"];
const prefix = [""];
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

client.login("NzEyMTY2NzgzMTUwNDU2ODYz.XsNntA.5ifHgngXCl4RufEXym74I12aFkM");
client2.login("Njk4MTY3MTE2NzM3ODA2MzY3.XpCOkQ.vc3ZQv4EgJLJn5PFCHZjnYS0ZCs");
client3.login("NzEyMTY5NzE4ODQwMjk1NDY0.XsNp5g.41jJZyErUIeZ4w0VpEI00E2Pq_A");
client4.login("NzEyMTcwNTc2ODYwNDEzOTky.XsNqxQ.MZsCu-NfLPqvk1tGDn920u4l0Tk");
client5.login("NzEyMTcxMzMxNjAwNTE1MjQz.XsNrbw.DjnU65sGGWPWilcVcKKS8CRxXwM");
client6.login();

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

client.on("message", message => {
  if (message.content === prefix + "medo") {
    message.channel.send("#daily");
  }
  if (message.content === prefix + "c1") {
    message.channel.send("#credits");
  }
  if (message.content === prefix + "pp") {
    message.channel.send("#profile");
  }
  if (message.content === prefix + "rr") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
  if (message.content.startsWith(prefix + "a1")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
});

client2.on("message", message => {
  if (message.content === prefix + "medo") {
    message.channel.send("#daily");
  }
  if (message.content === prefix + "c2") {
    message.channel.send("#credits");
  }
  if (message.content === prefix + "pp") {
    message.channel.send("#profile");
  }
  if (message.content === prefix + "rr") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
  if (message.content.startsWith(prefix + "a2")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
});

client3.on("message", message => {
  if (message.content === prefix + "medo") {
    message.channel.send("#daily");
  }
  if (message.content === prefix + "c3") {
    message.channel.send("#credits");
  }
  if (message.content === prefix + "pp") {
    message.channel.send("#profile");
  }
  if (message.content === prefix + "rr") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
  if (message.content.startsWith(prefix + "a3")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
});

client4.on("message", message => {
  if (message.content === prefix + "medo") {
    message.channel.send("#daily");
  }
  if (message.content === prefix + "c4") {
    message.channel.send("#credits");
  }
  if (message.content === prefix + "pp") {
    message.channel.send("#profile");
  }
  if (message.content === prefix + "rr") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
  if (message.content.startsWith(prefix + "a4")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
});

client5.on("message", message => {
  if (message.content === prefix + "medo") {
    message.channel.send("#daily");
  }
  if (message.content === prefix + "c5") {
    message.channel.send("#credits");
  }
  if (message.content === prefix + "pp") {
    message.channel.send("#profile");
  }
  if (message.content === prefix + "rr") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
  if (message.content.startsWith(prefix + "a5")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
});

client6.on("message", message => {
  if (message.content === prefix + "medo") {
    message.channel.send("#daily");
  }
  if (message.content === prefix + "c6") {
    message.channel.send("#credits");
  }
  if (message.content === prefix + "pp") {
    message.channel.send("#profile");
  }
  if (message.content === prefix + "a6") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
  if (message.content.startsWith(prefix + "s6")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

client.on("message", message => {
  if (message.content === prefix + "fast 1k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 1000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 2k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 2000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 3k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 3000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 4k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 4000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "on") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 5000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 6k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 6000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 7k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 7000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 8k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 8000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 9k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 9000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "on10") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {w
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client2.on("message", message => {
  if (message.content === prefix + "fast 1k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 1000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 2k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 2000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 3k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 3000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 4k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 4000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "on") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 5000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 6k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 6000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 7k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 7000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 8k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 8000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 9k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 9000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "on10") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client3.on("message", message => {
  if (message.content === prefix + "fast 1k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 1000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 2k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 2000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 3k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 3000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 4k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 4000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "on") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 5000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 6k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 6000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 7k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 7000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 8k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 8000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 9k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 9000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "on 10") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client4.on("message", message => {
  if (message.content === prefix + "fast 1k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 1000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 2k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 2000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 3k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 3000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 4k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 4000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "on") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 5000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 6k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 6000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 7k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 7000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 8k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 8000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 9k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 9000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "on10") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client5.on("message", message => {
  if (message.content === prefix + "fast 1k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 1000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 2k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 2000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 3k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 3000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 4k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 4000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "on") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 5000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 6k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 6000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 7k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 7000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 8k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 8000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 9k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 9000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "on10") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client6.on("message", message => {
  if (message.content === prefix + "fast 1k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 1000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 2k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 2000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 3k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 3000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 4k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 4000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "on") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 5000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 6k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 6000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 7k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 7000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 8k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 8000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 9k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 9000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "on10") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

client.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

client2.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

client3.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

client4.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

client5.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

client6.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

client.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

client2.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

client3.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

client4.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

client5.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

client6.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

client.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``1`` ");
  }
});

client2.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``2`` ");
  }
});

client3.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``3`` ");
  }
});

client4.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``4`` ");
  }
});

client5.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``5`` ");
  }
});

client6.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``6`` ");
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ
