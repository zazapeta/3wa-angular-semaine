function showStatus(user) {
    if (user.status) {
        return user.status;
    }
    else {
        return "undefined User status";
    }
}
var user1 = {
    name: "Bryan",
    id: 1,
    status: "présent"
};
var user2 = {
    name: "Victor",
    id: 2,
    status: ""
};
function case1() {
    var expectedResult = "présent";
    var result = showStatus(user1);
    if (expectedResult !== result) {
        throw new Error("expectedRestut must be ".concat(expectedResult, " and showStatus function result ").concat(result));
    }
    else {
        console.log("working good");
    }
}
function case2() {
    var expectedResult = "undefined User status";
    var result = showStatus(user2);
    if (expectedResult !== result) {
        throw new Error("expectedRestut must be ".concat(expectedResult, " and showStatus function result ").concat(result));
    }
    else {
        console.log("working good");
    }
}
function main() {
    case1();
    case2();
}
main();
