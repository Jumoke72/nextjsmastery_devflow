"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { signIn } from "@/auth";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const buttonClass =
    "bg-light-900 dark:bg-dark-400 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5";

  const handleSignIn = async (provider: "github" | "google") => {
    try {

      await signIn(provider,{callbackUrl:ROUTES.HOME, redirect:false})
    } catch (error) {
      console.log(error);

      toast("Sign-In Failure", {
        description: error instanceof Error ? error.message : "An error occurred during sign-in",
        action: {
          label: "Close",
          onClick: () => ({}),
        },
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with Github</span>
      </Button>
      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
