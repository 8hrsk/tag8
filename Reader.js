const fs = require('fs');
const Logger = require('./Logger.js');

class Reader {

    constructor(pathToJSON) {
        this.pathToJSON = pathToJSON
        this.checkJSON()
        this.logger = new Logger()
    }

    read(callback) {
        fs.readFile(this.pathToJSON, 'utf8', (err, data) => {
            if (err) {
                this.logger.log(`\n\n${new Date()} | Error during reading JSON file: ${err}`)
                throw new Error(err)
            } else {
                callback(data)
            }
        })
    }

    write(content, callback) {
        fs.writeFile(this.pathToJSON, content, 'utf8', (err) => {
            if (err) {
                throw new Error(err)
            } else {
                callback?callback():null
                this.logger.log(`File ${this.pathToJSON} has been updated with ${content}.`)
            }
        })
    }

    checkJSON() {
        if (!this.pathToJSON || this.pathToJSON.split('.').pop() !== 'json') {
            this.logger.log(`Invalid path to JSON file ${this.pathToJSON}. File does not exist or is not in JSON format. Creating new JSON file...`)
            this.createGroupsJSON()
        }

        this.read((data) => {
            console.log(`File ${this.pathToJSON} exists. Data: ${data}`);
        })
    }

    createGroupsJSON() {
        this.write('{"chats": []}', () => {
            this.logger.log(`File ${this.pathToJSON} has been created.`)
        })
    }

    resetGroupsJSON() {
        fs.unlink(this.pathToJSON, (err) => {
            if (err) {
                throw new Error(err)
            } else {
                this.logger.log(`File ${this.pathToJSON} has been deleted.`)
                this.createGroupsJSON()
            }
        })
    }
}

module.exports = Reader