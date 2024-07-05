import React from "react";
import './ContentArea.css';

export default function ContentArea() {
  return (
    <div className="content-area">
      <p className="course-heading">Introduction of Python</p>
      <p className="heading-detail">
        Python is a high-level, general-purpose programming language. Its design
        philosophy emphasizes code readability with the use of significant
        indentation. Python is dynamically typed and garbage-collected. It
        supports multiple programming paradigms, including structured,
        object-oriented and functional programming.
      </p>

      <div className="course-content">
        <h2 className="sub-title">History of python</h2>
        <ul>
          <li>
            Python Programming language foundation stone laid in the year 1980.
          </li>

          <li>
            Python Programming language implementation started in the year 1989.
          </li>

          <li>
            Python Programming language officially released in the year 1991
            Feb.
          </li>

          <li>Python Programming language developed by GUIDO VAN ROSSUM.</li>

          <li>
            Python Programming language developed at CWI Institute in
            Nether-lands.
          </li>

          <li>
            ABC programming language is the Predecessor of Python Programming
            language.
          </li>
        </ul>

        <h2 className="sub-title">Features of python</h2>
        <p className="content">
          Features of language are nothing Services (or) Facilities provided by
          Language developers which are used by language Programmers for
          developing real time applications. ➢ Python Programming provides 11
          features . They are :-
        </p>
        <ol>
          <li>Simple</li>
          <li>Freeware and Open Source</li>
          <li>Platform Independent</li>
          <li>Dynamically Typed Programming</li>
          <li>Interpreted Programming</li>
          <li>High Level Programming</li>
          <li>Robust (Strong )</li>
          <li>Both Procedural and Object Oriented Programming</li>
          <li>Extensible</li>
          <li>Embedded</li>
          <li>
            Supports Third party APIs---Numpy, Pandas, SciPy, Scikit, matplotlib
          </li>
        </ol>

        <h2 className="sub-title">1. Simple</h2>
        <p className="content">
          Python is one of the Simple Programming Language because 3 technical
          factors. They are :-
          <ul>
            <li>
              Python Provides Rich Set of APIs (Libraries). So that Python
              Programmers can Re-Use the pre-defined Code without writing our
              own code.
            </li>
            Def Of API (Application Programming Interface): ➢ An API is a
            collection of MODULES. ➢ A MODULE is a Collection of FUNCTIONS,
            VARIABLES and classNameES Examples:- math , c-math, calendar, random ,
            datetime....etc.
            <li>
              Python Programming Provide In-Built Garbage Collection Facility.
              So that Garbage Collector Collects Un-Used Memory Space and
              Improves the Performance of Python Based Applications.
            </li>
            ➢ Definition of Garbage Collector:
            -------------------------------------------- ➢ A Garbage Collector
            is one of the in-Built Python Background which is running behind of
            Regular Python Program and whose role is to collect un-used memory
            and improves the Performance of Python Based Applications. ➢ hence,
            Garbage Collector takes about automatic Memory management.
            <li>
              Python Provides User-Friendly Syntaxes. So That Python Programmer
              can develop Error-Free Programs in limited span of time.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
