function countWords(inputWords) {
	return inputWords.reduce(function(pV, cV){
		pV[cV] = ++pV[cV] || 1
	}, 0)
}

module.exports = countWords