import React from 'react'
import Button from 'react-bootstrap/Button'

const UserTable = (props: any) => {

  const handleDeleteUser = (id:any) => {
    let answer = window.confirm('Вы действительно хотите удалить этого студента?')
     if (answer) {
          props.deleteUser(id)
        }
  }
  
  return (
    <table className ="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Имя</th>
        <th scope="col">Фамилия</th>
        <th scope="col">Дата Рождения</th>
        <th scope="col">Успеваемость</th>
        <th scope="col">Редактировать</th>
        <th scope="col">Удалить</th>
      </tr>
    </thead>
    <tbody>
        {props.users.length > 0 ? (
          props.users.map((user: any) => (
            <tr key={user.id} >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.date}</td>
              <td>{user.progress}</td>
              <td>
                <Button variant="light" className="mr-1" onClick={() => {props.editRow(user)}}>Редактировать</Button>
              </td>
              <td>
                <Button variant="danger" className="mr-1" onClick={() => handleDeleteUser(user.id)}>Удалить</Button>
              </td> 
            </tr>
          ))
        ) : (
            <tr>
              <td colSpan={3}>Студентов нет</td>
            </tr>
        )}
    </tbody>
  </table>
  )

}

export { UserTable }