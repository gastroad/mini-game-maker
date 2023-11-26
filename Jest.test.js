describe("maze-maker", () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000/');
    });

    it('should display "maze-maker" text on page', async () => {

        await expect(page).toMatchTextContent("MazeMaker");

        await page.click('#body > div > a:nth-child(3)');

        await page.waitForNavigation({ waitUntil: 'load' });
        await page.waitForSelector('#body > div > div.maze-form > div:nth-child(1) > input', 10000)
        // 맵 이름 입력
        await page.type('#body > div > div.maze-form > div:nth-child(1) > input', 'puppeteer test map name');

        // 제작자 이름 입력
        await page.type('#body > div > div.maze-form > div:nth-child(2) > input', 'puppeteer test maker name');

        // 시작지점 변경
        await page.click('#body > div > div.maze-maker > div > div:nth-child(1) > div:nth-child(2)');

        // 컨트롤러 벽으로 변경
        await page.click('#body > div > div.maker-maze-controller > div:nth-child(2) > button:nth-child(1)');

        // 벽 2개 선택
        await page.click('#body > div > div.maze-maker > div > div:nth-child(1) > div:nth-child(3)');
        await page.click('#body > div > div.maze-maker > div > div:nth-child(3) > div:nth-child(1)');

        // 컨트롤러 종료지점으로 변경
        await page.click('#body > div > div.maker-maze-controller > div:nth-child(1) > button:nth-child(2)');

        // 종료지점 변경
        await page.click('#body > div > div.maze-maker > div > div:nth-child(5) > div:nth-child(4)');

        // 제출 버튼 클릭
        await page.click('#body > div > div.maker-maze-controller > button');

        // 최초 페이지 로딩 확인
        await page.waitForSelector('#body > div > a:nth-child(2)', 10000)

        await expect(page).toMatchTextContent('Maker')

        // play Button 클릭
        await page.click('#body > div > a:nth-child(2)');

        await page.waitForSelector('#body > div > ul > li:nth-child(1)', 10000)
        await expect(page).toMatchTextContent('Maze List')

        await page.screenshot({ path: 'example.png' });
    });
});

