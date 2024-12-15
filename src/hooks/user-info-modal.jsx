"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { create_user } from "@/services/user";

export function UserInfoModal() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =async  (data) => {
    console.log("Enviado:", data);
    await create_user(data)
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Unirme al Club</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sé parte del club!</DialogTitle>
          <DialogDescription>
            Por favor, ingrese sus datos para recibir información sobre los
            eventos en el Caquetá. 🦜🌿
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 ">
            <div className=" items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nombre
              </Label>
              <Input
                id="name"
                {...register("name", { required: "El nombre es obligatorio" })}
                className="col-span-3"
              />
              {errors.name && (
                <p className="col-span-3 col-start-2 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="items-center gap-4">
              <Label htmlFor="phone_number" className="text-right">
                Teléfono
              </Label>
              <Input
                id="phone_number"
                {...register("phone_number", {
                  required: "El teléfono es obligatorio",
                  pattern: {
                    value: /^\+?[1-9]\d{1,14}$/,
                    message: "Por favor, ingrese un número de teléfono válido",
                  },
                })}
                className="col-span-3"
              />
              {errors.phoneNumber && (
                <p className="col-span-3 col-start-2 text-sm text-red-500">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
          </div>
          <DialogFooter style={{ marginTop: "1rem" }}>
            <Button className="w-full " type="submit">
              Enviar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
