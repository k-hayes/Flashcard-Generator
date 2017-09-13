var ClozeCard = function(text, cloze) {
    this.text = question;
    this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
};


var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partialStatement); "

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullStatement): "

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");



module.exports = ClozeCard;