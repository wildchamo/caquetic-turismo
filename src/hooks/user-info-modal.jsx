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
import { create_user, SignUpUser } from "@/services/user";
import { LogIn } from "@/services/user";

export function UserInfoModal({ type = "outline" }) {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Enviado:", data);
    await SignUpUser(data.email, data.password);
    await create_user(data);
    setOpen(false);
  };

  const onSubmitLog = async (data) => {
    console.log("Enviado:", data);
    await LogIn(data);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={type}>Unirme al Club</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {" "}
        <DialogHeader>
          <DialogTitle>
            {isLogin ? "¡INICIA SESIÓN!" : "¡REGÍSTRATE!"}
          </DialogTitle>
          <DialogDescription>
            {isLogin
              ? "Accede a tu cuenta para consultar los eventos y actividades en el Caquetá. 🦜🌿"
              : "Regístrate para recibir información exclusiva sobre eventos y actividades en el Caquetá. ¡Sé parte del club! 🌟"}
          </DialogDescription>
        </DialogHeader>
        {isLogin ? (
          <form onSubmit={handleSubmit(onSubmitLog)}>
            <div className="grid gap-4">
              {/* Campo para el correo */}
              <div className="items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Correo Electrónico
                </Label>
                <Input
                  id="email"
                  {...register("email", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Por favor, ingrese un correo válido",
                    },
                  })}
                  className="col-span-3"
                />
                {errors.email && (
                  <p className="col-span-3 col-start-2 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <DialogFooter style={{ marginTop: "1rem" }}>
              <Button className="w-full" type="submit">
                Iniciar Sesión
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              {/* Campo para el nombre */}
              <div className="items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nombre
                </Label>
                <Input
                  id="name"
                  {...register("name", {
                    required: "El nombre es obligatorio",
                  })}
                  className="col-span-3"
                />
                {errors.name && (
                  <p className="col-span-3 col-start-2 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Campo para el teléfono */}
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
                      message:
                        "Por favor, ingrese un número de teléfono válido",
                    },
                  })}
                  className="col-span-3"
                />
                {errors.phone_number && (
                  <p className="col-span-3 col-start-2 text-sm text-red-500">
                    {errors.phone_number.message}
                  </p>
                )}
              </div>

              {/* Campo para el correo */}
              <div className="items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Correo Electrónico
                </Label>
                <Input
                  id="email"
                  {...register("email", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Por favor, ingrese un correo válido",
                    },
                  })}
                  className="col-span-3"
                />
                {errors.email && (
                  <p className="col-span-3 col-start-2 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="items-center gap-4 mt-4">
                <Label htmlFor="password" className="text-right">
                  Contraseña
                </Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                  })}
                  className="col-span-3"
                />
                {errors.password && (
                  <p className="col-span-3 col-start-2 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <DialogFooter style={{ marginTop: "1rem" }}>
              <Button className="w-full" type="submit">
                Registrarse
              </Button>
            </DialogFooter>
          </form>
        )}
        {/* Botón para alternar entre login y registro */}
        <h4
          onClick={() => setIsLogin(!isLogin)}
          style={{ cursor: "pointer" }}
          className="text-indigo-600 text-center mt-4 hover:text-indigo-800 hover:underline transition duration-200 ease-in-out"
        >
          {isLogin
            ? "¿Eres nuevo aquí? Regístrate para unirte al club🦜🌿"
            : "¿Ya tienes cuenta🙆‍♂️? Inicia sesión"}
        </h4>
      </DialogContent>
    </Dialog>
  );
}
