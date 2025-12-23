import { useState } from 'react';
import NavTabs from "../NavTabs/NavTabs";
import TestWorkForm from '../TestWorkForm/TestWorkForm';
import AdditionalLinks from '../AdditionalLinks/AdditionalLinks';

export default function MainSection() {

    const [activeTab, setActiveTab] = useState(0);
    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const renderTabContent = () => {
        switch (activeTab) {
        case 0:
            return <TestWorkForm />;
        case 1:
            return <AdditionalLinks />;
        }
    };

    return (
        <section>
            <NavTabs value={activeTab} onChange={handleChange}/>
            <div>{renderTabContent()}</div>
        </section>
    );

}