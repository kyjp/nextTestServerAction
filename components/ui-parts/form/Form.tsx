'use client'

import Button from '@/components/ui-elements/button/Button'
import Input from '@/components/ui-elements/input/Input'
import { handleAction } from '@/lib/actions'
import React, { useState } from 'react'

const Form = () => {
    const [error, setError] = useState<string | undefined>('')

    const handleSubmit = async (formData: FormData) => {
        const result = await handleAction(formData)
        if(!result?.success) {
            console.log(result)
            setError(result?.error)
        }
    }
    return (
        <form action={handleSubmit}>
            {error && <p>{error}</p>}
            <div>
                <Input />
            </div>
            <div>
                <Button />
            </div>
        </form>
    )
}

export default Form