// EID MUBARAK!
import figlet from "figlet";
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyan(figlet.textSync(`\t\t\t\t EID MUBARAK \n WELCOME TO CATTLE FARM \t\t\t\t`)));
let randomAnimal = Math.floor(Math.random() * 5 + 1);
let computerGuess = (chalk.bgCyan.bold.italic("Animal"));
console.log(chalk.bgMagentaBright.bold.italic(computerGuess));
if (randomAnimal === 1) {
    computerGuess = (chalk.bgMagentaBright.bold.italic.bold("Chand Bail🐄"));
}
if (randomAnimal === 2) {
    computerGuess = (chalk.bgMagentaBright.bold.italic.bold("Sibbi Bail🐮"));
}
if (randomAnimal === 3) {
    computerGuess = (chalk.bgMagentaBright.bold.italic.bold("Goat🐐"));
}
if (randomAnimal === 4) {
    computerGuess = (chalk.bgMagentaBright.bold.italic.bold("Sheep🐑"));
}
if (randomAnimal === 5) {
    computerGuess = (chalk.bgMagentaBright.bold.italic.bold("Camel🐫"));
}
console.log(computerGuess);
let user = await inquirer.prompt([
    {
        name: "cow",
        type: "list",
        message: "Choice one Animal in whole mandi",
        choices: ["Chand Bail🐮", "Sibbi Bail🐄", "Goat🐐", "Sheep🐑", "Camel🐫", "OtherAnimal"]
    }
]);
if (user.cow === computerGuess) {
    console.log(chalk.bgCyan.bold.italic.bold("😒 Oho! this cow price is too high 😏"));
}
else if (user.cow === "Chand Bail🐮") {
    console.log(chalk.bgCyan.bold.italic.bold("🎉 Congratulation Soda Ban gaya! 🎉"));
    console.log(chalk.bgCyan.bold.italic.bold(`This animal price is ${500000}`));
}
else if (user.cow === "Sibbi Bail🐄") {
    console.log(chalk.bgCyan.bold.italic.bold("🎉 Congratulation Soda Ban gaya! 🎉"));
    console.log(chalk.bgCyan.bold.italic.bold(`This animal price is ${400000}`));
}
else if (user.cow === "Goat🐐") {
    console.log(chalk.bgCyan.bold.italic.bold(" 🎉 Congratulation Soda Ban gaya! 🎉"));
    console.log(chalk.bgCyan.bold.italic.bold(`This animal price is ${50000}`));
}
else if (user.cow === "Sheep🐑") {
    console.log(chalk.bgCyan.bold.italic.bold(" 🎉 Congratulation Soda Ban gaya! 🎉"));
    console.log(chalk.bgCyan.bold.italic.bold(`This animal price is ${50000}`));
}
else if (user.cow === "Camel🐫") {
    console.log(chalk.bgCyan.bold.italic.bold(" 🎉Congratulation Soda Ban gaya! 🎉"));
    console.log(chalk.bgCyan.bold.italic.bold(`This animal price is ${800000}`));
}
else {
    console.log(chalk.bgCyan.bold.italic.bold("😔 Bht high he mandi ghar chalo! 😒"));
}
