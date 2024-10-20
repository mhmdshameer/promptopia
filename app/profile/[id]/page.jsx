"use client"
const { default: Profile } = require("components/Profile");
const { useSearchParams } = require("next/navigation");
const { useEffect } = require("react");

 

const userProfile = ({params})=>{
    const searchParams = useSearchParams();
    const username = searchParams.get("name");

    const [userPosts, setUserPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params?.id}/posts`)

            const data = response.json()
            setUserPosts(data)
        }

        if(params?.id) fetchPosts();
    },[params.id])

    return (
        <Profile
            name={usernae}
            desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
            data={userPosts}
        />
    )
}