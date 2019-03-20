// Checking page title
if (document.title.indexOf("War Game") != -1) {
  var csrf = getCookie('csrf_cookie_name');
  var form_content = `<legend>Hãy nhập mật khẩu cho Level hiện tại</legend>
  <div class="form-group">
    <label for="password" class="hidden">Mật khẩu</label>
    <div class="input-group">
      <div class="input-group-addon"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span></div>
      <input type="text" class="form-control" name="password" placeholder="Vừng ơi mở ra..." autocomplete="off" autofocus="" required="">
      <input type="hidden" name="csrf_test_name" value="${csrf}">
      <span class="input-group-btn">
        <button type="submit" class="btn btn-primary"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Kiểm tra</button>
      </span>
    </div>
  </div>`;
  document.getElementById('form').innerHTML = form_content;
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
