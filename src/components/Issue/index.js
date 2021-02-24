import React from "react";

import "./styles.css";

import Label from "../Label";
import StatusIcon from "../StatusIcon";

export default function Issue(props) {
  const calculateElapsedTime = (created_at) => {
    const timeNow = new Date();
    const timeThen = new Date(created_at);

    const milliSecondDifference = timeNow.getTime() - timeThen.getTime();
    const seconds = milliSecondDifference / 1000;
    const mins = seconds / 60;
    const hrs = mins / 60;
    const days = hrs / 24;
    const months = days / 31;
    const years = months / 12;

    if (years >= 1) return Math.floor(years) + " years ago";
    if (months >= 1) return Math.floor(months) + " months ago";
    if (days >= 1) return Math.floor(days) + " days ago";
    if (hrs >= 1) return Math.floor(hrs) + " hours ago";
    if (mins >= 1) return Math.floor(mins) + " minutes ago";
    if (seconds >= 1) return Math.floor(seconds) + " seconds ago";

    return "just now";
  };
  return (
    <div className="issue-container">
      <StatusIcon status="open" />
      <div>
        <p className="issue-heading">{props.issue.title}</p>
        {props.issue.labels.length > 0 ? (
          <div className="labels-container">
            {props.issue.labels.map((label) => (
              <Label key={label.id} label={label} />
            ))}
          </div>
        ) : null}
        <p className="issue-footer">{`#${
          props.issue.number
        } opened ${calculateElapsedTime(props.issue.created_at)} by ${
          props.issue.user.login
        }`}</p>
      </div>
    </div>
  );
}
