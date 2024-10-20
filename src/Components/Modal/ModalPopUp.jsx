'use client';
import { Label, TextInput, Textarea } from 'flowbite-react';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export function ModalPopUp({ onOpenModal, closeOpenModal }) {
  return (
    <>
      <Modal show={onOpenModal} onClose={() => closeOpenModal(false)}>
        <Modal.Header className="text-center">Add New Task</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form action="" className="flex flex-wrap">
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="small" value="Title" />
                </div>
                <TextInput
                  className="w-full"
                  id="small"
                  type="text"
                  sizing="sm"
                />
              </div>
              <div className="w-full my-2 ">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="Description " />
                </div>
                <Textarea className="w-full h-[132px]" id="comment" required />
              </div>

              <div className="w-2/3 pe-3">
                <div className="mb-2 block ">
                  <Label htmlFor="small" value="Assigned To" />
                </div>
                <TextInput className="" id="small" type="text" sizing="sm" />
              </div>
              <div className="w-1/3 ">
                <div className="mb-2 block ">
                  <Label htmlFor="small" value="Priority " />
                </div>
                <TextInput className="" id="small" type="text" sizing="sm" />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => closeOpenModal(false)}>Add Task</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
