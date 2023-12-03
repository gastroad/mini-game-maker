const mockMazeData = {
  title: "Cypress e2e test title",
  name: "Cypress e2e test name",
  mazeSize: {
    "row": 1, // cypress 는 input이 앞에서 부터 입력
    "col": 1
  },
}

describe('Maze Maker Test', () => {
  it('has title', () => {
    cy.visit('http://localhost:3000/');
    cy.title().should('match', /maze-maker/);
  });

  it('test making maze', () => {
    const mazeTitleInputElementSelector = '#body > div > div.maze-form > div:nth-child(1) > input'
    const mazeNameInputElementSelector = '#body > div > div.maze-form > div:nth-child(2) > input'
    const mazeColInputElementSelecttor = '#body > div > div.maze-form > div:nth-child(3) > div:nth-child(1) > input'
    const mazeRowInputElementSelecttor = '#body > div > div.maze-form > div:nth-child(3) > div:nth-child(2) > input'
    const controllerWallButtonElementSelector = '#body > div > div.maker-maze-controller > div:nth-child(2) > button:nth-child(1)'
    const controllerEndPointButtonElementSelector = '#body > div > div.maker-maze-controller > div:nth-child(1) > button:nth-child(2)'
    const controllerSubmitButtonElementSelector = '#body > div > div.maker-maze-controller > button'

    // 페이지 방문
    cy.visit('http://localhost:3000/');

    // 페이지 로딩 대기
    cy.title().should('include', 'maze-maker');

    // make button 클릭
    cy.get('#body > div > a:nth-child(3)').click();

    // 페이지 로딩 대기
    cy.url().should('include', 'http://localhost:3000/maker');

    // 맵 이름 입력
    cy.get(mazeTitleInputElementSelector).type(mockMazeData.title);

    // Maker 이름 입력
    cy.get(mazeNameInputElementSelector).type(mockMazeData.name);

    // maze col 변경
    cy.get(mazeColInputElementSelecttor).type(`{backspace} ${mockMazeData.mazeSize.col}`);

    // maze row 변경
    cy.get(mazeRowInputElementSelecttor).type(`{backspace} ${mockMazeData.mazeSize.row}`);

    // 시작지점 변경
    cy.get('#body > div > div.maze-maker > div > div:nth-child(1) > div:nth-child(2)').click();

    // controller 벽 선택
    cy.get(controllerWallButtonElementSelector).click();
    cy.get('#body > div > div.maze-maker > div > div:nth-child(1) > div:nth-child(3)').click();
    cy.get('#body > div > div.maze-maker > div > div:nth-child(3) > div:nth-child(1)').click();

    // 컨트롤러 종료지점으로 변경
    cy.get(controllerEndPointButtonElementSelector).click();
    cy.get('#body > div > div.maze-maker > div > div:nth-child(5) > div:nth-child(4)').click();

    // 제출 버튼 클릭
    cy.get(controllerSubmitButtonElementSelector).click();

    // 최초 페이지 로딩 확인
    cy.url().should('include', 'http://localhost:3000');
  });

  it('test play maze', () => {
    cy.visit('http://localhost:3000/');

    //root 페이지 진입 확인
    cy.title().should('include', 'maze-maker');

    // play 버튼 클릭
    cy.get('#body > div > a:nth-child(2)').click();

    // maplist 페이지 진입 확인  
    cy.title().should('include', 'maze-maker-maplist');

    cy.get('h3').should('include.text', 'Maze List');

    // 마지막 map 진입
    cy.get('ul li:last-child a').click();

    // map 확인
    cy.title().should('eq', `${mockMazeData.title}-${mockMazeData.name}`);
    cy.get('h3').should('include.text', mockMazeData.title);

    // Arrow key 입력 및 점수 확인
    cy.get('.maze-board')
    cy.get('body').type(`{downArrow}`)
    cy.get('body').type(`{rightArrow}`)
    cy.get('body').type(`{rightArrow}`)
    cy.get('body').type(`{rightArrow}`)
    cy.get('body').type(`{downArrow}`)
    cy.get('body').type(`{downArrow}`)

    cy.get('body').should('include.text', 'score: -6');

    // 골인
    cy.get('body').type('{downArrow}');
    cy.get('body').should('include.text', 'score: 0');

    // 정답보기 버튼 클릭
    cy.contains('정답보기').click();
  })
});
