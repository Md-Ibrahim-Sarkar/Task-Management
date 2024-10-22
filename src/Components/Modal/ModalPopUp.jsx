'use client';
import { Label, TextInput, Textarea } from 'flowbite-react';
import { Button, Modal } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../modalFrom';

export function ModalPopUp({ onOpenModal, closeOpenModal, onCreate }) {
  const {register,handleSubmit,formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    onCreate(data);
    reset();
    closeOpenModal(false);

  };
  

  return (
    <>
      <Modal show={onOpenModal} onClose={() => closeOpenModal(false)}>
        <Modal.Header className="text-center">Add New Task</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form className="flex flex-wrap" onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="small" value="Title" />
                </div>
                <TextInput
                  className="w-full"
                  id="small"
                  type="text"
                  sizing="sm"
                  name="title"
                  {...register('title')}
                />
                {errors.title && (
                  <span className="text-red-500">{errors.title.message}</span>
                )}
              </div>
              <div className="w-full my-2 ">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="Description " />
                </div>
                <Textarea
                  type="Textarea"
                  name="description"
                  className="w-full h-[132px]"
                  id="comment"
                  {...register('description')}
                />
                {errors.description && (
                  <span className="text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </div>

              <div className="w-2/3 pe-3">
                <div className="mb-2 block ">
                  <Label htmlFor="small" value="Assigned To" />
                </div>
                <select
                  name="assignTo"
                  {...register('assignedTo')}
                  className="w-full rounded-lg dark:bg-[#374151]"
                >
                  <option selected disabled>
                    select one
                  </option>
                  <option value="person one">person two</option>
                  <option value="person one">person three</option>
                  <option value="person one">person four</option>
                  <option value="person one">person five</option>
                </select>
                {errors.assignedTo && (
                  <span className="text-red-500">
                    {errors.assignedTo.message}
                  </span>
                )}
              </div>
              <div className="w-1/3 ">
                <di v className="mb-2 block ">
                  <Label htmlFor="small" value="Priority" />
                </di>
                <select
                  name="priority"
                  className="w-full rounded-lg dark:bg-[#374151]"
                  sizing="sm"
                  {...register('priority')}
                >
                  <option selected disabled>
                    select one
                  </option>
                  <option value="person one">high</option>
                  <option value="person one">Medium</option>
                  <option value="person one">Low</option>
                </select>
                {errors.priority && (
                  <span className="text-red-500">
                    {errors.priority.message}
                  </span>
                )}
              </div>
              <Button className="mt-4" type="submit">
                Add Task
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
