import { Button, Table } from 'flowbite-react';
import TableRow from './TableRow';
import { createPortal } from 'react-dom';
import SearchTask from './SearchTask';
import { ModalPopUp } from '../../Components/Modal/ModalPopUp';
import { useState } from 'react';



function NoData() {
  return (
    <Table.Row className="bg-white  text-black">
      <Table.Cell colSpan={6} className="text-center dark:text-white">
        No data Found
      </Table.Cell>
    </Table.Row>
  );
} 

function TableBody() {

  const [openModal, setOpenModal] = useState(false)
  const [tasks, setTasks] = useState([])

  let createHandler = (item) => {
    let upDateData = [
      ...tasks,
      {
        ...item,
        id:tasks.length + 1,
      },
    ]
    setTasks(upDateData.reverse())
    
  }

  return (
    <div>
      <div>
        <div className="flex gap-3 justify-end my-4">
          <Button onClick={ () => setOpenModal(true)} color="success">Add Task</Button>
          <Button onClick={()=>{setTasks([])}} color="failure">Clear Tasks</Button>
        </div>
        <div className="border dark:border-slate-500 shadow rounded mb-24">
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
                {tasks.length == 0? <NoData />: tasks.map((item,index) => <TableRow key={item.id} tasksData={item} index={index} />)}
                
                
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
      {createPortal(
        <ModalPopUp onCreate={createHandler} onOpenModal={openModal} closeOpenModal={setOpenModal} />,
        document.getElementById('modal')
      )}
    </div>
  );
}

export default TableBody;
