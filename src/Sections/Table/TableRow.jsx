import { Button, Table } from 'flowbite-react';

function TableRow({ tasksData,index }) {
  let {title, description,assignedTo,priority} = tasksData
  return (
    <Table.Row className="bg-white  text-black dark:text-white">
      <Table.Cell>{index +1}</Table.Cell>
      <Table.Cell>{title}</Table.Cell>
      <Table.Cell>{description}</Table.Cell>
      <Table.Cell>{assignedTo}</Table.Cell>
      <Table.Cell>{priority}</Table.Cell>
      <Table.Cell>
        <a
          href="#"
          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 me-2"
        >
          Edit
        </a>
        <a href="#" className="font-medium text-rose-600 hover:underline ">
          Delete
        </a>
      </Table.Cell>
    </Table.Row>
  );
}

export default TableRow;
