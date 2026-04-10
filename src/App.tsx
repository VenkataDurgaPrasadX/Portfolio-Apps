/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Work from "./pages/Work";
import Journey from "./pages/Journey";
import Skills from "./pages/Skills";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="work" element={<Work />} />
          <Route path="journey" element={<Journey />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </Router>
  );
}
