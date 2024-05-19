"use client";

import useClickOutside from "@/app/hooks/useClickOutside";
import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import Button from "./ui/Button";
import { validateForm } from "../utils/cn";
interface ModalProps {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}
export default function Modal({ openModal, setOpenModal }: ModalProps) {
  const modalRef = useRef<any>();
  const [formErrors, setFormErrors] = useState<any>({});
  const [width, setWidth] = useState(window.innerWidth);
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

  useEffect(() => {
    if (openModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      // Clean up and remove the class when the component unmounts
      document.body.classList.remove("no-scroll");
    };
  }, [openModal]);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return openModal ? (
    <div className="opacity-1 pointer-events-auto fixed z-[15] w-full h-full flex items-center justify-center transition-[0.35s] duration-[ease] p-2.5 left-0 top-0">
      <div className="absolute w-full h-full backdrop-blur-[7.5px] left-0 top-0"></div>
      <div
        ref={modalRef}
        className={`relative overflow-hidden z-[1] max-w-[490px] w-full ${openModal ? "opacity-1" : "opacity-0"}   bg-[#1b1b1b] translate-y-5 transition-[0.35s] duration-[ease] px-[60px] py-10 rounded-md`}
      >
        <div
          className="absolute w-[30px] h-[30px] flex items-center justify-center cursor-pointer right-2.5 top-2.5"
          onClick={handleClose}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3 5.70998C18.2075 5.61728 18.0976 5.54373 17.9766 5.49355C17.8556 5.44337 17.7259 5.41754 17.595 5.41754C17.464 5.41754 17.3343 5.44337 17.2134 5.49355C17.0924 5.54373 16.9825 5.61728 16.89 5.70998L12 10.59L7.10998 5.69998C7.0174 5.6074 6.90749 5.53396 6.78652 5.48385C6.66556 5.43375 6.53591 5.40796 6.40498 5.40796C6.27405 5.40796 6.1444 5.43375 6.02344 5.48385C5.90247 5.53396 5.79256 5.6074 5.69998 5.69998C5.6074 5.79256 5.53396 5.90247 5.48385 6.02344C5.43375 6.1444 5.40796 6.27405 5.40796 6.40498C5.40796 6.53591 5.43375 6.66556 5.48385 6.78652C5.53396 6.90749 5.6074 7.0174 5.69998 7.10998L10.59 12L5.69998 16.89C5.6074 16.9826 5.53396 17.0925 5.48385 17.2134C5.43375 17.3344 5.40796 17.464 5.40796 17.595C5.40796 17.7259 5.43375 17.8556 5.48385 17.9765C5.53396 18.0975 5.6074 18.2074 5.69998 18.3C5.79256 18.3926 5.90247 18.466 6.02344 18.5161C6.1444 18.5662 6.27405 18.592 6.40498 18.592C6.53591 18.592 6.66556 18.5662 6.78652 18.5161C6.90749 18.466 7.0174 18.3926 7.10998 18.3L12 13.41L16.89 18.3C16.9826 18.3926 17.0925 18.466 17.2134 18.5161C17.3344 18.5662 17.464 18.592 17.595 18.592C17.7259 18.592 17.8556 18.5662 17.9765 18.5161C18.0975 18.466 18.2074 18.3926 18.3 18.3C18.3926 18.2074 18.466 18.0975 18.5161 17.9765C18.5662 17.8556 18.592 17.7259 18.592 17.595C18.592 17.464 18.5662 17.3344 18.5161 17.2134C18.466 17.0925 18.3926 16.9826 18.3 16.89L13.41 12L18.3 7.10998C18.68 6.72998 18.68 6.08998 18.3 5.70998Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="modal-dialog modal-dialog-centered">
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
            <Button
              variant="primary"
              className={"w-full"}
              onClick={handleSubmit}
            >
              Submit{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
