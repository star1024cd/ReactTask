import React from "react";

<div className="medal-list-container">
  <table className="medal-list-table">
    <thead className="table-header">
      <tr>
        <th>국가명</th>
        <th>금메달</th>
        <th>은메달</th>
        <th>동메달</th>
        <th>총 메달수</th>
        <th>액션</th>
      </tr>
    </thead>
    <tbody>
      {countries.map((item) => (
        <tr key={item.id}>
          <td>{item.country}</td>
          <td>{item.gold}</td>
          <td>{item.silver}</td>
          <td>{item.bronze}</td>
          <td>{item.totalMedals}</td>
          <td>
            <button onClick={() => handleDelete(item.id)}>삭제</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>;

export default List;
