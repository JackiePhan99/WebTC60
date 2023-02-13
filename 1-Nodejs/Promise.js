console.log("Promise");

const promisePending = new Promise(() => {

});

console.log("trang thai", promisePending);

const promiseFulfilled = new Promise((resolve, reject) => {
	resolve();
});

console.log("trang thai 2", promiseFulfilled);

const promiseReject = new Promise((resolve, reject) => {
	reject("co loi");
});

console.log("trang thai 3", promiseReject);

const promiseWithData = new Promise((resolve, reject) => {
	const memberLists = [

	]
});

console.log("trang thai khi resolve co value tra ve", promiseWithData);

promiseWithData
	.then(function (data) {
		console.log("data get khi fulfilled - resolve dc call", data);
	})
	.catch(function (data) {
		console.log("data get khi frejected -reject dc call", data);
	})
	.finally(function (data) {
		console.log("khi ca 2 thanh cong hay that bai", data);
	})