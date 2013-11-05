function repeat(operation, n) {
	operation()
	if(n > 1)
		return repeat(operation, n-1)
}

module.exports = repeat