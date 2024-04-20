class Handler {
    constructor(bot, message, Reader) {
        this.bot = bot
        this.Reader = Reader
        this.message = message
    }

    isCommand() {
        return this.message.text.startsWith('/');
    }

    handle() {}

    help() {}

    error() {}

    tagAll() {}

    createGroup() {}

    deleteGroup() {}

    groupInfo() {}

    groupMembers() {}

    addToGroup() {}

    removeFromGroup() {}

    tagGroup() {}
}

module.exports = Handler