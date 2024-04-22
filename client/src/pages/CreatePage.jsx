import React from 'react';
import CreateFood from "../component/CreateFood.jsx";
import MasterLayout from "../component/shared/MasterLayout.jsx";

const CreatePage = () => {
    return (
        <MasterLayout>
            <CreateFood/>
        </MasterLayout>
    );
};

export default CreatePage;