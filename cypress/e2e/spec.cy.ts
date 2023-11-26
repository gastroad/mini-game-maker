describe('Maze Maker Test', () => {
  it('should create and play a maze', () => {
    // 페이지 방문
    cy.visit('http://localhost:3000/');

    // 페이지 로딩 대기
    cy.url().should('eq', 'http://localhost:3000/');

    // make button 클릭
    cy.get('#body > div > a:nth-child(3)').click();

    // 페이지 로딩 대기
    cy.url().should('include', 'http://localhost:3000/maker');

    // 맵 이름 입력
    cy.get('#body > div > div.maze-form > div:nth-child(1) > input').type('cypress test map name');

    // Maker 이름 입력
    cy.get('#body > div > div.maze-form > div:nth-child(2) > input').type('cypress test maker name');

    // 시작지점 변경
    cy.get('#body > div > div.maze-maker > div > div:nth-child(1) > div:nth-child(2)').click();

    // 컨트롤러 벽으로 변경
    cy.get('#body > div > div.maker-maze-controller > div:nth-child(2) > button:nth-child(1)').click();

    // 벽 2개 선택
    cy.get('#body > div > div.maze-maker > div > div:nth-child(1) > div:nth-child(3)').click();
    cy.get('#body > div > div.maze-maker > div > div:nth-child(3) > div:nth-child(1)').click();

    // 컨트롤러 종료지점으로 변경
    cy.get('#body > div > div.maker-maze-controller > div:nth-child(1) > button:nth-child(2)').click();

    // 종료지점 변경
    cy.get('#body > div > div.maze-maker > div > div:nth-child(5) > div:nth-child(4)').click();

    // 제출 버튼 클릭
    cy.get('#body > div > div.maker-maze-controller > button').click();

    // 최초 페이지 로딩 확인
    cy.wait(5000);

    // play Button 클릭
    cy.get('#body > div > a:nth-child(2)').click();
  });
});
