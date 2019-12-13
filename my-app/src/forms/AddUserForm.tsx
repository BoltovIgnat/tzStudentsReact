import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
//import Collapse from 'react-bootstrap/Collapse'
//import { render } from '@testing-library/react'

const AddUserForm = (props: any) => {
  
  const initialFormState = { id: null, name: '', lastname: '', date: '',  progress: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event: any) => {
    const { name, value } = event.currentTarget
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (event: any) => {    
    event.preventDefault()
    if (!user.name || !user.lastname) return
    props.addUser(user)
    setUser(initialFormState)    
  }

  return (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="Name">
      <Form.Label>Имя студента</Form.Label>  
      <Form.Control type="text" placeholder="Иван" name="name" value={user.name} onChange={handleInputChange} required />
    </Form.Group>

    <Form.Group controlId="Name">
      <Form.Label>Фамилия студента</Form.Label>  
      <Form.Control type="text" placeholder="Иванов " name="lastname" value={user.lastname} onChange={handleInputChange} required /> 
    </Form.Group>

    <Form.Group controlId="birthDate">
      <Form.Label>Дата рождения</Form.Label>
      <Form.Control 
          type="date" 
          placeholder="Дата"    
          name="date" 
          value={user.date} 
          onChange={handleInputChange}
          required 
        />
    </Form.Group>

    <Form.Group controlId="progress">
        <Form.Label>Оценка</Form.Label>
        <Form.Control as="select"             
            name="progress"
            value={user.progress} 
            onChange={handleInputChange}>
          <option>Укажите успеваемость студента</option>
          <option>Неудовлетворительно</option>
          <option>Удовлетворительно</option>
          <option>Хорошо</option>
          <option>Отлично</option>
        </Form.Control>
    </Form.Group>

    <Button variant="primary" type="submit">
      Добавить
    </Button>
  </Form>
  )
}

export default AddUserForm