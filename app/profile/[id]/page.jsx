'use client';

import Profile from "components/Profile";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfile = () => {
    // Get the 'id' from the URL
    const id = useParams();
    console.log("id:", id); // Logging the id for debugging

    // Get the 'name' from the query params
    const searchParams = useSearchParams();
    const username = searchParams.get("name");
  
    console.log("searchParams name:", username); // Logging the name for debugging

    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${id}/posts`);
            const data = await response.json();  // Correct usage of async await
            setUserPosts(data);
        };

        if (id) fetchPosts();
    }, [id]);  // Use 'id' here instead of 'params.id'

    return (
        <Profile
            name={username}
            desc={`Welcome to ${username}'s personalized profile page. Explore ${username}'s exceptional prompts and be inspired by the power of their imagination`}
            data={userPosts}
        />
    );
}

export default UserProfile;
