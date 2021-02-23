'use strict';
    function checkForm() {
      const user = document.getElementById('form').user.value;
      const password = document.getElementById('form').password.value;
      const passwordcheck = document.getElementById('form').passwordcheck.value;
      const mail = document.get
      if (user == "" || password == "" || passwordcheck == "" || mail == "") {
        document.getElementById('output').textContent = '必須項目を入力してください';
        return false;
      } if (password != passwordcheck) {
        document.getElementById('output').textContent = 'パスワードが一致しません';
        return false;
      } else {
        return true;
      }
    }


    document.getElementById('form').onsubmit = function (event) {
      event.preventDefault();
      const search = document.getElementById('form').user.value;
      const search1 = document.getElementById('form').password.value;
      const search2 = document.getElementById('form').passwordcheck.value;
      const search3 = document.getElementById('form').mail.value;
      const search4 = document.getElementById('form').tel.value;
      document.getElementById('output').textContent = '登録が完了しました';
    };
    