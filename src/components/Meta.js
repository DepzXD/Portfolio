import React from "react";
import Helmet from "react-helmet";
import favicon from "../../static/favicon.ico";

const Meta = () => (
  <Helmet>
    <html lang="en" />
    <title>Depz</title>
    <meta name="description" content="Personal website." />
    <link rel="shortcut icon" href={favicon} />
  </Helmet>
);

export default Meta;
