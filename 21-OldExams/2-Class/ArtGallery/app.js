class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        quantity = Number(quantity);
        articleModel = articleModel.toLowerCase();

        if (this.possibleArticles[articleModel] == undefined) {
            throw new Error('This article model is not included in this gallery!');
        }

        let find = a => a.articleModel == articleModel && a.articleName == articleName;
        if (this.listOfArticles.some(find)) {
            this.listOfArticles.filter(find)[0].quantity += quantity;
        } else {
            this.listOfArticles.push({
                articleModel,
                articleName,
                quantity
            })
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        if (this.guests.find(x => x.guestName == guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let newPoints = 0;
        if (personality == 'Vip') {
            newPoints = 500;
        } else if (personality == 'Middle') {
            newPoints = 250;
        } else {
            newPoints = 50;
        }

        this.guests.push({ guestName, points: newPoints, purchaseArticle: 0 })
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let article = this.listOfArticles.find(i => i.articleName == articleName && i.articleModel == articleModel)
        let guest = this.guests.find(x => x.guestName == guestName);
        
        if (article == undefined) {
            throw new Error('This article is not found.');
        }
        if (article.quantity == 0) {
            return `The ${articleName} is not available.`;
        }
        if (guest == undefined) {
            return 'This guest is not invited.';
        }

        let cost = this.possibleArticles[articleModel];
        let budget = guest.points
        if (cost > budget) {
            return "You need to more points to purchase the article.";
        }
        guest.purchaseArticle++;
        guest.points -= cost;
        article.quantity--;

        // this.guests.find(x => {
        //     if (x.guestName == guestName) {
        //         x.points -= cost;
        //         x.purchaseArticle += 1;
        //     }
        // })
        // this.listOfArticles.find(x => {
        //     if (x.articleName == articleName && x.articleModel == articleModel) {
        //         x.quantity -= 1;
        //     }
        // })

        return `${guestName} successfully purchased the article worth ${cost} points.`;
    }

    showGalleryInfo(criteria) {
        let result = [];
        if (criteria == 'article') {
            result.push('Articles information:');
            this.listOfArticles.forEach(x => result.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`));
        } else if (criteria == 'guest') {
            result.push('Guests information:');
            this.guests.forEach(x => result.push(`${x.guestName} - ${x.purchaseArticle}`));
        }

        return result.join('\n');
    }
}

// Input 1
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
/* Output 1:
Successfully added article Mona Liza with a new quantity- 3.
Successfully added article Ancient vase with a new quantity- 2.
Successfully added article Mona Liza with a new quantity- 1.
*/

// Input 2
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));
/* Output 2:
You have successfully invited John!
You have successfully invited Peter!
John has already been invited.
*/


// Input 3
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
/* Output 3:
John successfully purchased the article worth 200 points.
Peter successfully purchased the article worth 250 points.
This article is not found.
*/

// Input 4
// const artGallery = new ArtGallery('Curtis Mayfield'); 
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));
/* Output 4:
Articles information:
picture - Mona Liza - 3
item - Ancient vase - 1
Guests information:
John - 1
Peter - 1
*/

// const ArtGallery = result;
let art = new ArtGallery("Curtis Mayfield");

art.addArticle('picture', 'Mona Liza', 3);
art.addArticle('Item', 'Ancient vase', 2);
art.addArticle('picture', 'Mona Liza', 1);

art.inviteGuest('John', 'Vip');
art.inviteGuest('Peter', 'Middle');

art.buyArticle('picture', 'Mona Liza', 'John');
art.buyArticle('item', 'Ancient vase', 'Peter');
console.log(art.showGalleryInfo('article'));
console.log(art.showGalleryInfo('guest'));

// assert.equal(art.showGalleryInfo('article'),`Articles information:
// picture - Mona Liza - 3
// item - Ancient vase - 1`);

// assert.equal(art.showGalleryInfo('guest'),`Guests information:
// John - 1
// Peter - 1`);