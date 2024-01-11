import { Builder, By } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

// Set up Chrome options
const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--headless'); // Run in headless mode (without opening a visible browser window)

// Create a new WebDriver instance
const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();

// Navigate to your React app
driver.get('http://localhost:3000'); // Replace with the actual URL of your app

// Example: Find an element by its CSS selector and perform an action
driver.findElement(By.css('.your-button-class')).click();

// Example: Assert that a certain element is present on the page
driver.findElement(By.css('.your-result-class')).then((element) => {
    element.getText().then((text) => {
        console.log(`Text found: ${text}`);
    });
});

// Close the browser
driver.quit();