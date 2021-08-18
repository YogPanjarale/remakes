const data = {
    author: {
        username: "manavsaspal",
        profile_image_url: "https://pbs.twimg.com/profile_images/1394385645171216385/ewl3gCW3_400x400.jpg",
        name: "Manav Saspal",
    },
    content: {
        text: "Bye People , I am leaving twitter , also i am going to delete all my social media accounts like discord, instagram, basicly leaving the internet , Hope you all be well ",
        links: [
            {
                link: "menu-planning.vercel.app",
                content: "Nutritive Value Calculator for finding nutrional values of food items",
                title: "Nutritive Value Calculator",
                image: null
            }
        ]
    }
}
import { DotsHorizontalIcon } from '@heroicons/react/solid'

function PersonCompact(props) {
    return (<div className="leading-5 m-1">
        <h2 className="font-semibold">{" "}{props.name}</h2>
        <p className="text-gray-500">@{props.username}</p>
    </div>);
}


export default function Tweet() {
    const { name, username, profile_image_url } = data.author;
    const { text } = data.content;
    return (
        <div className="bg-black text-white h-screen">
            <div className="px-4 max-w-xl border-2 border-gray-700">
                <div className="flex flex-row mb-1 ">

                    <div className="pr-3 w-16">
                        <img className=" h-12 w-12 rounded-full" src={profile_image_url} alt={name} srcset={name} />
                    </div>
                    <div className="flex flex-row justify-between w-full">
                        <PersonCompact name={name} username={username}></PersonCompact>
                        <DotsHorizontalIcon className="h-5 w-5 text-gray-500  my-auto " />
                    </div>
                </div>
                <p className="text-xl font-normal text-gray-100" >{text}</p>

            </div>
        </div>
    )
}