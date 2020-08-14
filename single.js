$(() => {
  // parse the url to get the id
  const id = getIdFromQuery();

  // make a get request to get the todo
  getOne(id).then((todo) => {
    $('#title').text(todo.title);
    $('#priority').text(`Priority: ${todo.priority}`);
    $('#description').text(todo.description);
    $('#date').text(`Created: ${todo.date}`);
    $('#editBtn').attr('href', `/edit.html?id=${todo.id}`);
  });

  $('.deleteBtn').click(deleteTodo);

  function deleteTodo() {
    $.ajax({
      type: 'DELETE',
      dataType: 'json',
      url: `${API_URL}/${id}`,
    }).then(() => {
      window.location = '/';
    });
  }
});
