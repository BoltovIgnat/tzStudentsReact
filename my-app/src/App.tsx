import React, { useState } from 'react'
import { EditUserForm } from './forms/EditUserForm'
import AddUserForm from './forms/AddUserForm'
import { UserTable } from './tables/UserTable'
import './App.css'

const App = () => {

  //создадим объект
  const usersData = [
    { id: 1, name: 'Василий', lastname: 'Пупкин', date: '11/11/98', progress: 'Отлично'  },
    { id: 2, name: 'Евлампий', lastname: 'Половинин', date: '11/11/98', progress: 'Неудовлетворительно' },
  ]
  var serialusersData = JSON.stringify(usersData);

  localStorage.setItem("usersData", serialusersData); 

  var returnObj = JSON.parse(localStorage.getItem("usersData") || '{}') 
  
  const [users, setUsers] = useState(returnObj)
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', lastname: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)
  
  const addUser = (user: any)  => {
    user.id = users.length + 1
    setUsers([ ...users, user ])    
  }

  const deleteUser = (id: any) => {
    setEditing(false)
    setUsers(users.filter((user: any) => user.id !== id))
  }

  const updateUser = (id: number, updatedUser: any) => {
    setEditing(false)
    setUsers(users.map((user: any) => (user.id === id ? updatedUser : user)))
  }

  const editRow = (user: any) => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, lastname: user.lastname })
  }

  return (
    <div className="container">
      <h1>Список студентов</h1>
      <div className="flex-row">
        <div className="flex-large">
           {/* редактируем ? рисуй форму редактирования, иначе - форму добавления */}
           {editing ? (
            <div>
              <h3>Редактирование студента</h3>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
             ) : (
            <div>
          <h2>Добавить нового студента</h2>          
          <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>Принятые студенты</h2>          
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App
