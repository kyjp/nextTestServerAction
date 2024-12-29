

'use server'
import { z } from 'zod'

export async function handleAction(formData: FormData) {
    try {    
        const inputText = formData.get('inputText')
        console.log(inputText)
        const postTextSchema = z.string().min(1, 'テキストを入力してください。').max(140, '140文字以内で入力してください。')
        const validatedPostText = postTextSchema.parse(inputText)
        console.log('success')
        return {
            error: undefined,
            success: true
        }
    } catch (error) {
        console.log('error')
        if(error instanceof z.ZodError) {
            console.log('zod error')
            return {
                error: error.errors.map(e => e.message).join(','),
                success: false
            }
        }
        if(error instanceof Error) {
            return {
                error: error.message,
                success: false
            }
        }
        return {
            error: '予期せぬエラーが発生しました。',
            success: false
        }
    }
}