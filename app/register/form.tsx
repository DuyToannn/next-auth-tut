'use client'

import { FormEvent } from "react"

export default function Form() {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const reponse = await fetch(`/api/auth/register`, {
            method: 'POST',
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password'),
            }),
        });
        console.log({ reponse });

    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto max-w-md mt-10 text-black">
            <input name="email" className="border border-black" type="email" />
            <input name="password" className="border border-black" type="password" />

            <button className="bg-rose-600" type="submit" >Register</button>
        </form>
    )
}
