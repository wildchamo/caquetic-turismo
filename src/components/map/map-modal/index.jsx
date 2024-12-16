import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

export const MapModal = ({ open, setOpen, data }) => {
  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="w-fit">{data?.name}</DialogTitle>
          <DialogDescription>{data?.description}</DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
          <img
            className="max-w-full h-auto object-contain"
            src={data?.image}
            alt=""
          />
        </div>
        {data?.description}

        <a href={data?.ubication} target="_blank" rel="noreferrer">
          <Button className="w-full" type="submit">
            Cómo llegar
          </Button>
        </a>
      </DialogContent>
    </Dialog>
  );
};
