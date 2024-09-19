import React, { useState, useEffect } from 'react';
import { Alert, Card } from 'antd';
import { listDocumentsForTemplate } from '../../../api';
import { useParams } from "react-router-dom";
import TableComponent from './TableComponent';

/**
 * Overview
 *
 * - This page retrieves and displays all data associated with a document.
 */
const TemplateDocumentsPage = () => {

  /**
   * Step 1: Retrieve templateIdentifier from url param to list associated documents
   */
  const { templateIdentifier } = useParams(); 

  const [ docs, setDocs ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  /**
   * Step 2: Retrieve list of documents associated with the template from api
   */
  useEffect(() => {

    const handleListTemplateDocuments = async () => {
      const response = await listDocumentsForTemplate(templateIdentifier); 
      if (response) setDocs(response.data);
      setLoading(false);
    }

    handleListTemplateDocuments();  

  }, [templateIdentifier]);

  if (!docs) return (
    <div style={{padding: '24px'}}>
      <Alert
        message="No Documents Found"
        description="Fill out templates to create documents."
        type="info"
      />
    </div>
  );

  const tableData = [];

  // Function to extract row data from each document
  const extractData = (payload) => {
    const fullName = `${payload.find((field) => field.title === 'Firstname')?.value} ${payload.find((field) => field.title === 'Lastname')?.value}`;
    const feedback = payload.find((field) => field.title === 'Feedback')?.value;
    const ageRangeField = payload.find((field) => field.title === 'Age Range');
    const ageRange =
      ageRangeField?.options.find((option) => option._id === ageRangeField.value)?.value ||
      ageRangeField?.options[0]?.value || // Default to the first option if age range was selected
      'Not Available';
    
    return {
      fullName,
      feedback,
      ageRange
    };
  };
  
  docs?.forEach((doc, i) => {
    if (doc.fields) {
      const formattedPayload = extractData(doc.fields);
      tableData.push(formattedPayload);
    }

  });

  return (
    <div style={{padding: '12px'}}>
      <h1>Form Data</h1>
      <Card>
        {(
          <>
          <TableComponent data={tableData} />
          </>
        )}
      </Card>
    </div>
  ); 

}

export default TemplateDocumentsPage;
