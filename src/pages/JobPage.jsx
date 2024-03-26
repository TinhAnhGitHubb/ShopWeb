import { useLoaderData } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa'
import styles from "../components/cssModuleComponent/JobPage.module.css";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'; // Import PropTypes
import { toast } from 'react-toastify'

const JobPage = ({ deleteJob }) => {
    // const { id } = useParams();
    const job = useLoaderData();
    const navigate = useNavigate();



    const editButton = () => {
        navigate(`/edit-job/${job.id}`)
    }

    const deleteJobConfirm = (jobID) => {
        const confirm = window.confirm("Do you want to delete this job out of the list?");
        if (!confirm) {
            return;
        }

        deleteJob(jobID);
        toast.success('Job deleted successfully')
        return navigate('/jobs')
    }

    const styleArrow = {
        color: '#6366f1'
    }

    return (
        <>
            <div className={styles.backContainer}>
                <FaArrowLeft style={styleArrow} />
                <Link to="/jobs">Back to Job Listings</Link>
            </div>

            <div className={styles.jobInfoContainer}>
                <div className={styles.templateContainer}>
                    <div className={styles.left}>
                        <div className={`${styles.jobTitleTag} ${styles.itemHolder}`}>
                            <p>{job.type}</p>
                            <h2>{job.title}</h2>
                            <i className="ri-map-pin-line"></i>
                            <span>
                                {job.location}
                            </span>
                        </div>
                        <div className={`${styles.jobinFOsSalary} ${styles.itemHolder}`}>
                            <p className={styles.jobDes}>Job Description</p>
                            <p className={styles.jobDesFull}>{job.description}</p>
                            <p className={styles.jobSal}>Salary</p>
                            <p className={styles.jobMoney}>{job.salary}</p>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <div className={`${styles.companyInFoContact} ${styles.itemHolder}`}>
                            <div className={styles.companyInfos}>
                                <h2>Company Info</h2>
                                <p className={styles.titleCom}>{job.company.name}</p>

                                <p className={styles.desPara}>{job.company.description}</p>
                            </div>

                            <div className={styles.companyContact}>
                                <p className={styles.transBack}>Contact Email:</p>
                                <div className={styles.placeholderText}>
                                    {job.company.contactEmail}
                                </div>
                                <p className={styles.transBack}>Contact Phone:</p>
                                <div className={styles.placeholderText}>
                                    {job.company.contactPhone}
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.editJob} ${styles.itemHolder}`}>
                            <p>Manage Job</p>
                            <div className={styles.btnContainer}>
                                <button
                                    onClick={editButton}
                                    className={styles.editBtn}>Edit Job</button>


                                <button
                                    onClick={() => deleteJobConfirm(job.id)}
                                    className={styles.delBtn}>Delete Job</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const jobLoader = async ({ params }) => {
    const response = await fetch(`/api/jobs/${params.id}`);
    const data = await response.json();
    return data;
};


JobPage.propTypes = {
    deleteJob: PropTypes.func.isRequired,
};
export { JobPage as default, jobLoader };
