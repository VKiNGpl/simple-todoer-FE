$(() => {
    // parse the url to get the id
    const id = getIdFromQuery();
  
    // make a get request to get the todo
    getOne(id).then((todo) => {
      $('#title').text(todo.title);
      $('#priority').text(`Priorytet: ${todo.priority}`).addClass(`priority${todo.priority}`);
      $('#description').text(todo.description);
      $('#date').text(`Utworzono: ${todo.date}`);
      $('#editBtn').attr('href', `/todoer/pl_edit.html?id=${todo.id}`);
    });
  
    $('.deleteBtn').click(deleteTodo);
  
    function deleteTodo() {
      $.ajax({
        type: 'DELETE',
        dataType: 'json',
        url: `${API_URL}/${id}`,
      }).then(() => {
        window.location = '/todoer/pl_index.html';
      });
    }
  });
  