/* global $ */

$(document).ready(function(){
	$.getJSON("/api/todos")
	.then(addTodos)
	.catch(function(err){
		res.send(err);
	})
		
	$('#todoInput').keypress(function(event){
		if(event.which == 13){
			createTodo();
		}
	})
	
	$('list').on('click', 'li', function(){
		updateTodo($(this));
	})
	
	$('.list').on('click', 'span', function(ev){
		ev.stopPropagation();
		removeTodo($(this).parent());
	});
	
});

function addTodos(todos){  //TODOS Plural!!
	todos.forEach(function(todo){
		addTodo();
	});
}

function addTodo(todo){ //TODO Singular!!
	var newTodo = $('<li class="task">'+newtodo+' <span>X</span></li>');
	newTodo.data('id', todo._id);
	newTodo.data('completed', todo.completed)
	if(todo.completed){
		newTodo.addClass("done");
	}
	$('.list').append(newTodo);
}

function createTodo(){
	var usrInput = $('#todoInput').val();
	$.post('/api/todos', {name: usrInput})
	.then(function(newTodo){
		$('#todoInput').val('');
		addTodo(newTodo);
	})
	.catch(function(err){
		console.log(err);
	});
}

function removeTodo(todo){
	//$(this).parent().remove();
	var clickedId = todo.data('id');
	var deleteUrl = '/api/todos' + clickedId;
	$.ajax({
		method: 'DELETE',
		url: deleteUrl
	})
	.then(function(){
		todo.remove();
	})
	.catch(function(err){
		console.log(err);
	})

}

function updateTodo(todo){
	var updateUrl = '/api/todos/'+ todo.data('id');
	var isDone = !todo.data('completed');
	var updataData = {completed: isDone};
	$.ajax({
		method: 'PUT',
		url: updateUrl,
		data: updateData
	})
	.then(function(updatedTodo){
		todo.toggleClass('.done');
		todo.data('completed', isDone)
	})
}