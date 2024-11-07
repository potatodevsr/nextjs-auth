'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RegisterForm() {
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        user_email: "",
        user_pw: "",
        status: true,
        isAdmin: true,
        create_by: "",
        create_date: new Date(),
        update_date: new Date()
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user) {
            const response = await fetch('/api/auth/register', {
                method: "POST",
                body: JSON.stringify(user)
            });
            return response;
        }
        return null;
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image className="text-center"
                    src="/Logo-company.png"
                    width={200}
                    height={200}
                    alt="Picture of Logo Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Register your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                            First Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="first_name"
                                name="first_name"
                                type="text"
                                required
                                value={user.first_name}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6 pl-4"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                            Last Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="last_name"
                                name="last_name"
                                type="text"
                                required
                                value={user.last_name}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6 pl-4"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="user_email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email Address
                        </label>
                        <div className="mt-2">
                            <input
                                id="user_email"
                                name="user_email"
                                type="email"
                                required
                                value={user.user_email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6 pl-4"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="user_pw" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="user_pw"
                                name="user_pw"
                                type="password"
                                required
                                value={user.user_pw}
                                onChange={handleChange}
                                placeholder="Xbshsd$##@31!"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6 pl-4"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}