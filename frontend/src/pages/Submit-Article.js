//All pages done together

import React from "react";
import SubmissionForm from "../components/submissionForm";

const SubmitArticle = () => {
     return (
      <div>
        <h2>Submit Article</h2>
            <p>Fill in the submission form to submit an article to SPEED.</p>
            <SubmissionForm/>
        </div>
    );
}
 
export default SubmitArticle;
