
import HomeCards from "../components/HomeCards"
import JobListings from "../components/JobListings"
import ViewAllJob from "../components/ViewAllJob"

import Hero from "../components/Hero"
const HomePage = () => {
    return (
        <>

            <Hero />
            <HomeCards />
            <JobListings isHome={true} />
            <ViewAllJob />
        </>
    )
}

export default HomePage
