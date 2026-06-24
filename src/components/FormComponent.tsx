import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

type FormFields = z.infer<typeof schema>

const FormComponent = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        defaultValues: {
            email: 'test@gmail.com',
        },
        resolver: zodResolver(schema),
    })

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await new Promise((resolve) => setInterval(resolve, 1000))
            console.log(data)
        } catch (error) {
            setError('email', {
                message: 'Email already taken',
            })
        }
    }

    return (
        <section className="flex justify-center items-center mt-10">
            <div className="flex flex-col justify-between">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <input
                            {...register('email')}
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
                            {...register('password')}
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
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Loading' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FormComponent
