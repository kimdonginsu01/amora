"use client";

import useClickOutside from "@/app/hooks/useClickOutside";
import { useRef, useState } from "react";
import { validateForm } from "../utils/cn";
import { CloseIcon } from "./Icons";
import Input from "./Input";
import Button from "./ui/Button";

interface ModalProps {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}

export default function Modal({ openModal, setOpenModal }: ModalProps) {
  const modalRef = useRef<any>();
  const [formErrors, setFormErrors] = useState<any>({});
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
  });

  const handleClose = () => {
    setForm;
    setOpenModal(false);
  };

  const changeTextInput = (event: any) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    const err = validateForm(form);
    if (Object.keys(err).length === 0) {
      handleClose();
    } else {
      setFormErrors(err);
    }
  };

  useClickOutside(modalRef, () => {
    setOpenModal(false);
  });

  return openModal ? (
    <div className="opacity-1 pointer-events-auto fixed z-[15] w-full h-full flex items-center justify-center transition-[0.35s] duration-[ease] p-2.5 left-0 top-0">
      <div className="absolute w-full h-full backdrop-blur-[7.5px] left-0 top-0"></div>
      <div
        ref={modalRef}
        className={`relative overflow-hidden z-[1] max-w-[490px] w-full ${openModal ? "opacity-1" : "opacity-0"}  bg-[#1b1b1b] translate-y-5 transition-[0.35s] duration-[ease] px-[60px] py-10 rounded-md`}
      >
        <div
          className="absolute flex items-center justify-center cursor-pointer right-2.5 top-2.5 p-2"
          onClick={handleClose}
        >
          <CloseIcon className="w-6" color="#fff"/>
        </div>
        <div className="">
          <div className="text-center">
            <h4 className="text-[26px] text-primary">Booking now</h4>
            <p className="font-red-hat my-[10px] text-[#a6a6a6]">
              Please leave your contact details
            </p>
          </div>
          <div>
            <Input
              placeholder="Name"
              value={form.name}
              onChange={(event) => changeTextInput(event)}
              errorMessage={formErrors.name}
              defaultValue={form.name}
              name="name"
            />
          </div>
          <div className="mt-5">
            <Input
              placeholder="Phone number"
              value={form.phoneNumber}
              onChange={(event) => changeTextInput(event)}
              errorMessage={formErrors.phoneNumber}
              defaultValue={form.phoneNumber}
              type="number"
              name="phoneNumber"
            />
          </div>
          <div className="mt-5">
            <Button variant="primary" className="w-full" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
