$(() => {
  // ready function
  $('form').submit((event) => {
    event.preventDefault();
    const todo = getTodoFromForm();

    $.post(API_URL, todo)
      .then(() => {
        window.location = '/todoer/en_index.html';
      })
      .catch((error) => {
        const $errorMessage = $('#errorMessage');
        $errorMessage.text(error.responseJSON.message);
        $errorMessage.css('display', '');
      });
  });
});