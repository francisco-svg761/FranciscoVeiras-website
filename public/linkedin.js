import * as React from 'react';

function LinkedinComponent(props) {
  return (
    <a href="https://www.linkedin.com/in/francisco-veiras-b641b8208/">
      <svg
        viewBox="0 0 500 500"
        height={30}
        id="prefix__Layer_1"
        width={30}
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <style>{'.prefix__st0{fill-rule:evenodd;clip-rule:evenodd}'}</style>
        <path
          className="prefix__st0"
          d="M182.8 384V212.9h-54.9V384h54.9zm-25.4-197c18.3 0 29.7-13.1 29.7-29.5-.3-16.7-11.4-29.5-29.4-29.5S128 140.8 128 157.5c0 16.4 11.4 29.5 29 29.5h.4zM320.6 209c-29.1 0-41.6 16.4-49.6 27.8V213h-55v171h55v-97.4c0-5 .4-10 1.9-13.5 4-10 13-20.3 28.2-20.3 19.9 0 27.9 15.3 27.9 37.7V384h55v-99.9c0-51.3-27.2-75.1-63.4-75.1z"
        />
        <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM414 416H99.1c-1.8 0-3.1-1.4-3.1-3.1V98c0-1.1 1-2 2-2h316c1 0 2 1 2 2v316c0 .9-.9 2-2 2z" />
        <style jsx>{`
          svg {
            margin: 10px 10px;
            cursor: pointer;
          }
        `}</style>
      </svg>
    </a>
  );
}

export default LinkedinComponent;
