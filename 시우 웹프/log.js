// login-script.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 이벤트 기본 동작 막기

    // 사용자 입력값 가져오기
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 예시: 서버에서 받아오는 로그인 데이터 (여기서는 클라이언트 측에서 테스트용으로 처리)
    const correctUsername = 'admin';
    const correctPassword = '1234';

    // 사용자 입력값과 서버의 올바른 데이터 비교
    if (username === correctUsername && password === correctPassword) {
        alert('로그인 성공!');
        window.location.href = 'Letter.html';  // 로그인 성공 시 이동할 페이지 (예: 대시보드)
    } else {
        // 로그인 실패 시 에러 메시지 표시
        document.getElementById('error-message').classList.remove('hidden');
    }
});
