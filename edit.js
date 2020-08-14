$(() => {
  const id = getIdFromQuery();

  getOne(id).then((todo) => {
    $('#title').val(todo.title);
    $(`option[value=${todo.priority}]`).attr('selected', 'selected');
    $('#description').val(todo.description);
  });

  $('form').submit((event) => {
    event.preventDefault();
    const todo = getTodoFromForm();

    $.ajax({
        type: 'PUT',
        dataType: 'json',
        url: `${API_URL}/${id}`,
        data: todo

    }).then(() => {
        redirectById(id);
    });
  });
});
