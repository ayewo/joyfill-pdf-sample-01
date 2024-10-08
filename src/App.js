import * as React from "react";

import { 
  RouterProvider, 
  Routes,
  Route, 
  Outlet, 
  Navigate,
  Link,
  createBrowserRouter, 
  createRoutesFromElements,
} from "react-router-dom";

import './App.css';

import SimplePage from './demos/simple/index.js';
import TemplatesRootPage from './demos/templates/index.js';
import TemplatesPage from './demos/templates/pages/TemplatesPage.js';
import TemplateDocumentsPage from './demos/templates/pages/TemplateDocumentsPage.js';
import TemplateDataPage from './demos/templates/pages/TemplateDataPage.js';
import FillTemplateDocumentPage from './demos/templates/pages/FillTemplateDocumentPage.js';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Outlet />}
    >
      <Route path="/" element={<IntroPage />} />
      <Route path="/simple_demo" element={<SimplePage />} />
      <Route path="/templates_demo" element={<TemplatesRootPage />}>
        <Route path="/templates_demo" element={<TemplatesPage />}/>
        <Route path="/templates_demo/:templateIdentifier/documents" element={<TemplateDocumentsPage />}/>
        <Route path="/templates_demo/:templateIdentifier/data" element={<TemplateDataPage />}/>
        <Route path="/templates_demo/:templateIdentifier/documents/:documentIdentifier" element={<FillTemplateDocumentPage />}/>
      </Route>
    </Route>
  )
);

export default function App() {

  return (
    <RouterProvider router={Router}/>
  );
}

function IntroPage() {
  return (
    <div className="App">
      <div className="row">
        <column>
          <a
            className="App-link"
            href="https://docs.joyfill.io/"
            target="_blank"
          >
            Checkout Joyfill Docs for More
          </a>
        </column>
        <column>
          <img src={'https://joyfill.io/wp-content/uploads/2022/03/Joyfill-logo-website-mobile.svg'} className="App-logo" alt="logo" />
        </column>
        <column>
        </column>
      </div>
      <Link to="/simple_demo"><h1>Simple Demo</h1></Link>
      <Link to="/templates_demo"><h1>Templates Workflow Demo</h1></Link>
    </div>
  );
}



