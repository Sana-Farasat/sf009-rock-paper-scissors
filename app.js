#! /usr/bin/env node
//Shebang
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright.bold('\t\t\t ++++++++++++++++++++++++++++++++'));
console.log(chalk.yellowBright.bold('\t\t\t ++++Rock-Paper-Scissors Game++++'));
console.log(chalk.yellowBright.bold('\t\t\t ++++++++++++++++++++++++++++++++'));
let ask = await inquirer.prompt([
    {
        name: 'player1',
        type: 'input',
        message: chalk.blue('\n Player 1! Enter your name:')
    },
    {
        name: 'player2',
        type: 'input',
        message: chalk.blue('\n Player 2! Enter your name:')
    }
]);
console.log(chalk.yellowBright.bold('\t\t\t ++++++++++++++++++++++++++++++++'));
console.log(chalk.yellowBright.bold('\t\t\t ++++++++Game Start Here+++++++++'));
console.log(chalk.yellowBright.bold('\t\t\t ++++++++++++++++++++++++++++++++'));
let condition = true;
while (condition) {
    let gameOptions = await inquirer.prompt([
        {
            name: 'option1',
            type: 'list',
            message: chalk.blue(`\n Choose one option ${ask.player1}:`),
            choices: ['Rock', 'Paper', 'Scissors']
        },
        {
            name: 'option2',
            type: 'list',
            message: chalk.blue(`\n Choose one option ${ask.player2}:`),
            choices: ['Rock', 'Paper', 'Scissors']
        },
    ]);
    if (gameOptions.option1 === gameOptions.option2) {
        console.log(chalk.redBright(`\n\t It's a tie!`));
    }
    else if (gameOptions.option1 === "Rock" && gameOptions.option2 === "Scissors" ||
        gameOptions.option1 === "Scissors" && gameOptions.option2 === "Paper" ||
        gameOptions.option1 === "Paper" && gameOptions.option2 === "Rock") {
        console.log(chalk.greenBright(`\n\t Congratulations ${ask.player1}! you won the game..`));
    }
    else {
        console.log(chalk.greenBright(`\n\t Congratulations ${ask.player2}! you won the game..`));
    }
    let palyMore = await inquirer.prompt({
        name: 'more',
        type: 'list',
        message: (chalk.blue('\n Do you want to play more?')),
        choices: ['Yes', 'No']
    });
    if (palyMore.more === 'Yes') {
        condition = true;
    }
    else {
        condition = false;
    }
    console.log(chalk.yellowBright.bold('\t\t\t +++++++++++++++++++++++++++++++++++++++++++'));
    console.log(chalk.yellowBright.bold('\t\t\t Thanks For Playing Rock-Paper-Scissors Game'));
    console.log(chalk.yellowBright.bold('\t\t\t +++++++++++++++++++++++++++++++++++++++++++'));
}
;
