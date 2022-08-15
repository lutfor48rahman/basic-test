import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: names, isLoading } = useQuery('names', () => fetch('http://localhost:5000/name').then(res => res.json()))

    const onSubmit = async data => {
        const info = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            position: data.position
        }

        fetch('http://localhost:5000/information', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('User information added successfully !!!');
                    reset();
                }
            })

    };

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div >
            <h2 className="text-2xl flex justify-center mt-5">Add User Information</h2>
            <div className='flex h-screen justify-center items-center'>
                <form className='mt-0' onSubmit={handleSubmit(onSubmit)}>


                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            class="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })}
                        />
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            class="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a vailid email'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span class="label-text-alt">{errors.email.message}</span>}
                        </label>

                        <label class="label">
                            <span class="label-text">Phone</span>
                        </label>
                        <input
                            type="text"
                            class="input input-bordered w-full max-w-xs"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Phone is required'
                                }
                            })}
                        />

                        <label class="label">
                            <span class="label-text">Position</span>
                        </label>
                        <select {...register("position")} class="input input-bordered select w-full max-w-xs">
                            {
                                names.map(name => <option
                                    key={name._id}
                                    value={name.name}>{name.name}
                                </option>)
                            }
                        </select>
                    </div>

                    <input className='btn w-full max-w-xs mt-3' type="submit" value='Add' />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;