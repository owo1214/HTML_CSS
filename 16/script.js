id=prompt('아이디 입력'); 
if(id=='admin') {
password=prompt('비밀번호 입력');
if(password==='123456') {
location.href="20-1_js.html"
}
else {
location.href="20-2_js.html"
}
}
else {
location.href="20-2_js.html"
}