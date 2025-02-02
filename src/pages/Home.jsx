import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Hero from '../components/Hero'; 
import LatestCollection from '../components/LatestCollection';
// import TopLeadingFranchise from '../components/TopLeadingFranchise';
// import BusinessOpportunities from './BusinessOpportunities';
// import ClientTestimonials from '../components/ClientTestimonials';
// import FeaturedFranchises from "../components/FeaturedFranchises";
import Services from '../components/Services';
import InnovationPage from './Innovationpage';
import RegistrationBenefits from '../components/RegistrationBenefits';

const Home = () => {
    const navigate = useNavigate();

    return (
         
        <div className="px-6 md:px-16 py-12">
            <InnovationPage />
            <Services />
           <RegistrationBenefits />
            <div className="py-10 mt-5">
            
            <div>
            
                
            </div>
        </div>

            {/* Other Sections */}
            {/* <Hero /> */}
            {/* <TopLeadingFranchise /> */}
            <LatestCollection />
            {/* <BusinessOpportunities />  */}
            {/* <ClientTestimonials /> */}
            {/* <FeaturedFranchises /> */}
            
        </div>
    );
};

export default Home;
