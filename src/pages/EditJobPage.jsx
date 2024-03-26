
import styles from "../components/cssModuleComponent/AddJobPage.module.css";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify'


const EditJobPage = ({ updateJobSubmit }) => {

    const navigate = useNavigate();
    const job = useLoaderData();
    const { id } = useParams();

    const [typeID, setTypeID] = useState(job.type);
    const [titleID, setTitleID] = useState(job.title);
    const [descriptionID, setDescriptionID] = useState(job.description);
    const [typeSalaryID, setTypeSalaryID] = useState(job.salary);
    const [locationID, setLocationID] = useState(job.location);
    const [companyNameID, setCompanyNameID] = useState(job.company.name);
    const [companyDescriptionID, setCompanyDescriptionID] = useState(job.company.description);
    const [contactEmailID, setContactEmailID] = useState(job.company.contactEmail);
    const [contactPhoneID, setContactPhoneID] = useState(job.company.contactPhone);



    const submitFormUpdate = (e) => {
        e.preventDefault();

        const updateJob = {
            title: titleID,
            type: typeID,
            location: locationID,
            description: descriptionID,
            salary: typeSalaryID,
            company: {
                name: companyNameID,
                description: companyDescriptionID,
                contactEmail: contactEmailID,
                contactPhone: contactPhoneID,
            }
        }
        console.log(updateJob)
        updateJobSubmit(updateJob, id);
        toast.success("Job updated Successfully!")
        return navigate(`/jobs/${job.id}`)

    }

    return (
        <>
            <section className={styles.formBackground}>
                <div className={styles.formContainer}>
                    <div className={styles.divForm}>
                        <div className={styles.titleForm}>
                            <h2>Update Job</h2>
                        </div>
                        <form className={styles.formForm} onSubmit={submitFormUpdate} >


                            <div className={styles.jobInputHolder}>
                                <label htmlFor="type" className={styles.labelType}>Job Type</label>
                                <select id="type" className={styles.typeID} name="type" required value={typeID}

                                    onChange={(e) => setTypeID(e.target.value)}
                                >
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part -time</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </div>

                            <div className={styles.jobInputHolder}>
                                <label className={styles.labelJobListingName}>Job Listing Name</label>
                                <input type="text" id="title" className={styles.titleID} placeholder="eg. Beautiful Apartment in Miami" required value={titleID} onChange={(e) => setTitleID(e.target.value)} />
                            </div>


                            <div className={styles.jobInputHolder}>
                                <label htmlFor="description" className={styles.description}>Description</label>
                                <textarea id="description" className={styles.descriptionID} name="description" rows="4"
                                    placeholder="Add any job duties, expectations, requirements, etc"
                                    value={descriptionID}
                                    onChange={(e) => setDescriptionID(e.target.value)}>

                                </textarea>
                            </div>

                            <div className={styles.jobInputHolder}>
                                <label htmlFor="type" className={styles.salary}>Salary</label>
                                <select id="typeSalary" className={styles.typeSalaryID} name="type" required value={typeSalaryID} onChange={(e) => setTypeSalaryID(e.target.value)} >
                                    <option value='Under $50K'>Under $50K</option>
                                    <option value='$50K - 60K'>$50K - $60K</option>
                                    <option value='$60K - 70K'>$60K - $70K</option>
                                    <option value='$70K - 80K'>$70K - $80K</option>
                                    <option value='$80K - 90K'>$80K - $90K</option>
                                    <option value='$90K - 100K'>$90K - $100K</option>
                                    <option value='$100K - 125K'>$100K - $125K</option>
                                    <option value='$125K - 150K'>$125K - $150K</option>
                                    <option value='$150K - 175K'>$150K - $175K</option>
                                    <option value='$175K - 200K'>$175K - $200K</option>
                                    <option value='Over $200K'>Over $200K</option>
                                </select>
                            </div>


                            <div className={styles.jobInputHolder}>
                                <label htmlFor="location" className={styles.location}>Location</label>
                                <input type="text" id="location" className={styles.locationID} placeholder="Company Location" required value={locationID}
                                    onChange={(e) => setLocationID(e.target.value)} />


                            </div>

                            <div className="transparent">
                                <h3 className="transparent">Company Info</h3>
                            </div>


                            <div className={styles.jobInputHolder}>
                                <label htmlFor="companyName" className={styles.comName}>Company Name</label>
                                <input type="text" id="companyName" className={styles.companyNameID} placeholder="Company Location" required value={companyNameID}
                                    onChange={(e) => { setCompanyNameID(e.target.value) }} />


                            </div>

                            <div className={styles.jobInputHolder}>
                                <label htmlFor="companyDescription" className={styles.comDes}>Company Description</label>
                                <textarea id="companyDescription" className={styles.companyDescriptionID} name="companyDescription" rows="4"
                                    placeholder="What does your company do?"
                                    value={companyDescriptionID}
                                    onChange={(e) => setCompanyDescriptionID(e.target.value)}
                                >

                                </textarea>
                            </div>

                            <div className={styles.jobInputHolder}>
                                <label htmlFor="contactEmal" className={styles.comContact}>Contact Email</label>
                                <input type="text" id="contactEmal" className={styles.contactEmailID} placeholder="Contact Email..." required
                                    value={contactEmailID}
                                    onChange={(e) => setContactEmailID(e.target.value)}
                                />


                            </div>

                            <div className={styles.jobInputHolder}>
                                <label htmlFor="contactPhone" className={styles.comPhone}>Contact Phone</label>
                                <input type="text" id="contactPhone" className={styles.contactPhoneID} placeholder="Contact Phone Number..." required

                                    value={contactPhoneID}
                                    onChange={(e) => setContactPhoneID(e.target.value)}
                                />
                            </div>
                            <button className={styles.addBTN}>Update Job</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
EditJobPage.propTypes = {
    updateJobSubmit: PropTypes.func.isRequired,
};
export default EditJobPage
