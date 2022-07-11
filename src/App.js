import React, { useState, useEffect } from 'react'
import './App.css'
import { Nav, Navbar, Container } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import TodoList from './components/TodoList'
import FormTodo from './components/Form'
import Timer from './Timer'

function App () {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)

  useEffect(() => {
    if (editTodo) {
      setInputText(editTodo.inputText)
    } else {
      setInputText('')
    }
  }, [setInputText, editTodo])

  return (
    <div className='App'>
      <Navbar expand='xll' className='navbar' variant='dark' sticky='top'>
        <Container>
          <Navbar.Brand href='#home'>Todo-App</Navbar.Brand>
          <Navbar.Brand><Timer /></Navbar.Brand>
        </Container>
      </Navbar>
      <Nav
        className='justify-content-end'
        variant='pills'
        defaultActiveKey='/home'
        style={{ marginTop: '12px' }}
      >
        <Nav.Item>
          <Nav.Link href='/home'>All</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-1'>Uncompleted tasks</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-2'>Completed tasks</Nav.Link>
        </Nav.Item>
      </Nav>
      <FormTodo
        setText={setInputText}
        setTodos={setTodos}
        inputText={inputText}
        todos={todos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <TodoList todos={todos} setTodos={setTodos} inputText={inputText} setEditTodo={setEditTodo} />
    </div>
  )
}
export default App
