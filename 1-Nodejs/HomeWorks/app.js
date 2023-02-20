const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const userName = document.querySelector('.name');
const img = document.querySelector('.img');
const email = document.querySelector('.email');
const company = document.querySelector('.company');
const userFollowers = document.querySelector('.followers');

btn.addEventListener("click", () => {
	addResults(input.value)
})

async function getUsersFromAPI(name) {
	let users;
	await fetch(`https://api.github.com/users/${name}`)
		.then(response => response.json())
		.then(data => users = data);
	return users;
}

async function addResults(login) {
	const user = await getUsersFromAPI(login);
	if (user.login) {
		userName.innerHTML = "Name: " + user.login;
		img.src = user.avatar_url;
		email.innerHTML = "Url: " + user.login;
		email.href = user.html_url;
		company.innerHTML = "Company: " + user.company;
		userFollowers.innerHTML = user.followers + " Followers";
	} else {
		alert("Không tìm thấy user bạn yêu cầu")
	}
}
