const Logger = require('./Logger')

class Groups {
    constructor(json) {
        this.json = json
        this.checkJSON()
    }

    checkJSON() {
        if (!this.json || typeof this.json !== 'object') {
            new Logger.log(`Invalid groups JSON.`)
            throw new Error('Invalid groups JSON.')
        }

        this.chats = this.json.chats
    }

    addGroup(chatId, groupName, callback) {
        if (!this.groups.includes(chatId)) {
            this.chats.push(
                {
                    "id": chatId,
                    "groups": [
                        {
                            "name": groupName,
                            "members": []
                        }
                    ]
                }
            )
            
            new Logger.log(`Chat ${chatId} has been added to JSON.`)
            new Logger.log(`Added group ${groupName} to ${chatId}.`)
            callback(this.chats);
            return;
        }

        this.chats.chatId.groups.push(
            {
                "name": groupName,
                "members": []
            }
        )

        new Logger.log(`Added group ${groupName} to ${chatId}.`)
        callback(this.chats);
        return;
    }

    removeGroup(chatId, groupName, callback) {
        if (!this.groups.includes(chatId)) {
            new Logger.log(`Chat ${chatId} does not exist.`)
            return;
        }

        if (!this.chats.chatId.groups.includes(groupName)) {
            new Logger.log(`Group ${groupName} does not exist.`)
            return;
        }

        const index = this.chats.chatId.groups.indexOf(groupName)

        this.chats.chatId.groups.splice(index, 1)

        new Logger.log(`Removed group ${groupName} from ${chatId}.`)
        callback(this.chats);
        return;
    }
}

module.exports = Groups