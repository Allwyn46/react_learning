import { useForm, type SubmitHandler } from 'react-hook-form'

type FormFields = {
    email: string
    password: string
}

const FormComponent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>()

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data)
    }

    return (
        <section className="flex justify-center items-center mt-10">
            <div className="flex flex-col justify-between">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <input
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Enter a valid email address',
                                },
                            })}
                            type="email"
                            placeholder="Enter Email"
                            className="input"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <input
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must have 8 characters',
                                },
                            })}
                            type="password"
                            placeholder="Enter Password"
                            className="input"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FormComponent
