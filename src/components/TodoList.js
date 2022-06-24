import React from 'react'
import { Button, Row, Col, Card } from 'react-bootstrap'

export default function TodoList ({ todos, setTodos, setEditTodo }) {
  // Delete Todo
  const deleteTodo = (id) => {
    const newTodo = todos.filter(todo => todo.id !== id)
    setTodos(newTodo)
  }
  // Edit Todo
  const editTodoList = (id) => {
    const selectedTodo = todos.find(todo => todo.id === id)
    setEditTodo(selectedTodo)
  }
  console.log(editTodoList)
  return (
    <div className='todo-container'>
      {todos.map(todo => {
        return (
          <div key={todo.id} style={{ marginTop: '10px' }}>
            <Row>
              <Col md={{ span: 4, offset: 4 }}>
                <Card body>
                  {todo.inputText}
                  {' '}
                  <Button
                    onClick={() => {
                      editTodoList(todo.id)
                    }}
                    variant='dark'
                  ><i className='fa fa-pencil' />
                  </Button>
                  {' '}
                  <Button
                    variant='dark' onClick={() => {
                      deleteTodo(todo.id)
                    }}
                  ><i className='fa fa-solid fa-trash' />
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
        )
      })}
    </div>
  )
}
