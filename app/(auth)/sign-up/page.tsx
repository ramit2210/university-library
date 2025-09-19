"use client";
import AuthForm from "@/components/AuthForm";
import { signUp } from "@/lib/actions/auth";
import { signUpSchema } from "@/lib/validation";
import React from "react";

function page() {
    return (
        <div>
            <AuthForm
                type="SIGN_UP"
                schema={signUpSchema}
                defaultValues={{
                    email: "",
                    password: "",
                    fullName: "",
                    universityId: 0,
                    universityCard: "",
                }}
                onSubmit={signUp}
            />
        </div>
    );
}

export default page;
