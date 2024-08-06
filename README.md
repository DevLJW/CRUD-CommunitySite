<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->


<!-- TABLE OF CONTENTS -->
<details>
  <summary>목차</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## CRUD기반 커뮤니티 사이트
![소통 메인](https://github.com/user-attachments/assets/67f6d109-1ada-4e96-b67f-13e7ee75270f)
<br>


  
## 개발동기
사용자들끼리 서로 소통이 가능한 CRUD 기반 커뮤니티 사이트를 제작 했습니다.<br>
대부분의 사이트들에 있는 게시판,회원가입,로그인 기능들을 Front,Backend,DB를 학습해보고<br>
1인 개발에 적절한 범위라고 생각하여 개발을 하게 되었습니다.
<br>
<br>

## 개발기간
2024.01.10 ~ 2024.03.10
<br>
<br>


## 역할:
* 1인개발
* 프론트엔드
* 백엔드
* 데이터 베이스 설계
<br>



## 기술 스택
### FrontEnd
<div>
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/ReactHookForm-EC5990?style=for-the-badge&logo=ReactHookForm&logoColor=black">
<img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=Recoil&logoColor=black">
<img src="https://img.shields.io/badge/Emotion-EC5990?style=for-the-badge&logo=Emotion&logoColor=black">
</div>

### BackEnd
<div>
<img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=NestJS&logoColor=black">
</div>

### DataBase
<div>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=black">
<img src="https://img.shields.io/badge/TypeORM-FE0803?style=for-the-badge&logo=TypeORM&logoColor=black">
</div>

### API
<div>
<img src="https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=GraphQL&logoColor=black">
</div>

<br>
<br>

## 주요기능소개
### 1. 회원가입
 <img src="https://github.com/user-attachments/assets/089e63cb-d3f5-4584-a6fd-2e3500c0484d" width="80%" height="60%">
 <br><br><br>
회원가입 필드는, 이메일,이름,닉네임,패스워드,패스워드 확인,연락처 인증번호 확인란으로 구성이 되어 있습니다.<br>
Form 같은 경우, React-Hook-Form으로 구성을 했습니다. 리렌더를 최소화 시키고, 실시간 동기화를 하기 위하여 사용 했습니다.<br>
인증 메세지 같은경우, Cool-SMS API를 사용 했습니다.<br>
회원가입 성공 시, JOIN_USER API를 호출하여 입력받은 값을 TypeOrm을 통하여 DB에 저장시킵니다.<br>
패스워드 같은 경우, crypto 라이브러리를 통하여 암호화 시킨 후 DB에 저장 합니다.





<br>


### 2. 로그인
 <img src="https://github.com/user-attachments/assets/890ca0dc-cd72-45b4-be05-fd2373b08c3f" width="80%" height="60%">
  <br><br><br>
로그인 필드는 이메일,패스워드 필드란으로 구성이 되어있고, React-Hook_Form으로 구성 했습니다.<br>
입력한 데이터가 DB의 데이터와 일치하면, 로그인이 성공 합니다.<br>
패스워드 같은경우 백엔드에서 복호화를 통하여 입력한 패스워드와 DB의 패스워드와 일치한지 비교 합니다.<br>
로그인 성공 시, 사용자에게 AccessToken을 부여하며 글로벌 스테이트 인 Recoil에 저장 합니다. 부여받은 AccessToken을 통해 인가를 받게 됩니다.
현재는 로그인 시, AccessToken을 부여하는 방식 이지만, 추후 RefreshToken을 추가하여 AccessToken 만료시, RefreshToken을 통하여 재발급 예정 입니다.


### 3. 게시글 작성
 <img src="https://github.com/user-attachments/assets/eda3f001-d725-45e7-a9cd-622d91e8c961" width="80%" height="60%">
  <br><br><br>

 

게시글 작성 필드는 작성자,비밀번호,제목,내용,이미지 업로드란으로 구성이 되어 있습니다.<br>
이미지 업로드 같은경우, 최대 3장까지만 업로드가 가능 합니다.<br>
이미지 저장 스토리지 서버는 구글 클라우드를 사용 했습니다.<br>
사용자가 브라우저에서 업로드할 이미지 파일을 선택 후 "확인" 버튼을 클릭하면,<br>
선택한 파일 객체를 백엔드 서버에 API를 요청하여 백엔드 서버에서 구글스토리지에 파일을 저장하고<br>
스토리지에서는 파일을 저장한 결과로 사진주소를 백엔드 서버에 리턴 해줍니다.<br>
백엔드 서버에서 다시, 반환받은 이미지 주소를 브라우저에게 전달 해주는 프로세스로 구현 했습니다.

### 4. 게시글 상세보기
 <img src="https://github.com/user-attachments/assets/1f05ce1e-5e61-4784-988b-53d489bcf132" width="80%" height="60%">
  <br><br><br>


게시글 상세보기는 작성자,작성날짜,내용,제목,목록버튼,수정버튼,삭제버튼으로 구성되어 있습니다.<br>
게시글 리스트 화면에서 해당 게시글을 클릭하면 클릭한 게시글에 대한 상세내용을 확인 할 수 있습니다.<br>
목록버튼이나 수정버튼 같은경우, 게시글 리스트화면에서 게시글을 클릭했을때, 클릭한 게시글의 ID를 Recoil에 저장하고,<br>
백엔드 API로 Recoil에 저장되어 있는 게시글ID를 파라미터로 넘겨, 해당 게시글의 작성자의 이름과 현재 로그인한 사용자의 이름이 같다면,<br>
수정하기 버튼과 삭제하기 버튼을 노출 합니다.








Use the `BLANK_README.md` to get started.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
