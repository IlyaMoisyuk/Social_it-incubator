import React from "react";

const Profile = (props: any) => {
    return (
        <div className='content'>
            <div>
                <img src='https://www.w3schools.com/howto/img_snow_wide.jpg'/>
            </div>
            <div>ava + description</div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                    <div>post 3</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;