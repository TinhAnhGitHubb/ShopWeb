import { useState } from "react";
import styles from "./cssModuleComponent/Job.module.css";
import PropTypes from 'prop-types';
import { FaMapMarker } from 'react-icons/fa'

const Job = ({ job }) => {

  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description

  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }


  const ToggleDescription = () => {
    setShowFullDescription(!showFullDescription)
  }
  return (
    <div className={styles.jobItemContainer}>
      <div className={styles.jobItem}>
        <p className={styles.jobTime}>{job.type}</p>
        <p className={styles.jobName}>{job.title}</p>
        <p className={styles.jobDescription}>{description}</p>

        <a
          onClick={ToggleDescription}
          className={styles.jobMore}>{showFullDescription ? "Less" : "More"}</a>


        <p className={styles.jobSalary}>{job.salary}</p>
      </div>

      <div className={styles.jobMoreInfos}>
        <div className={styles.jobLocation}>
          <FaMapMarker />
          <span>
            {job.location}
          </span>
        </div>
        <a  href={`/jobs/${job.id}`} className={styles.btnMore}>Read more</a>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      contactEmail: PropTypes.string.isRequired,
      contactPhone: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
};

export default Job;
