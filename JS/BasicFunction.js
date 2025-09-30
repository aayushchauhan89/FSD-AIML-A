

function login(username, password) {
    if (username === "aayush" && password === "pass123") {
        return { status: true, message: "Welcome back, " + username + "!" };
    }
    return { status: false, message: "Invalid username or password." };
}

function getData() {
    
    return [12, 15, 8, 20, 5];
}

function calculateData(data) {
    let total = data.reduce((sum, num) => sum + num, 0);
    let average = total / data.length;
    return { total, average };
}

function sendSMS(message) {
   
    return "SMS sent successfully: " + message;
}

function logout(username) {
    return "Goodbye, " + username + ". You have been logged out.";
}




let user = login("aayush", "pass123");

if (user.status) {
    console.log(user.message);

    let data = getData();
    console.log("Fetched data:", data);

    let result = calculateData(data);
    console.log("Total:", result.total, " | Average:", result.average);

    let smsStatus = sendSMS("Your total is " + result.total + " and average is " + result.average);
    console.log(smsStatus);

    console.log(logout("aayush"));
} else {
    console.log(user.message);
}
