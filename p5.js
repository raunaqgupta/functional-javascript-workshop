function checkUsersValid(goodUsers) {
	return function(users) {
		return users.every(function(x){
			return goodUsers.some(function(y){
				return x.id === y.id
			})
		})
	}
}

module.exports = checkUsersValid