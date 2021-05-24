import prompt, { RevalidatorSchema } from "prompt";
import categoriesController from "./controllers/categories";

console.log("Welcome to Punhouse!\n");

prompt.start();

startGame();

async function startGame() {
    //const {username, email, level} = await prompt.get(['username', 'email', 'level']);
    const {username, email, level} = await prompt.get([{
        name: "username",
        message: "Your name"
    }]);

    console.log('\n  Thanks for joining us, ' + username);

    playCategories(username, level);
}

async function playCategories(username: string | RevalidatorSchema, level: string | RevalidatorSchema) {
    // console.log(`\nAll categories:`);
    // for (let c of categoriesController.all()) {
    //     console.log(` Category: ${c.name} has ${c.size()} items, with difficulty ${c.getDifficulty()}`);
    // }

    console.log(`\nRandomly choosing a category for you...`);
    let c = categoriesController.random();
    console.log(` Category: ${c.name} has ${c.size()} items, with difficulty ${c.getDifficulty()}`);

    let score = 0;
    let keepPlaying = true;
    while(keepPlaying) {        
        const {item} = await prompt.get([{
            name: "item",
            message: `Type a ${c.promptName} (or enter to quit)`
        }]);

        if (item && typeof item === "string") {
            if (c.hasItem(item)) {
                console.log(` Wow, awesome! ${item} IS a ${c.promptName}!  Let's keep going...`);
                score += 5;
            } else {
                console.log(` Do you really think ${item} is a ${c.name}?!  Ok, good enough.  Name another...`);
                score++;
            }
        } else {
            keepPlaying = false;
        }
    }

    console.log(`\nGREAT JOB, ${username}!  Your score was ${score} points!`);
}
