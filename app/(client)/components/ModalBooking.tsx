"use client";

import useClickOutside from "@/app/hooks/useClickOutside";
import { LegacyRef, MutableRefObject, RefAttributes, useEffect, useRef, useState } from "react";
import { validateForm } from "../utils/cn";
import { CloseIcon } from "./Icons";
import Input from "./Input";
import Button from "./ui/Button";
import { addBookingClient } from "@/sanity/lib/api";
import { useFormState, useFormStatus } from "react-dom";

interface ModalProps {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}

export default function ModalBooking({ openModal, setOpenModal }: ModalProps) {
  const modalRef: LegacyRef<HTMLDivElement> = useRef(null);
  const [state, action] = useFormState(addBookingClient, {
    message: "",
    success: false,
    errors: null,
  });
  const { pending } = useFormStatus();
  const [formErrors, setFormErrors] = useState<any>({});

  const handleClose = () => {
    setOpenModal(false);
    setFormErrors({});
  };

  useClickOutside(modalRef, () => {
    handleClose();
  });

  useEffect(() => {
    if (!state.success) {
      setFormErrors(state.errors);
    }
  }, [state.success, state.errors]);

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
          <CloseIcon className="w-6 h-6" color="#fff" />
        </div>
        {!state.success && (
          <form action={action}>
            <div className="text-center">
              <h4 className="text-[26px] text-primary">Booking now</h4>
              <p className="font-red-hat my-[10px] text-[#a6a6a6]">
                Please leave your contact details
              </p>
            </div>
            <div>
              <Input
                placeholder="Name"
                errorMessage={formErrors?.name}
                name="name"
                id="name"
              />
            </div>
            <div className="mt-5">
              <Input
                placeholder="Phone number"
                errorMessage={formErrors?.phoneNumber}
                type="number"
                name="phoneNumber"
                id="phoneNumber"
              />
            </div>
            <div className="mt-5">
              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={pending}
              >
                Submit
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  ) : null;
}
