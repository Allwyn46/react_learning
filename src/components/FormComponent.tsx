import { useForm, type SubmitHandler } from 'react-hook-form'

type FormFields = {
    email: string
    password: string
}

const FormComponent = () => {
    const { register, handleSubmit } = useForm<FormFields>()

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data)
    }

    return (
        <section className="flex justify-center items-center mt-10">
            <div className="flex flex-column justify-between">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <input
                            {...register('email', {
                                required: true,
                            })}
                            type="text"
                            placeholder="Enter Email"
                            className="input"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            {...register('password', {
                                required: true,
                            })}
                            type="password"
                            placeholder="Enter Password"
                            className="input"
                        />
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
