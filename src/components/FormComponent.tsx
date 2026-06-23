import { useForm } from 'react-hook-form'

type FormFields = {
    email: string
    password: string
}

const FormComponent = () => {
    const { register } = useForm<FormFields>()

    return (
        <section className="flex justify-center items-center mt-10">
            <div className="flex flex-column justify-between">
                <form action="">
                    <div className="mb-6">
                        <input
                            {...register('email')}
                            type="text"
                            placeholder="Enter Email"
                            className="input"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            {...register('password')}
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
