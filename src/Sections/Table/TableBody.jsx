import { Button, Table } from 'flowbite-react';
import TableRow from './TableRow';

import SearchTask from './SearchTask';



function NoData() {
  return (
    <Table.Row className="bg-white  text-black">
      <Table.Cell colSpan={6} className="text-center">
        No data Found
      </Table.Cell>
    </Table.Row>
  );
} 

function TableBody() {
  return (
    <div>
      <div className="flex gap-3 justify-end my-4">
        <Button color="success">Add Task</Button>
        <Button color="failure">Clear Tasks</Button>
      </div>
      <div className="border shadow rounded mb-24">
        <SearchTask />
        <div className="overflow-x-auto ">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>Title</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
              <Table.HeadCell>Assigned To</Table.HeadCell>
              <Table.HeadCell>Priority </Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <TableRow />
              <NoData />
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default TableBody;
