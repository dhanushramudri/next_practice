"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link
        href="/"
        className="flex gap-2 items-center justify-center center no-underline"
      >
        <Image
          src="/assets/images/logo.svg"
          width={30}
          height={30}
          alt="Promptopia Logo"
          className="object-contain"
        />
        <p className="logo_text my-auto blue_gradient">JobMae.ai</p>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        <SignedIn>
          <div className="flex gap-3 md:gap-5">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatar: "w-9 h-9 rounded-full",
                },
              }}
            />
          </div>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" afterSignInUrl="/" className="black_btn">
            Sign In
          </SignInButton>
        </SignedOut>
      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatar: "w-9 h-9 rounded-full",
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" afterSignInUrl="/" className="black_btn">
            Sign In
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Nav;
