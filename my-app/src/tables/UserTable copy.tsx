import React from 'react'

const UserTable = (props: any) => (
  <table>
    <thead>
      <tr>
        <th>ФИО</th>
        <th>Дата рождения</th>
        <th>Успеваемость</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user: any) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button className="button muted-button">Изменить</button>
              <button className="button muted-button">Удалить</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export { UserTable }