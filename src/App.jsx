import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import JobPages from "./pages/JobPages"
import NotFound from "./pages/NotFound";
import JobPage, { jobLoader } from "./pages/JobPage"
import AddJobPage from "./pages/AddJobPage"
import EditJobPage from "./pages/EditJobPage";





const App = () => {

  const addJob = async (newJob) => {
    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return
  }


  const deleteJob = async (id) => {
    const response = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    });
    return;
  }


  const updateJob = async (job, id) => {
    console.log(job)
    console.log(id)
    const response = await fetch(`/api/jobs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job),
    });
    return;
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobPages />} />
        <Route path='/add-jobs' element={<AddJobPage addJobSummit={addJob} />} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="*" element={<NotFound />} />
      </Route>

    )
  );
  return <RouterProvider router={router} />
}

export default App


{/* <>
      <NavBar />
      <Hero />
      <HomeCards />
      <JobListings />
    </> */}