import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const PopUpForm = ({ showForm, setShowForm, allFormData,setAllFormData }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        language: [],
        email: "",
        agree: false,
    })

    const { firstName, lastName, gender, language, email, agree } = formData;

    const validateForm = () => {
        if (!firstName) {
            toast.error("First name is required");
            return false;
        }

        if (!lastName) {
            toast.error("Last name is required");
            return false;
        }

        if (!gender) {
            toast.error("Gender is required");
            return false;
        }

        if (!language || language.length === 0) {
            toast.error("Select at least one language");
            return false;
        }

        if (!email) {
            toast.error("Email is required");
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Enter a valid email address");
            return false;
        }

        if (!agree) {
            toast.error("Please agree to the terms and conditions");
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(formData);
            setAllFormData([...allFormData, formData])

            setFormData({
                firstName: "",
                lastName: "",
                gender: "",
                language: [],
                email: "",
                agree: false,
            });

            setShowForm(false);

            Swal.fire({
                html: `
                  <div style="font-size: 40px; color: red; margin-bottom: 10px;">❤️</div>
                  <div style="font-size: 20px; font-weight: bold; margin-bottom: 5px;">Thank you for connecting with us.</div>
                  <div>Our team will be contacting you soon.</div>
                `,
                confirmButtonColor: "#FF3E54",
                confirmButtonText: "Done",
                customClass: {
                    popup: "rounded-xl text-center",
                },
            });


        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox" && name === "language") {
            const updatedLanguages = checked
                ? [...(formData.language || []), value]
                : (formData.language || []).filter((lang) => lang !== value);

            setFormData({
                ...formData,
                language: updatedLanguages,
            });
        } else if (type === "checkbox") {
            setFormData({
                ...formData,
                [name]: checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    return (
        <>
            {showForm && (
                <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 p-4 ">
                    <div className="bg-white p-6 rounded-xl w-full max-w-md relative">
                        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-2 right-3 text-2xl font-bold text-gray-600"
                        >
                            &times;
                        </button>

                        <h2 className="font-semibold mb-4 text-[24px]">Get Started Today!</h2>
                        <p className="mb-[20px]">Fill in your details and take control of your tasks.</p>

                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div className="flex gap-[12px] flex-wrap">
                                <div className="flex-1 min-w-[45%]">
                                    <label className="text-[16px] font-medium">First Name</label> <br />
                                    <input
                                        name="firstName"
                                        type="text"
                                        value={firstName}
                                        placeholder="Enter Your First Name"
                                        className="border rounded-md px-4 py-2 bg-[#FFDEE287] mt-1 w-full"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex-1 min-w-[45%]">
                                    <label className="text-[16px] font-medium">Last Name</label> <br />
                                    <input
                                        name="lastName"
                                        type="text"
                                        value={lastName}
                                        placeholder="Enter Your Last Name"
                                        className="border rounded-md px-4 py-2 bg-[#FFDEE287] mt-1 w-full"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-[16px] font-medium">Gender</label> <br />
                                <div className="flex gap-[10px]">
                                    <div className="bg-[#FFDEE287] py-[8px] px-[12px] rounded-md flex items-center gap-2">
                                        <input type="radio" name="gender" value="male" onChange={handleChange} checked={gender === "male"} />
                                        <span className="text-[16px]">Male</span>
                                    </div>
                                    <div className="bg-[#FFDEE287] py-[8px] px-[12px] rounded-md flex items-center gap-2">
                                        <input type="radio" name="gender" value="female" onChange={handleChange} checked={gender === "female"} />
                                        <span className="text-[16px]">Female</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="text-[16px] font-medium">Language</label> <br />
                                <div className="flex flex-col w-[50%] gap-[10px] flex-wrap">
                                    {["english", "hindi", "marathi"].map((lang) => (
                                        <div
                                            key={lang}
                                            className="bg-[#FFDEE287] py-[8px] px-[12px] rounded-md flex items-center gap-2"
                                        >
                                            <input
                                                type="checkbox"
                                                name="language"
                                                value={lang}
                                                onChange={handleChange}
                                                className="w-4 h-4 rounded-none"
                                                checked={language.includes(lang)}
                                            />
                                            <span className="text-[16px] capitalize">{lang}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-[16px] font-medium">Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={email}
                                    placeholder="Enter Your Email Address"
                                    className="border rounded-md px-4 py-2 bg-[#FFDEE287] mt-1 w-full"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded-none"
                                    id="agree"
                                    name="agree"
                                    checked={agree}
                                    onChange={handleChange}
                                />
                                <label htmlFor="agree" className="text-[16px]">I agree to the terms and conditions</label>
                            </div>

                            <button type="submit" className="bg-[#FF3E54] text-white px-4 py-2 rounded-md">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}



        </>
    );
};

export default PopUpForm;