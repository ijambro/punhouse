import prompt, { RevalidatorSchema } from "prompt";
import Categories from "./categories";

console.log("Welcome to Punhouse!\n");

prompt.start();

startGame();

async function startGame() {
    //const {username, email, level} = await prompt.get(['username', 'email', 'level']);
    const {username, email, level} = await prompt.get([{
        name: "username",
        message: "Your name"
    }, {
        name: "email",
        message: "Your email"
    }, {
        name: "level",
        message: "Level of difficulty"
    }]);

    console.log('\n  Thanks for joining us, ' + username);
    console.log('  email: ' + email);

    playCategories(username, level);
}

async function playCategories(username: string | RevalidatorSchema, level: string | RevalidatorSchema) {
    let categories = new Categories();

    console.log(`\nAll categories:`);

    for (let c of categories.all()) {
        console.log(` Category: ${c.name} has ${c.items.size} items, with difficulty ${c.level}`);
    }

    console.log(`\nRandomly choosing a category for you...`);
    let c = categories.random();
    console.log(` Category: ${c.name} has ${c.items.size} items, with difficulty ${c.level}`);

    let score = 0;
    let keepPlaying = true;
    while(keepPlaying) {
        const {item} = await prompt.get([{
            name: "item",
            message: `Type a ${c.name}`
        }]);

        if (item) {
            console.log(` Do you really think ${item} is a ${c.name}?!  Ok, good enough.  Name another...`);
            score++;
        } else {
            keepPlaying = false;
        }
    }

    console.log(` GREAT JOB, ${username}!  Your score is ${score} points!`);
}
