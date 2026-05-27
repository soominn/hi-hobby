# JSP Team Project: 하이하비(hi-hobby)

원데이·온라인 클래스 교육 서비스를 주제로 한 JSP 팀 프로젝트입니다.  
회원/클래스/주문/쿠폰/문의/관리자 기능을 모듈화하여 구현했습니다.

---

## 1) 프로젝트 소개

**하이하비(hi-hobby)**는 사용자가 클래스(원데이/온라인)를 탐색하고 구매하며,  
크리에이터는 클래스를 등록/관리할 수 있는 교육 서비스 웹 애플리케이션입니다.

- 일반 회원: 회원가입, 로그인, 마이페이지, 클래스 조회/구매, 쿠폰 조회
- 크리에이터: 클래스 등록/수정/관리
- 관리자: 클래스 승인, 문의 확인, 관리자 페이지 운영

---

## 2) 핵심 구현 포인트

- **멀티 Front Controller 라우팅**
  - `*.us`(User), `*.cl`(Class), `*.in`(Inquiry), `*.or`(Order), `*.ad`(Admin), `*.co`(Coupon)
  - `web.xml`에서 도메인별 Front Controller로 분기
- **Action 패턴**
  - `Action` 인터페이스 + `ActionInfo`(forward/redirect 경로) 기반 처리
- **MyBatis 기반 데이터 계층**
  - `UserMapper`, `ClassMapper`, `CouponMapper`, `InquiryMapper`, `OrderMapper`, `AdminMapper`, `FileMapper`
- **회원 기능**
  - 회원가입, 로그인/로그아웃, 마이페이지, 비밀번호 변경, 탈퇴
  - 이메일 중복검사 및 로그인 보조 쿠키 처리
- **쿠폰 기능**
  - 쿠폰 생성/조회/검증 로직 구현
- **SMS 인증 연동**
  - 회원가입 과정에서 휴대폰 인증 흐름 지원

---

## 3) 내가 담당한 역할

- 부팀장
- 서비스 기획 및 주요 프론트엔드 페이지 작업
- `web.xml` 라우팅 구성 및 Front Controller 구조 설계 참여
- 회원 도메인 핵심 기능 구현
  - 로그인/로그아웃/회원가입/마이페이지
- 쿠폰 기능 구현
  - 쿠폰 생성/체크/조회
- SMS 인증 API 연동 기능 구현

---

## 4) 기술 스택

- **Backend**: Java, JSP, JSTL, EL, Servlet
- **Frontend**: HTML, CSS, JavaScript, jQuery, AJAX
- **Database**: MySQL
- **ORM/Mapper**: MyBatis
- **Server/Env**: Apache Tomcat, Eclipse Dynamic Web Project 기반 구조

---

## 5) 프로젝트 구조

```text
hi-hobby/
├─ WebContent/                # JSP, 정적 리소스(css/js/img), 사용자 화면
│  ├─ WEB-INF/
│  │  └─ web.xml              # 도메인별 Front Controller 매핑
│  └─ *.jsp
├─ src/com/hi_hobby/
│  ├─ action/                 # Action, ActionInfo
│  ├─ user/                   # 회원 관련 액션/컨트롤러
│  ├─ _class/                 # 클래스 관련 액션/컨트롤러
│  ├─ coupon/                 # 쿠폰 관련 액션/컨트롤러
│  ├─ inquiry/                # 문의 관련 액션/컨트롤러
│  ├─ order/                  # 주문 관련 액션/컨트롤러
│  ├─ admin/                  # 관리자 관련 액션/컨트롤러
│  └─ domain/
│     ├─ dao/                 # DAO
│     └─ vo/                  # VO/DTO
└─ src/com/mybatis/
   ├─ config/                 # MyBatis 설정
   └─ mapper/                 # Mapper XML
```

---

## 6) 실행 방법 (로컬)

### 1. 사전 준비
- JDK 8+ (권장)
- Apache Tomcat 9+
- MySQL
- Eclipse (Dynamic Web Project) 또는 동등한 WAS 배포 환경

### 2. DB 설정
- MyBatis 설정 파일: `src/com/mybatis/config/config.xml`
- JDBC URL / 계정 / 비밀번호를 로컬 환경에 맞게 수정

### 3. 서버 실행
- 프로젝트를 Tomcat에 배포 후 실행
- 기본 진입은 `index.jsp` (welcome-file 설정 참고)

---

## 7) 주요 기능 예시

- 회원가입/로그인/자동 로그인 처리
- 마이페이지(내 정보 조회/수정)
- 클래스 목록/상세/등록/관리
- 쿠폰 생성/조회/검증
- 문의 등록/조회/관리자 확인
- 관리자 로그인 및 승인 프로세스

---

## 8) 회고

첫 팀 프로젝트를 진행하며 가장 크게 배운 점은 **소통과 구조화의 중요성**이었습니다.  
초기에는 각자 개발 후 병합 과정에서 충돌이 많았지만, 역할 분담과 규칙을 정리하면서  
개발 속도와 정확도가 크게 개선되었습니다.

또한 Servlet/JSP 기반 MVC 패턴과 Front Controller 구조, MyBatis 연동을 실제 서비스 흐름에 적용하며  
백엔드 전반(요청 라우팅 → 비즈니스 로직 → DB 매핑)의 감각을 쌓을 수 있었습니다.

---

## 9) DB 엔티티 관계도

프로젝트에서 설계한 하이하비 DB ERD입니다.

- 이미지: ![DB 하이하비](https://user-images.githubusercontent.com/82988454/180592746-2a76f0ac-593c-459c-b332-bd4ebb2af5fe.JPG)

---

## 10) 참고

- 원본 저장소: https://github.com/soominn/hi-hobby
