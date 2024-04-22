import React from 'react';
import ReadFood from "../component/ReadFood.jsx";
import MasterLayout from "../component/shared/MasterLayout.jsx";

const HomePage = () => {
    return (
        <MasterLayout>
            <ReadFood/>
        </MasterLayout>
    );
};

export default HomePage;