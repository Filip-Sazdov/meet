import puppeteer from "puppeteer";
import { jest } from "@jest/globals";

describe("show/hide an event details", () => {
	beforeAll(async () => {
		jest.setTimeout(30000);
	});

	test("An event element is collapsed by default", async () => {
		const browser = await puppeteer.launch({
			executablePath: "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
		});

		const page = await browser.newPage();
		await page.goto("http://localhost:3000/");

		await page.waitForSelector(".event");

		const eventDetails = await page.$(".event .event-details");
		expect(eventDetails).toBeNull();
		browser.close();
	});
});
