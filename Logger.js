const fs = require('fs');

class Logger {

    constructor() {
        this.checkForLogFile();
    }

    checkForLogFile() {
        if(!fs.existsSync('./log.txt')) {
            console.log('File does not exist. Creating...');

            this.createLogFile();
        }
    }

    log(logMessage) {
        fs.appendFile('./log.txt', `\n\n${new Date()} | ${logMessage}`, (err) => {
            if(err) {
                throw new Error(err);
            }
        });
    }

    createLogFile(callback) {
        fs.writeFile('./log.txt', `${new Date()} | Log file created.`, (err) => {
            if(err) {
                throw new Error(err);
            } else {
                callback?callback():null;
            }
        });
    }

    readLogFile(callback) {
        fs.readFile('./log.txt', 'utf8', (err, data) => {
            if(err) {
                throw new Error(err);
            } else {
                callback(data);
            }
        });
    }

    deleteLogFile(callback) {
        fs.unlink('./log.txt', (err) => {
            if(err) {
                throw new Error(err);
            } else {
                callback()?callback():null;
            }
        });

        this.createLogFile();
    }
}

module.exports = Logger