# 2022 원티드 프리온보딩 프론트엔드 코스 기업과제 - 로그프레소

#### 💡[배포 페이지 바로가기](https://wanted-codestates-project-2-3.vercel.app/)💡

## 사용 스택

<p>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" />
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  <img src="https://img.shields.io/badge/react--icons-brightgreen?style=for-the-badge" />
</p>

## 기능 구현


### 기능: 컴포넌트 이동 버튼

5가지의 버튼이 어느 쪽의 컴포넌트를 반대쪽으로 이동해 주어야한다는 공통적인 기능이 있기 때문에 최대한 코드 중복을 줄이는 것에 집중했습니다.

moveMoment()라는 메소드를 만들고 인자로 `movekey`를 전달받고 switch 을 통해 5가지의 기능을 분기 처리해주었습니다.

컴포넌트를 전달하는 쪽에서는 filtered 메소드를 통해 선택되지 않은 컴포넌트만 남도록 하였고,

컴포넌트를 전달받는 쪽에서는 (...)Spread Operation을 사용하여 기존 컴포넌트와 합쳐주었습니다.

```js
const moveMoment = (type: string) => {
    switch (type) {
      case "reset":
        setAvaliableData(emojiMenus);
        setSelectedData([]);
        return;
      case "SToA_all":
        setAvaliableData(emojiMenus);
        setSelectedData([]);
        return;
      case "AToS_all":
        setAvaliableData([]);
        setSelectedData(emojiMenus);
        return;
      case "SToA_selected":
        setAvaliableData([...avaliableData, ...nowSelected]);
        setSelectedData(filteredItems(selectedData));
        return;
      case "AToS_selected":
        setAvaliableData(filteredItems(avaliableData));
        setSelectedData([...selectedData, ...nowSelected]);
        return;
      default:
        alert("유효하지 않은 작업입니다.");
    }
  };
```

### 기능: Menu Component(setting)
#### husky, style-lint적용 이유

팀원들과 지속적으로 프로젝트를 진행하면서 css의 순서까지 맞추기로 하였습니다.

저는 팀원이 공유해준 css정렬 순서에 관한 블로그 글을 보며 계속 css를 맞추게 되었습니다.

이러한 일련의 행위가 번거롭게 느껴서 적용하게 되었습니다.

전략: pre-commit시 staging중인 파일에 대해서 style-lint와 eslint검사

#### useReducer의 사용 이유

setting에는 타이틀, 제목, 검색, multiSelect, 갯수표시여부, 아이템 크기, container크기라는 많은 데이터를 가지고 있습니다.

많은 데이터를 하나의 공통된 setting이라는 속성으로 가지고 있습니다. 

따라서 useState를 사용하기 보다는 useReducer를 도입하게 되었습니다. 

또한 App내에서 많은 depth가 존재하지 않기 때문에 contextApi를 도입하지 않고 단순히 useReducer만을 사용하였습니다.

사용하면서 느꼈던 장점

1. 비즈니스로직과 UI로직간의 분리가 더 용이.
2. dispatch를 통한 일관된 데이터 처리

#### 만들면서 고려한 점

중요하게 생각했던 부분은 함수의 역할과 책임입니다.

하나의 함수에 하나의 책임만을 가진다면 테스트하기 쉬워지고 재사용하기 더 편해진다고 생각합니다.

따라서 하나의 기능만을 가질 수 있도록 노력했습니다.

또한 사람들이 index.tsx를 보았을 때 원하는것은 마크업이라 생각합니다.

따라서 tsx에는 마크업만 들어갈 수 있도록 노력하였고, 로직은 훅으로 분리하였습니다.


## 팀원 소개

| 이름         | 깃허브                                        |
| ------------ | --------------------------------------------- |
| 강동진       | [jinn2u](https://github.com/jinn2u)           |
| 박상우       | [SangWoo9734](https://github.com/SangWoo9734) |
| 신항민       | [ssinking91](https://github.com/ssinking91)   |
| 이장민       | [leo-xee](https://github.com/leo-xee)         |
| 오카무라카에 | [kaehehehe](https://github.com/kaehehehe)     |
| 허민         | [hhhminme](https://github.com/hhhminme)       |
| 전호용       | [mooroom](https://github.com/mooroom)         |
