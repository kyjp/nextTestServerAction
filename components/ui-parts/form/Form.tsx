'use client'

import Button from '@/components/ui-elements/button/Button'
import Input from '@/components/ui-elements/input/Input'
import { handleAction } from '@/lib/actions'
import React, { useRef, useState } from 'react'

const Form = () => {
    const [error, setError] = useState<string | undefined>('')
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = async (formData: FormData) => {
        const result = await handleAction(formData)
        if(!result?.success) {
            console.log(result)
            setError(result?.error)
        } else {
            setError('')
            if(formRef.current) {
                formRef.current.reset()
            } 
        }
    }
    return (
        <form
            ref={formRef}
            action={handleSubmit}
        >
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