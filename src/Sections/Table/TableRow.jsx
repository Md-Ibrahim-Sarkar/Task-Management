import { Button, Table } from 'flowbite-react';

function TableRow() {
  return (
    <Table.Row className="bg-white  text-black dark:text-white">
      <Table.Cell>1</Table.Cell>
      <Table.Cell>API Build</Table.Cell>
      <Table.Cell>Create an API by using laravel platform</Table.Cell>
      <Table.Cell>Nasrullah Mansur</Table.Cell>
      <Table.Cell>Height</Table.Cell>
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
