"use client";

import { useState } from "react";

type CurriculumItem = {
  id: number;
  title: string;
  addon?: string;
  duration?: string;
  topics: string[];
};

const sqlCurriculum: CurriculumItem[] = [
  {
    id: 1,
    title: "SQL Installation & Introduction",
    addon: "Quick Start Setup & Overview",
    duration: "3 days",
    topics: [
      "Installation",
      "What is DBMS and RDBMS?",
      "Oracle - History and Version",
      "SQL - Case Sensitivity",
      "Batch User Creation",
      "Overview of basic SQL concepts",
    ],
  },
  {
    id: 2,
    title: "Basic SQL Queries",
    addon: "CRUD operations and Query Identification",
    duration: "8 days",
    topics: [
      "DDL - Create, Alter, Drop, Rename",
      "DML - Insert, Update, Delete",
      "TCL - Commit, Rollback",
      "DCL - Grant, Revoke",
      "DQL - Select",
      "Mock test - Query Identification",
    ],
  },
  {
    id: 3,
    title: "SQL Clauses and Datatypes",
    addon: "Foundations of Query Structuring",
    duration: "4 days",
    topics: [
      "SQL Datatypes - Number, Varchar, Char, Date",
      "Where Clause",
      "Having Clause",
      "Group By Clause",
      "Order By Clause",
      "Mock test - Clause based questions",
    ],
  },
  {
    id: 4,
    title: "Introductory SQL Practice",
    addon: "Writing your first SQL",
    duration: "3 days",
    topics: [
      "Selection (all, tab, dual)",
      "SQL Comments",
      "Table Creation",
      "Mock test - SQL Practice",
    ],
  },
  {
    id: 5,
    title: "Operators & Query Types Recap",
    addon: "Hands-on queries with DDL, DML, TCL, etc.",
    duration: "3 days",
    topics: [
      "Table Creation and Insertion",
      "Table Copy",
      "Mock test - DDL, DML, TCL, DCL, DQL Scenarios",
    ],
  },
  {
    id: 6,
    title: "Operators and Set Operations",
    addon: "Real-world operations with conditionals",
    duration: "4 days",
    topics: [
      "Arithmetic, Comparison, Logical Operators",
      "Set Operations - Union, Intersect, Minus",
      "Row to Column and vice versa",
      "Mock test - Operator Scenarios",
    ],
  },
  {
    id: 7,
    title: "Advanced Functions & Aliases",
    addon: "Table aliasing and aggregate logic",
    duration: "5 days",
    topics: [
      "SQL Alias - Table & Column",
      "Window Analytic Functions",
      "Aggregate Functions, Group By, Having",
      "Pseudo Columns, Dense Rank()",
      "Mock test - Analytic Functions",
    ],
  },
  {
    id: 8,
    title: "Joins & Subqueries",
    addon: "Mastering SQL Relationships",
    duration: "6 days",
    topics: [
      "Inner, Self, Outer, Cross, Natural Joins",
      "Mock test - Record Calculation with Joins",
      "Nested, Correlated & Inline Subqueries",
      "Mock test - Subquery Scenarios",
    ],
  },
  {
    id: 9,
    title: "String & Date Functions",
    addon: "Transforming & cleaning data",
    duration: "1 day",
    topics: [
      "Upper, Lower, instr, substr, replace, case, concat, trim, ltrim, rtrim, rpad, lpad, nvl, round, trunc, to_number, to_char, to_date",
    ],
  },
  {
    id: 10,
    title: "Constraints, Indexing & Views",
    addon: "Performance Optimization",
    duration: "4 days",
    topics: [
      "Constraints (PRIMARY, FOREIGN, NULL, UNIQUE, CHECK)",
      "Mock test - Constraints",
      "Index - B Tree, Bitmap, Function Based",
      "Explain Plan Reading",
      "Views vs Materialized Views",
    ],
  },
  {
    id: 11,
    title: "Data Export & Import",
    addon: "Backup & Restore using impdp/expdp",
    duration: "1 day",
    topics: ["Data Import/Export using impdp, expdp"],
  },
];

const linuxCurriculum: CurriculumItem[] = [
  {
    id: 1,
    title: "Linux Curriculum",
    topics: [
      "Installation and History of Linux",
      "Basic commands",
      "File System Navigation & Maintenance",
      "File System Display Commands",
      "List commands filesystem",
      "Grep command (Global Regular Expression Pattern)",
      "Wildcards edition",
      "Sed command (Stream editor)",
      "Awk command",
      "Cut, Sort, Uniq commands",
      "User Management tasks",
      "File Permissioning commands",
      "Diff command, Cmp command",
      "User Session & System Monitoring Commands",
      "System Identity & Info Commands",
      "File System & Disk Utilities",
      "User & Link Management",
      "Find command",
      "Different layers of Linux architectures",
      "Shell Scripting operators, and basic programs",
      "Shell Scripting (if then, if then else, if elif else, do while loop)",
    ],
  },
];

export default function JobCurriculumSection() {
  const [selectedCourse, setSelectedCourse] = useState<"sql" | "linux">("sql");
  const [selectedSql, setSelectedSql] = useState<number>(1);
  const activeSql = sqlCurriculum.find((item) => item.id === selectedSql);

  return (
    <section className="bg-cyan-50 text-cyan-900 py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Curriculum and{" "}
          <span className="text-sky-500 underline underline-offset-4">
            Learning Track
          </span>
        </h2>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setSelectedCourse("sql")}
            className={`px-4 py-2 rounded-md font-semibold border transition-all ${
              selectedCourse === "sql"
                ? "bg-cyan-600 text-white border-cyan-700"
                : "bg-white text-cyan-700 border-cyan-300 hover:border-cyan-500"
            }`}
          >
            SQL
          </button>
          <button
            onClick={() => setSelectedCourse("linux")}
            className={`px-4 py-2 rounded-md font-semibold border transition-all ${
              selectedCourse === "linux"
                ? "bg-cyan-600 text-white border-cyan-700"
                : "bg-white text-cyan-700 border-cyan-300 hover:border-cyan-500"
            }`}
          >
            Linux
          </button>
        </div>
      </div>

      {selectedCourse === "sql" ? (
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {sqlCurriculum.map((item) => {
              const isActive = selectedSql === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedSql(item.id)}
                  className={`cursor-pointer border p-4 rounded-md transition-all ${
                    isActive
                      ? "bg-white text-cyan-900 border-cyan-600 shadow"
                      : "border-cyan-300 hover:border-cyan-400"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`font-bold text-lg ${
                        isActive ? "text-cyan-700" : "text-cyan-500"
                      }`}
                    >
                      0{item.id}
                    </div>
                    <div>
                      <h3
                        className={`font-semibold ${
                          isActive ? "text-cyan-900" : "text-cyan-800"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          isActive ? "text-cyan-700" : "text-cyan-600"
                        }`}
                      >
                        Add-On: {item.addon}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {activeSql && (
            <div className="bg-white border border-cyan-200 rounded-md p-6 h-fit shadow-sm">
              <div className="flex justify-between mb-4">
                <h4 className="text-lg font-semibold text-cyan-900">Topics</h4>
                <span className="text-sm text-sky-600 font-medium">
                  Duration: {activeSql.duration}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm text-cyan-800">
                {activeSql.topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto mt-10">
          <ul className="list-disc list-inside space-y-3 text-base text-cyan-800">
            {linuxCurriculum[0].topics.map((topic, idx) => (
              <li key={idx}>{topic}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
