'use client'
import React, { useState } from 'react'
import { useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardAction, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const SignUpPage = () => {

    const { isLoaded, signUp, setActive } = useSignUp()
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const [pendingVerification, setPendingVerification] = useState(false)
    const [code, setCode] = useState("")
    const [error, setError] = useState("")
    const [showPassowrd, setShowPassowrd] = useState("")
    const router = useRouter()


    if (!isLoaded) return null

    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!isLoaded) { return };

        try {
            await signUp.create({
                emailAddress,
                password
            })

            await signUp.prepareEmailAddressVerification({ strategy: "email_code" })
            setPendingVerification(true)
        } catch (error: any) {
            console.error(JSON.stringify(error, null, 2))
            setError(error.errors[0].longMessage || "Something went wrong")

        }
    }


}

export default SignUpPage
