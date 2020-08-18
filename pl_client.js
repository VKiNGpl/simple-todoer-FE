$(() => {
    $.get(API_URL).then((todos) => {
      const $todos = $('.todos');
      todos.forEach(todo => {
          $todos.append(`<a href="pl_single.html?id=${todo.id}" class="list-group-item list-group-item-action">${todo.title}</a>`);
      });
    });
  });