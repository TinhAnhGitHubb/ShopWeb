import styles from "./cssModuleComponent/JobListings.module.css";
import Job from "./Job";
import PropTypes from 'prop-types';
import Spinners from "./Spinners";
import { useState, useEffect } from "react";

const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataJson = async () => {
            try {
                const res = await fetch("/api/jobs");
                const data = await res.json();
                const jobListing = isHome ? data.slice(0, 4) : data;
                setJobs(jobListing);
            } catch (error) {
                console.log("Error: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDataJson();
    }, []);

    return (
        <div className={styles.JobContainer}>
            <div className={styles.titleJob}>
                <p>{isHome ? "Recent Jobs" : "Browse Jobs"}</p>
            </div>
            <div className={styles.jobList}>
                {loading ? (
                    <Spinners loading={loading} />
                ) : (
                    jobs.map((job) => (
                        <Job key={job.id} job={job} />
                    ))
                )}
            </div>
        </div>
    );
};

JobListings.propTypes = {
    isHome: PropTypes.bool
};

export default JobListings;
