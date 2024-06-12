import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {


    const { user, loading, setUser } = useContext(AuthContext)
    console.log(user)

    if (loading) {
        return <div className="flex justify-center"><span className="loading loading-spinner loading-lg "></span></div>
    }

    const saveChanges = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photoURL = form.get('photoUrl')
        console.log(name, photoURL)

        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
            .then(() => {
                console.log('profile updated')
                setUser({ ...user, displayName: name, photoURL: photoURL })
                Swal.fire({
                    title: "Successfully Changed the Information!",
                    // text: "You clicked the button!",
                    icon: "success"
                });
                e.target.reset();
                return;
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <Helmet>
                <title>EmerGent | UpdateProfile</title>
            </Helmet>
            <h1 className="text-center text-black text-3xl font-semibold">Edit Profile</h1>
            <p className="text-center text-neutral-500 text-base mt-1">Edit your profile details</p>
            <div className="flex justify-center rounded-3xl mt-5">
                <div className="flex w-4/5 h-96 justify-center flex-1 p-4">
                    <img className="rounded-3xl" src={user.photoURL} alt="" />
                </div>
                <div className="w-2/5 mx-auto px-14  flex-1 p-4">
                    <h1 className="text-neutral-800 text-xl font-medium">General Information :</h1>
                    <form className="mt-5" onSubmit={saveChanges}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-medium">Name :</span>
                            </label>
                            <input type="name" name="name" placeholder={user.displayName} className="input input-bordered placeholder:text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-medium">Email :</span>
                            </label>
                            <input type="email" name="email" placeholder={user.email} className="input input-bordered placeholder:text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">PhotoURL :</span>
                            </label>
                            <input type="url" name="photoUrl" placeholder={user.photoURL} className="input input-bordered placeholder:text-black" required />
                        </div>

                        <div className="flex justify-center w-full ">
                            <button className="bg-black text-white p-2 rounded-3xl text-center w-2/4 mt-12 ">Save Changes</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;