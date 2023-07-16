$('#registrationForm').on('submit', function (e) {
  e.preventDefault();

  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var email = $('#email').val();
  var password = $('#password').val();
  var confirmPassword = $('#confirmPassword').val();

  if (email.indexOf('@') === -1) {
    $('#message').html(
      '<div class="alert alert-danger">Invalid email address.</div>'
    );
    return;
  }

  if (password !== confirmPassword) {
    $('#message').html(
      '<div class="alert alert-danger">Passwords do not match.</div>'
    );
    return;
  }

  $.ajax({
    url: 'register.php',
    type: 'POST',
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    },
    success: function (data) {
      if (data === 'success') {
        $('#registrationForm').hide();
        $('#message').html(
          '<div class="alert alert-success">Registration successful.</div>'
        );
      } else {
        $('#message').html(
          '<div class="alert alert-danger">' + data + '</div>'
        );
      }
    },
  });
});
