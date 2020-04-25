var fs = require('fs');


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

const input1 = () => {
    return new Promise((resolve, reject) => {
        readline.question(`What's your GitHub username? `, function(name) {
            resolve(name)
            resolve()
          })
    })
}

const input2 = () => {
    return new Promise((resolve, reject) => {
        readline.question(`What's your Project name? `, function(name) {
            resolve(name)
            resolve()
          })
    })
}

const input3 = () => {
    return new Promise((resolve, reject) => {
        readline.question(`What's your email that's linked to your Github? `, function(name) {
            resolve(name)
            resolve()
          })
    })
}

const main = async () => {
    //Calling the inputs one by one
    const userName = await input1()
    const projectName = await input2()
    const email = await input3();
    readline.close()
    //Content for the readme file
    let stringContent = `# ${projectName}

## Description

description

## Table of Contents

Table of Contents

## Installation

Installation

## Usage

Usage

## License

License

## Contributing

Contributing

## Tests

Tests

## Questions

### User GitHub profile picture

Yes or No

### User GitHub email

username: ${userName} email: ${email}`

    //write file to README.md
    fs.writeFile('TEST.md', stringContent, function (err) {
        if (err) throw err;
    })
}

main();




