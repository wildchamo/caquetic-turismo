import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const MapModal = ({ open, setOpen, data }) => {
  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{data?.name}</DialogTitle>
          <DialogDescription>{data?.description}</DialogDescription>
        </DialogHeader>
        hola
      </DialogContent>
    </Dialog>
  );
};
