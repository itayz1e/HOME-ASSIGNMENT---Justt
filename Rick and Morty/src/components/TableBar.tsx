import "../style/CharacterCard.scss";

type TableBarProps = {
  tbody: React.ReactNode;
};

const TableBar: React.FC<TableBarProps> = ({ tbody }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Species</th>
          <th>Status</th>
          <th>Origin</th>
          <th>Gender</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>{tbody}</tbody>
    </table>
  );
};

export default TableBar;

