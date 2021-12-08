class Story {
    constructor(title, creator) {
        this.title = title
        this.creator = creator
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        }
        if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }
        if (username == this.creator) {
            throw new Error("You can't like your own story!");
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (this._likes.includes(username) == false) {
            throw new Error("You can't dislike this story!");
        }
        let index = this._likes.indexOf(username);
        this._likes.splice(index, 1);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let found = this._comments.find(x => id != undefined && x.id == id);
        if (!found) {
            id = this._comments.length + 1;
            this._comments.push({
                id,
                username,
                content,
                replies: []
            })
            return `${username} commented on ${this.title}`;
        }

        let replyID = Number(found.id + '.' + (found.replies.length + 1));
        found.replies.push({
            id: replyID,
            username,
            content
        })
        return "You replied successfully";
    }

    toString(sortingType) {
        if (sortingType == 'asc') {
            let result = [];
            result.push(`Title: ${this.title}`);
            result.push(`Creator: ${this.creator}`);
            result.push(`Likes: ${this._likes.length}`);
            result.push(`Comments:`);

            if (this._comments.length > 0) {
                let sorted = this._comments.sort((a, b) => a.id - b.id);
                sorted.forEach(data => {
                    result.push(`-- ${data.id}. ${data.username}: ${data.content}`)
                    if (data.replies.length > 0) {
                        let sortedR = data.replies.sort((a, b) => a.id - b.id);
                        sortedR.forEach(reply => result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`));
                    }
                });
            }
            return result.join('\n');
        } else if (sortingType == 'desc') {
            let result = [];
            result.push(`Title: ${this.title}`);
            result.push(`Creator: ${this.creator}`);
            result.push(`Likes: ${this._likes.length}`);
            result.push(`Comments:`);

            if (this._comments.length > 0) {
                let sorted = this._comments.sort((a, b) => b.id - a.id);
                sorted.forEach(data => {
                    result.push(`-- ${data.id}. ${data.username}: ${data.content}`)
                    if (data.replies.length > 0) {
                        let sortedR = data.replies.sort((a, b) => b.id - a.id);
                        sortedR.forEach(reply => result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`));
                    }
                });
            }
            return result.join('\n');
        } else if (sortingType == 'username') {
            let result = [];
            result.push(`Title: ${this.title}`);
            result.push(`Creator: ${this.creator}`);
            result.push(`Likes: ${this._likes.length}`);
            result.push(`Comments:`);

            if (this._comments.length > 0) {
                let sorted = this._comments.sort((a, b) => a.username.localeCompare(b.username));
                sorted.forEach(data => {
                    result.push(`-- ${data.id}. ${data.username}: ${data.content}`)
                    if (data.replies.length > 0) {
                        let sortedR = data.replies.sort((a, b) => a.username.localeCompare(b.username));
                        sortedR.forEach(reply => result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`));
                    }
                });
            }
            return result.join('\n');
        }
    }
}


// const story = result;

let art = new Story("My Story", "Anny");
console.log(art.like("John"))
// ,"John liked My Story!");
console.log(art.likes)
// ,"John likes this story!");
console.log(art.dislike("John"))
// , "John disliked My Story");
console.log(art.likes)
// , "My Story has 0 likes");
console.log(art.comment("Sammy", "Some Content"))
// , "Sammy commented on My Story");
console.log(art.comment("Ammy", "New Content"))
// , "Ammy commented on My Story");
console.log(art.comment("Zane", "Reply", 1))
// , "You replied successfully");
console.log(art.comment("Jessy", "Nice :)"))
// , "Jessy commented on My Story");
console.log(art.comment("SAmmy", "Reply@", 1))
// , "You replied successfully");

console.log(art.toString('username'))
/*
,`Title: My Story
Creator: Anny
Likes: 0
Comments:
-- 2. Ammy: New Content
-- 3. Jessy: Nice :)
-- 1. Sammy: Some Content
--- 1.2. SAmmy: Reply@
--- 1.1. Zane: Reply`);
*/

console.log(art.like("Zane"))
// , "Zane liked My Story!");
console.log(art.toString('desc'))
/*
,`Title: My Story
Creator: Anny
Likes: 1
Comments:
-- 3. Jessy: Nice :)
-- 2. Ammy: New Content
-- 1. Sammy: Some Content
--- 1.2. SAmmy: Reply@
--- 1.1. Zane: Reply`);
*/