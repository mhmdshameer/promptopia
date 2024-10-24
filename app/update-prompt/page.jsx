"use client";

import React, { useEffect, useState, Suspense } from "react";
import Form from "components/Form";
import { useRouter, useSearchParams } from "next/navigation";

const EditPrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (promptId) getPromptDetails();
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) return alert('Prompt Id not found');

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
        headers: {
          "Content-Type": "application/json", // Ensure the content type is set
        },
      });
      if (response.ok) {
        router.push('/profile');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false); // Reset submitting state after the request
    }
  };

  return (
    <div>
      <Form
        type="Edit"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={updatePrompt}
      />
    </div>
  );
};

// Wrap the EditPrompt in a Suspense boundary
const PageComponent = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <EditPrompt />
  </Suspense>
);

export default PageComponent;
