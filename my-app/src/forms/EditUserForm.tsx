import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const EditUserForm = (props: any) => {  
  const [user, setUser] = useState(props.currentUser)
  useEffect(
    () => {
        setUser(props.currentUser)
    },
    [props]
  )

  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (!user.name || !user.lastname) return    
    props.updateUser(user.id, user)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Form.Group controlId="Name">
      <Form.Label>Имя студента</Form.Label>  
      <Form.Control type="text" placeholder="Иван" name="name" value={user.name} onChange={handleInputChange} required/>
    </Form.Group>

    <Form.Group controlId="Name">
      <Form.Label>Фамилия студента</Form.Label>  
      <Form.Control type="text" placeholder="Иванов" name="lastname" value={user.lastname} onChange={handleInputChange} required/> 
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
            defaultValue='Хорошо' 
            name="progress"
            value={user.progress} 
            onChange={handleInputChange}
            >
          <option>Укажите успеваемость студента</option>
          <option>Неудовлетворительно</option>
          <option>Удовлетворительно</option>
          <option>Хорошо</option>
          <option>Отлично</option>
        </Form.Control>
    </Form.Group>
    <Button variant="primary" type="submit">
      Применить
    </Button>
    <Button variant="danger" 
    className="mr-1" 
    onClick={() => props.setEditing(false)}
    >
        Отмена
    </Button>      
    </form>
  )
}

export { EditUserForm }