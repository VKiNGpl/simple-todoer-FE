// this is the 'static' server

// the client side page loads up and makes an AJAX request to the express server
$(() => {
  $.get(API_URL).then((todos) => {
    const $todos = $('.todos');
    todos.forEach(todo => {
        $todos.append(`<a href="en_single.html?id=${todo.id}" class="list-group-item list-group-item-action priority${todo.priority}">${todo.title}</a>`);
    });
  });
});