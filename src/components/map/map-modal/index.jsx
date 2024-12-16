import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createTravel } from "@/services/travel";

export const MapModal = ({ open, setOpen, data }) => {
  if (!open) return null;

  const query = `?message=Hola, quiero info sobre el destino ${data.name}. ¿Qué eventos y sitios turísticos hay para ver allá?`;

  const handleClick = async () => {
    await createTravel({ userId: data.userId, id: data.id });
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="w-fit">{data?.name}</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center">
          <img
            className="max-w-full h-auto max-h-[350px] object-contain"
            src={data?.image}
            alt=""
          />
        </div>
        {data?.description}

        {/* {data?.userId} */}

        <a href={data?.ubication} target="_blank" rel="noreferrer">
          <Button variant="green" className="w-full">
            Cómo llegar
          </Button>
        </a>
        <Link href={"/chat" + query}>
          <Button variant="green" className="w-full">
            Preguntarle a Yakú Bot
          </Button>
        </Link>
        {data?.userId && (
          <Button variant="green" className="w-full" onClick={handleClick}>
            Reclamar recompensa
          </Button>
        )}
      </DialogContent>
    </Dialog>
  );
};
