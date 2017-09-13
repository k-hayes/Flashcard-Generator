var BasicCard = function(front,back) {
    this.front = front;
    this.back = back;
    this.create = function() {
        var question = {
            front: this.front;
            back: this.back;
        };
    }
};

var newCard = new BasicCard('Who was the first president of the USA?`, 'George Washington');
newCard.create();

module.exports = BasicCard;