import React from 'react'

const TableBar = ({tbody}:any) => {
  return (
    <table>
    <thead>
      <tr>
        <th>I.d</th>
        <th>Name</th>
        <th>Species</th>
        <th>Status</th>
        <th>Origin</th>
        <th>Gender</th>
        <th>More</th>
      </tr>
    </thead>
    <tbody>
        {tbody}
    </tbody>
    </table>
  )
}

export default TableBar
