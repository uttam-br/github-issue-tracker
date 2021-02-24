import React, { useState, useEffect } from "react";

import Issue from "../Issue";
import Pagination from "../Pagination";

import "./styles.css";

export default function App() {
  const [error, setError] = useState(null);
  const [input, setInput] = useState(null);
  const [repoUrl, setRepoUrl] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [issues, setIssues] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const fetchIssues = () => {
    if (!input) return;
    setRepoUrl(input);
  };

  useEffect(() => {
    setRepoUrl("https://api.github.com/repos/facebook/react");
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (!repoUrl) return;
        const response = await fetch(repoUrl + "/issues?page=" + page);
        const _totalPages = response.headers
          .get("link")
          .split(",")[1]
          .split(";")[0]
          .split("?")[1]
          .split("=")[1]
          .split(">")[0];
        setTotalPages(parseInt(_totalPages));
        setIssues(await response.json());
      } catch (error) {
        setError("Something went wrong");
      }
    })();
  }, [page, repoUrl]);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>GitHub Issues Tracker</h1>
      <div style={{ display: "grid", justifyContent: "center", margin: 15 }}>
        <input
          type="text"
          placeholder="Enter repo url here"
          onChange={handleChange}
        />
        <button onClick={fetchIssues}>Fetch Issues</button>
      </div>
      {error
        ? error
        : issues.map((issue) => <Issue key={issue.number} issue={issue} />)}
      <Pagination min={1} max={totalPages} current={page} setPage={setPage} />
    </div>
  );
}
