import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { UsersFormProperties } from "./usersForm.properties";
import { initialUserFormValues } from "./usersForm.constants";

import { UsersFormModel } from "./usersForm.model";
import { UsersFormTypes } from "./usersForm.types";
import './usersForm.styles.scss'

export function UserForm(properties: UsersFormProperties): JSX.Element {

    const [user, setUser] = useState<UsersFormTypes>(initialUserFormValues)

    const UserFormClassValidatorResolver = classValidatorResolver(UsersFormModel)

    const { register, handleSubmit, formState } = useForm({
        resolver: UserFormClassValidatorResolver,
        defaultValues: initialUserFormValues,
        reValidateMode: "onChange",
    });

    console.log(formState.errors)

    const onSubmit = (data: UsersFormTypes) => console.log(data);

    return (
        <section className="users-form-wrapper">
            <header>
                <h1>{properties.name}</h1>
            </header>
            <main>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-control">
                        <label>
                            <p>Nombre completo:</p>
                            <input {...register("name", { required: true })} />
                        </label>
                    </div>
                    <div className="input-control">
                        <label>
                            <p>Correo electronico:</p>
                            <input type="email" {...register("email", { required: true })} />
                        </label>
                    </div>
                    <div className="input-control">
                        <label>
                            <p>Nickname:</p>
                            <input {...register("nickname", { required: true })} />
                        </label>
                    </div>
                    <div className="input-control">
                        <label>
                            <p>Contraseña:</p>
                            <input type="password" {...register("password", { required: true })} />
                        </label>
                    </div>

                    <input type="submit" value="Crear usuario administrador" />
                </form>
            </main>
        </section>
    )
}