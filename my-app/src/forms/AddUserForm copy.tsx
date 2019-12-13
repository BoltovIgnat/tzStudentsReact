import React from 'react'

const AddUserForm = () => {
  return (
    <form>
      <label>ФИО</label>
      <input type="text" name="name" value="" />
      <label>Дата рождения</label>
      <input type="text" name="username" value="" />
      <button>Добавить студента</button>
    </form>
  )
}

export default AddUserForm 