import React from 'react';

const Table = ({ allFormData }) => {
    return (
        <div className="xl:mx-12  bg-white ">
            <div className="overflow-x-auto">
                <table className="w-full text-left border border-gray-300">
                    <thead className="">
                        <tr>
                            <th className="p-3 border-b border-gray-300">Name</th>
                            <th className="p-3 border-b border-gray-300">Gender</th>
                            <th className="p-3 border-b border-gray-300">Language</th>
                            <th className="p-3 border-b border-gray-300">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allFormData.map((form, index) => (
                            <tr key={index} className="even:bg-gray-50">
                                <td className="p-3 border-b border-gray-200">{form.firstName}</td>
                                <td className="p-3 border-b border-gray-200">{form.gender}</td>
                                <td className="p-3 border-b border-gray-200">
                                    {form.language?.join(", ")}
                                </td>
                                <td className="p-3 border-b border-gray-200">{form.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
