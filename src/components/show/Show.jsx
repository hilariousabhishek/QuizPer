// routes.js
import React from 'react';
import { Route } from 'react-router-dom';

import RRB from './RRB/RRB';
import SSC from './SSC/SSC';

export const RRBRoute = (
  <Route path="/Show/RRB" element={<RRB />} />
);

export const SSCRoute = (
  <Route path="/Show/SSC" element={<SSC />} />
);
