const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzLU67ogBTG46WuQSk_cdbQk5BsvZRYZaSvlMsY_k7sL6LqiiSmSdJNa1Bp9Vu7XYYF/exec";

const payload = {
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
};

async function test() {
    console.log("Testing POST to:", GOOGLE_SCRIPT_URL);
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            body: JSON.stringify(payload)
        });
        console.log("Status:", response.status);
        const text = await response.text();
        console.log("Response Text:", text);
    } catch (err) {
        console.error("Fetch Error:", err);
    }
}

test();
