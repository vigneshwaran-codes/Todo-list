import React from 'react'
import {
  InputGroup,
  Container,
  Col,
  Row,
  Button,
  Form,
  FormControl
} from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

const FormTodo = ({ setText, setTodos, inputText, todos, editTodo, setEditTodo }) => {
  // Update Todo after edit
  const updatedTodo = (inputText, id, completed) => {
    const newTodo = todos.map((todo) => todo.id === id ? { inputText, id, completed } : todo)
    setTodos(newTodo)
    setEditTodo('')
  }
  // Add Todo
  const AddTodo = (e) => {
    e.preventDefault()
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), inputText: inputText, completed: false }])
      setText('')
    } else {
      updatedTodo(inputText, editTodo.id, editTodo.completed)
    }
  }

  // Complete Todo

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    )
  }

  return (
    <div className='form-container'>
      <br />
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <InputGroup>
                <FormControl onClick={handleComplete} value={inputText} onChange={(e) => setText(e.target.value)} required />
                <Button type='submit' onClick={AddTodo} variant='light' style={{ background: '#FC76A1' }} disabled={!inputText}>
                  {editTodo ? <i className='fa fa-solid fa-check' /> : <i className='fa fa-solid fa-plus' />}
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FormTodo
