function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }
        addComment(comment) {
            this.comments.push(comment);
        }
        toString() {
            let result = `\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                result += "\nComments:"
                for (let comment of this.comments) {
                    result += `\n * ${comment}`
                }
            }
            return super.toString() + result;
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }
        view() {
            this.views++;
            return this;
        }
        toString() {
            return super.toString() + `\nViews: ${this.views}`
        }
    }
    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}
const classes = solution();
let blog = new classes.BlogPost("BlogPost", "BlogPost");
blog.view();
console.log(blog.toString())