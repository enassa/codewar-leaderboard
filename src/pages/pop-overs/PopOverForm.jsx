import React from "react";
import CreateUserForm from "../../components/pop-up-form/pop-up-form";
import { useBoardService } from "./../../store-and-services/boarddata-slice/board-service";

export default function PopOverForm() {
  const { userFormState } = useBoardService();
  return (
    <div className="w-full z-[55] h-full items-center justify-center fixed top-0 right-0 pointer-events-none">
      {userFormState && <CreateUserForm />}
    </div>
  );
}
