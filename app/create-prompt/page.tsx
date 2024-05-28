"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "../../components/Form";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  const { data: session } = useSession();
  const router = useRouter();
  const createPrompt = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await fetch("/api/prompt/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: post.prompt,
        tag: post.tag,
        userId: session?.user.id,
      }),
    });
    setSubmitting(false);
    if (res.ok) {
      setPost({ prompt: "", tag: "" });
      router.push("/");
    } else {
      alert("Error creating prompt");
    }
  };
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
