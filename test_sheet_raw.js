const https = require("https");
const url = "https://script.google.com/macros/s/AKfycbzLU67ogBTG46WuQSk_cdbQk5BsvZRYZaSvlMsY_k7sL6LqiiSmSdJNa1Bp9Vu7XYYF/exec";

const payload = JSON.stringify({
    timestamp: new Date().toISOString(),
    registrationType: "Solo",
    m1_name: "Test User",
    m1_email: "test@example.com",
    m1_college: "Test College",
    m1_mobile: "1234567890",
    m1_food: "Veg",
    transactionId: "123456789012",
    totalAmount: 200,
    screenshot_url: "http://example.com/test.png"
});

const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Content-Length": payload.length
    }
};

const req = https.request(url, options, (res) => {
    console.log("Status Code:", res.statusCode);
    console.log("Headers:", res.headers);

    let data = "";
    res.on("data", (chunk) => {
        data += chunk;
    });

    res.on("end", () => {
        console.log("Body:", data);
        if (res.statusCode === 302) {
            console.log("Redirecting to:", res.headers.location);
        }
    });
});

req.on("error", (e) => {
    console.error("Error:", e.message);
});

req.write(payload);
req.end();
