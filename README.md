# My Todo List

### 🖥️프로젝트 소개

- yarn, 컴포넌트와 리액트 훅 요소 (useState) 를 사용하여 나만의 Todo List 를 만들었습니다.

<br>

### 🕰️개발 기간

- 24.05.11 ~ 05.15

<br>

### 📌기능

- Todo 목록을 추가/삭제할 수 있으며, 완료/취소시 상태를 변경하여 계획칸의 색상이 변경되고 상태에 따라 목록의 위치가 달라집니다.
- 유효성 검사를 통하여 제목이나 내용이 빈칸일 경우, 계획을 추가할 수 없습니다. 이러한 알림을 모달창으로 보여줍니다.

<br>

### 🗂️ 폴더구조

```
📦TODO-LIST
├─ .eslintrc.cjs
├─ .gitignore
├─ README.md
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─📂src
│  ├─📜 App.css
│  ├─📜 App.jsx
│  ├─📜 Input.css
│  ├─📜 Input.jsx
│  ├─📜 Plan.css
│  ├─📜 Plan.jsx
│  ├─📜 PlansList.jsx
│  ├─📂 assets
│  │  └─ react.svg
│  ├─ index.css
│  └─ main.jsx
├─ vite.config.js
└─ yarn.lock
```

<br>

### 🗄️파일설명

- App.jsx : 사용자가 할 일을 입력할 수 있고, 이를 추가 / 삭제 / 완료 상태로 관리할 수 있는 기능을 구현하고 있습니다.
- Input.jsx : 사용자로부터 제목과 내용을 입력받아 할 일을 추가할 수 있는 컴포넌트입니다.
- Plan.jsx : 각 할 일의 제목과 내용을 보여주고, 사용자가 할 일을 완료하거나 삭제할 수 있는 기능을 제공하는 컴포넌트입니다.
- PlanList.jsx : 완료된 작업과 진행 중인 작업을 분류하여 각각을 리스트 형태로 보여주는 컴포넌트입니다.
- App.css : 전체적인 스타일링 및 반응형 레이아웃을 위한 CSS 스타일을 정의합니다.
- Input.css : 입력 폼의 레이아웃을 포함한 시각적 스타일을 정의합니다.
- Plan.css : 계획목록의 각 항목과 완료 상태와 작업 중 상태에 따른 스타일을 정의합니다.
