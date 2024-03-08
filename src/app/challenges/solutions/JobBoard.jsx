"use client";

import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { tv } from "tailwind-variants";
import { fredoka } from "@/app/fonts";
import { useState } from "react";
import {
  Button,
  Input,
  ListBox,
  ListBoxItem,
  SearchField,
} from "react-aria-components";

const button = tv({
  base: ["flex items-center justify-center transition-all outline-none"],
  variants: {
    variant: {
      primary: [
        "bg-pink-500 text-gray-50 ring-pink-500 rounded-2xl py-2 px-3 font-medium",
        "hover:ring-2 hover:bg-transparent hover:text-pink-500",
        "focus-visible:ring-2 focus-visible:ring-offset-2",
      ],
      link: ["text-pink-500 underline-offset-4 decoration-2"],
    },
    isPressed: {
      true: ["scale-95"],
    },
  },
});

const input = tv({
  base: [
    "outline-none transition-all selection:bg-pink-200 focus:border-pink-400 border-2 border-gray-300 px-3 py-2 bg-white",
  ],
});

const badge = tv({
  base: [
    "rounded-full py-1 px-2 text-center text-gray-900 bg-gray-200 text-sm",
  ],
  variants: {
    variant: {
      primary: ["bg-pink-200 text-pink-500"],
    },
  },
});

const jobCard = tv({
  slots: {
    base: ["rounded-2xl p-4 grid gap-4 text-gray-950 bg-white auto-rows-min"],
    companyLogo: [
      "rounded-2xl size-16 p-3 bg-gray-200 items-center flex justify-center",
    ],
    title: ["font-medium text-lg text-gray-800"],
    companyName: ["text-sm text-gray-950/60"],
    badges: ["flex flex-wrap gap-x-4 gap-y-2"],
    salaryIcon: ["text-pink-500"],
    salary: ["font-medium text-sm"],
    posted: ["text-gray-950/60 text-sm"],
  },
});

export const JobBoard = () => {
  const [activeJob, setActiveJob] = useState(jobs[0]);
  return (
    <main
      className={`bg-gray-200 min-h-dvh lg:justify-center lg:flex lg:items-center ${fredoka.className}`}
    >
      <div className="grid lg:grid-cols-[1fr_auto] gap-4 lg:grid-rows-[auto_1fr] p-4">
        <Search />
        <SearchResults activeJob={activeJob} setActiveJob={setActiveJob} />
        <JobDetails activeJob={activeJob} />
      </div>
    </main>
  );
};

const Search = () => {
  return (
    <div className="flex items-center gap-4 lg:col-span-1 lg:row-start-1 flex-wrap">
      <SearchField className="flex-1 relative">
        <SearchIcon className="text-gray-950/40 absolute top-1/2 -translate-y-1/2 left-4" />
        <Input
          className={input({
            class:
              "rounded-2xl placeholder:text-gray-950/40 w-full min-w-32 pl-12",
          })}
          placeholder="Find a job"
        />
      </SearchField>
      <Button
        className={(states) =>
          button({ ...states, variant: "primary", class: "px-8" })
        }
      >
        Search
      </Button>
    </div>
  );
};

const JobDetails = ({ activeJob }) => {
  const { base, companyLogo, title, companyName, badges } = jobCard();
  return (
    <div
      className={base({
        class: "flex flex-col lg:col-start-2 lg:row-span-full lg:max-w-sm",
      })}
    >
      <div className={companyLogo()}>
        <activeJob.logo />
      </div>

      <div className="grid gap-2">
        <h2 className={title({ class: "text-2xl" })}>{activeJob.title}</h2>
        <span className={companyName()}>{activeJob.company}</span>
        <div
          className={badge({
            variant: "primary",
            class: "justify-self-start",
          })}
        >
          {activeJob.applicants}
        </div>
      </div>

      <hr className="border border-gray-200" />

      <div className="space-y-2">
        <h3 className={title()}>Description</h3>
        <p className="line-clamp-5 text-gray-950/70">{activeJob.description}</p>
      </div>

      <hr className="border border-gray-200" />

      <div className="space-y-2">
        <h3 className={title()}>Skills</h3>
        <div className={badges()}>
          {activeJob.skills.map((skill) => (
            <div key={skill} className={badge()}>
              {skill}
            </div>
          ))}
        </div>
      </div>

      <hr className="border border-gray-200" />

      <div className="space-y-2">
        <h3 className={title()}>Based Salary</h3>
        <span className="text-gray-950/60 block">{activeJob.salary}</span>
      </div>

      <Button
        className={(states) =>
          button({
            ...states,
            variant: "primary",
            class: "mt-auto",
          })
        }
      >
        Apply Now
      </Button>
    </div>
  );
};

const SearchResults = ({ setActiveJob, activeJob }) => {
  return (
    <div
      className="grid gap-4 grid-flow-row-dense bg-gray-100 p-4 rounded-2xl shadow-2xl
    lg:row-start-2 lg:col-span-1"
    >
      <header className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">Search Results</h2>
        <span className="font-medium text-sm">1,100 jobs found</span>
      </header>
      <ListBox
        className="grid md:grid-cols-2 gap-4"
        selectedKeys={[activeJob?.id]}
        onSelectionChange={(v) => {
          setActiveJob(jobs.find((job) => job.id === Array.from(v)[0]));
        }}
        selectionMode="single"
        layout="grid"
        disallowEmptySelection
      >
        {jobs.map((job) => (
          <ListBoxItem
            key={job.id}
            id={job.id}
            className="focus-visible:outline-pink-300 focus-visible:outline-1 rounded-2xl outline-offset-4 
            outline-none cursor-pointer transition-all selected:ring-pink-300 selected:ring-2"
          >
            <JobCard job={job} />
          </ListBoxItem>
        ))}
      </ListBox>
    </div>
  );
};

const JobCard = ({ job }) => {
  const {
    base,
    companyLogo,
    title,
    companyName,
    badges,
    salaryIcon,
    salary,
    posted,
  } = jobCard();
  return (
    <div className={base()}>
      <div className="grid grid-cols-[auto_1fr] gap-2">
        <div className={companyLogo()}>
          <job.logo />
        </div>
        <div>
          <h2 className={title()}>{job.title}</h2>
          <span className={companyName()}>{job.company}</span>
        </div>
      </div>
      <div className={badges()}>
        {job.skills.map((skill) => (
          <div key={skill} className={badge()}>
            {skill}
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-2">
        <SavingsOutlinedIcon fontSize="small" className={salaryIcon()} />
        <span className={salary()}>{job.salary}</span>
        <span className={posted({ class: "ml-auto" })}>{job.posted}</span>
      </div>
    </div>
  );
};

const FacebookLogo = () => {
  return (
    <svg viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g
        id="Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Color-"
          transform="translate(-200.000000, -160.000000)"
          fill="#4460A0"
        >
          <path
            d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
            id="Facebook"
          ></path>
        </g>
      </g>
    </svg>
  );
};

const IBMLogo = () => {
  return (
    <svg
      fill="#000000"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.004 21.583h5.438v-0.78h-5.438zM1.004 20.094h5.438v-0.779h-5.438zM2.558 18.605h2.331v-0.78h-2.331zM2.558 17.116h2.331v-0.779h-2.331zM2.558 15.629h2.331v-0.78h-2.331zM2.558 14.141h2.331v-0.78h-2.331zM1.004 12.652h5.438v-0.78h-5.438zM1.004 11.164h5.438v-0.78h-5.438zM7.218 20.095h8.29c0.131-0.224 0.239-0.484 0.308-0.759l0.004-0.021h-8.601zM14.858 16.339h-6.086v0.78h6.734c-0.176-0.303-0.392-0.56-0.645-0.776l-0.004-0.003zM8.772 14.85v0.78h6.086c0.256-0.22 0.472-0.477 0.641-0.766l0.008-0.014zM15.508 11.874h-8.289v0.78h8.603c-0.073-0.295-0.181-0.555-0.32-0.794l0.008 0.014zM12.938 10.385h-5.72v0.78h7.723c-0.524-0.483-1.226-0.78-1.998-0.78-0.001 0-0.003 0-0.004 0h0zM8.773 14.141h2.331v-0.78h-2.331zM13.293 14.141h2.509c0.065-0.234 0.103-0.502 0.104-0.779v-0h-2.613zM8.773 18.605h2.331v-0.78h-2.331zM13.292 17.826v0.78h2.614c-0.001-0.278-0.038-0.546-0.109-0.801l0.005 0.021zM7.219 21.575l5.721 0.008c0.002 0 0.004 0 0.007 0 0.771 0 1.473-0.296 1.997-0.782l-0.002 0.002h-7.723zM22.756 21.582l0.271-0.78h-0.54zM22.238 20.093h1.037l0.272-0.779h-1.582zM21.718 18.604h2.077l0.272-0.779h-2.622zM21.197 17.117h3.119l0.272-0.78h-3.664zM18.096 14.139h4.198l-0.27-0.779h-3.928zM23.737 12.652h5.236v-0.78h-4.966zM24.523 10.384l-0.27 0.78h4.719v-0.78zM16.542 21.582h3.884v-0.78h-3.884zM16.542 20.093h3.884v-0.779h-3.884zM18.096 18.604h2.331v-0.778h-2.331zM18.096 17.117h2.331v-0.78h-2.331zM27.418 13.361h-3.926l-0.271 0.78h4.198zM25.089 15.629h2.329v-0.78h-4.442l-0.219 0.63-0.219-0.63h-4.442v0.78h2.331v-0.717l0.25 0.717h4.161l0.25-0.717zM25.089 17.117h2.329v-0.78h-2.331zM25.089 18.605h2.329v-0.78h-2.331zM25.089 20.092h3.883v-0.778h-3.884zM25.089 21.582h3.883v-0.78h-3.884zM21.777 12.651l-0.27-0.779h-4.965v0.78zM21.261 11.164l-0.27-0.78h-4.449v0.78zM29.809 21.002c0.009-0.322 0.272-0.58 0.596-0.58 0.329 0 0.596 0.267 0.596 0.596s-0.267 0.596-0.596 0.596c-0.168 0-0.319-0.069-0.428-0.181l-0-0c-0.104-0.107-0.168-0.254-0.168-0.415 0-0.006 0-0.011 0-0.017l-0 0.001zM30.856 21.040v-0.077c0-0.251-0.203-0.454-0.454-0.454s-0.454 0.203-0.454 0.454v0 0.077c0 0.251 0.203 0.454 0.454 0.454s0.454-0.203 0.454-0.454v0zM30.313 21.317h-0.151v-0.622h0.281c0.007-0.001 0.015-0.001 0.023-0.001 0.104 0 0.188 0.084 0.188 0.188 0 0.003-0 0.007-0 0.010l0-0c0.001 0.005 0.001 0.011 0.001 0.018 0 0.076-0.046 0.141-0.112 0.169l-0.001 0 0.139 0.237h-0.166l-0.115-0.212h-0.087zM30.426 20.99c0.047 0 0.075-0.021 0.075-0.066v-0.045c0-0.044-0.027-0.065-0.075-0.065h-0.112v0.175z" />
    </svg>
  );
};

const AppleLogo = () => {
  return (
    <svg
      viewBox="-1.5 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-102.000000, -7439.000000)"
          fill="#000000"
        >
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485"
              id="apple-[#173]"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

const DropboxLogo = () => {
  return (
    <svg
      viewBox="0 -1.5 48 48"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g
        id="Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Color-"
          transform="translate(-800.000000, -363.000000)"
          fill="#0F82E2"
        >
          <path
            d="M824,389.033255 L814.1195,397.34573 L800,388.053538 L809.7635,380.17347 L823.999971,389.033238 L838.2362,380.172109 L847.9997,388.05369 L833.8802,397.345881 L823.9997,389.033406 Z M814.1198,363 L800.0003,372.292191 L809.7638,380.17226 L824.0003,371.312475 L814.1198,363 Z M824.02895,390.821692 L814.11995,399.109976 L809.87945,396.318993 L809.87945,399.447132 L824.02895,408 L838.17845,399.447132 L838.17845,396.318993 L833.93795,399.109976 L824.02895,390.821692 Z M848,372.292343 L833.8805,363.000151 L824,371.312626 L838.2365,380.172411 L848,372.292343 Z"
            id="Dropbox"
          ></path>
        </g>
      </g>
    </svg>
  );
};

const GoogleLogo = () => {
  return (
    <svg
      viewBox="-3 0 262 262"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <path
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
        fill="#4285F4"
      />
      <path
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
        fill="#34A853"
      />
      <path
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
        fill="#FBBC05"
      />
      <path
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
        fill="#EB4335"
      />
    </svg>
  );
};

const NetflixLogo = () => {
  return (
    <svg
      viewBox="0 0 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <radialGradient
          cx="48.3397178%"
          cy="49.4186213%"
          fx="48.3397178%"
          fy="49.4186213%"
          r="70.4380887%"
          gradientTransform="translate(0.483397,0.494186),scale(1.000000,0.550875),translate(-0.483397,-0.494186)"
          id="radialGradient-1"
        >
          <stop stopColor="#000000" offset="0%"></stop>
          <stop stopColor="#000000" stopOpacity="0" offset="100%"></stop>
        </radialGradient>
      </defs>
      <g>
        <polygon
          fill="#000000"
          fillRule="nonzero"
          points="1.80114185e-07 1.13710799e-06 255.904254 1.13710799e-06 255.904254 255.904255 1.80114171e-07 255.904255"
        ></polygon>
        <path
          d="M141.676338,41.2746569 L141.608906,79.6360396 L141.541118,117.997421 L138.385008,109.0921 C138.383912,109.089031 138.380021,109.077687 138.378943,109.074618 L134.30055,194.477217 C138.310388,205.800934 140.458766,211.845937 140.482897,211.870064 C140.51447,211.901649 142.799605,212.039499 145.561,212.176541 C153.927405,212.591702 164.29504,213.481319 172.159936,214.45853 C173.98096,214.684771 175.548152,214.800631 175.642501,214.716128 C175.736852,214.631624 175.788229,175.572658 175.756672,127.918505 L175.69923,41.2746569 L158.687784,41.2746569 L141.676338,41.2746569 Z"
          stroke="#000000"
          strokeWidth="2.9562209"
          fill="#B1060F"
        ></path>
        <path
          d="M80.1382878,41.1604861 L80.1382878,127.892104 C80.1382878,175.594555 80.1849645,214.670743 80.242112,214.727902 C80.2992558,214.785042 83.2534257,214.50614 86.8069318,214.108168 C90.3604343,213.710178 95.2716247,213.215292 97.7205879,213.008561 C101.476527,212.691477 112.690651,211.970454 113.989212,211.962472 C114.366954,211.960097 114.391182,210.011234 114.445895,175.226595 L114.503693,138.493217 L117.217033,146.170131 C117.636362,147.356673 117.767894,147.727198 118.176424,148.883116 L122.253748,63.5015679 C121.389836,61.0590106 121.842711,62.3412234 120.852658,59.5419824 C117.521259,50.1228923 114.694332,42.1337874 114.570412,41.7884254 L114.344924,41.1604861 L97.2417849,41.1604861 L80.1382878,41.1604861 Z"
          stroke="#000000"
          strokeWidth="2.9562209"
          fill="#B1060F"
        ></path>
        <path
          d="M80.1382787,41.1604861 L80.1382878,89.8454048 L114.434478,180.820963 C114.438058,178.736175 114.44215,177.609688 114.445895,175.226595 L114.503693,138.493217 L117.217033,146.170131 C132.320656,188.907688 140.435174,211.82235 140.482897,211.870064 C140.51447,211.901649 142.799605,212.039499 145.561,212.176541 C153.927405,212.591702 164.29504,213.481319 172.159936,214.45853 C173.98096,214.684771 175.548152,214.800631 175.642501,214.716128 C175.70735,214.658045 175.749683,195.506553 175.760954,168.489092 L141.625319,70.3489604 L141.608897,79.6360396 L141.541109,117.997421 L138.384999,109.0921 C135.301137,100.390624 133.24206,94.5714036 120.852649,59.5419824 C117.52125,50.1228923 114.694323,42.1337874 114.570403,41.7884254 L114.344915,41.1604861 L97.2417758,41.1604861 L80.1382787,41.1604861 Z"
          fill="url(#radialGradient-1)"
        ></path>
        <path
          d="M80.1390021,41.160477 L114.503693,138.537458 L114.503693,138.493217 L117.217033,146.170131 C132.320656,188.907688 140.435174,211.82235 140.482897,211.870064 C140.51447,211.901649 142.799605,212.039499 145.561,212.176541 C153.927405,212.591702 164.29504,213.481319 172.159936,214.45853 C173.971627,214.683611 175.530793,214.799226 175.639648,214.717197 L141.541118,117.979583 L141.541118,117.997412 L138.385008,109.092091 C135.301146,100.390615 133.242069,94.5713945 120.852658,59.5419732 C117.521259,50.1228832 114.694332,42.1337783 114.570412,41.7884163 L114.344924,41.160477 L97.2417849,41.160477 L80.1390021,41.160477 Z"
          fill="#E50914"
        ></path>
        <path
          d="M141.676338,41.2746569 L141.608906,79.6360396 L141.541118,117.997421 L138.385008,109.0921 C138.383912,109.089031 138.380021,109.077687 138.378943,109.074618 L134.30055,194.477217 C138.310388,205.800934 140.458766,211.845937 140.482897,211.870064 C140.51447,211.901649 142.799605,212.039499 145.561,212.176541 C153.927405,212.591702 164.29504,213.481319 172.159936,214.45853 C173.98096,214.684771 175.548152,214.800631 175.642501,214.716128 C175.736852,214.631624 175.788229,175.572658 175.756672,127.918505 L175.69923,41.2746569 L158.687784,41.2746569 L141.676338,41.2746569 Z"
          stroke="#000000"
          strokeWidth="2.9562209"
          fill="#B1060F"
        ></path>
        <path
          d="M80.1382878,41.1604861 L80.1382878,127.892104 C80.1382878,175.594555 80.1849645,214.670743 80.242112,214.727902 C80.2992558,214.785042 83.2534257,214.50614 86.8069318,214.108168 C90.3604343,213.710178 95.2716247,213.215292 97.7205879,213.008561 C101.476527,212.691477 112.690651,211.970454 113.989212,211.962472 C114.366954,211.960097 114.391182,210.011234 114.445895,175.226595 L114.503693,138.493217 L117.217033,146.170131 C117.636362,147.356673 117.767894,147.727198 118.176424,148.883116 L122.253748,63.5015679 C121.389836,61.0590106 121.842711,62.3412234 120.852658,59.5419824 C117.521259,50.1228923 114.694332,42.1337874 114.570412,41.7884254 L114.344924,41.1604861 L97.2417849,41.1604861 L80.1382878,41.1604861 Z"
          stroke="#000000"
          strokeWidth="2.9562209"
          fill="#B1060F"
        ></path>
        <path
          d="M80.1382787,41.1604861 L80.1382878,89.8454048 L114.434478,180.820963 C114.438058,178.736175 114.44215,177.609688 114.445895,175.226595 L114.503693,138.493217 L117.217033,146.170131 C132.320656,188.907688 140.435174,211.82235 140.482897,211.870064 C140.51447,211.901649 142.799605,212.039499 145.561,212.176541 C153.927405,212.591702 164.29504,213.481319 172.159936,214.45853 C173.98096,214.684771 175.548152,214.800631 175.642501,214.716128 C175.70735,214.658045 175.749683,195.506553 175.760954,168.489092 L141.625319,70.3489604 L141.608897,79.6360396 L141.541109,117.997421 L138.384999,109.0921 C135.301137,100.390624 133.24206,94.5714036 120.852649,59.5419824 C117.52125,50.1228923 114.694323,42.1337874 114.570403,41.7884254 L114.344915,41.1604861 L97.2417758,41.1604861 L80.1382787,41.1604861 Z"
          fill="url(#radialGradient-1)"
        ></path>
        <path
          d="M80.1390021,41.160477 L114.503693,138.537458 L114.503693,138.493217 L117.217033,146.170131 C132.320656,188.907688 140.435174,211.82235 140.482897,211.870064 C140.51447,211.901649 142.799605,212.039499 145.561,212.176541 C153.927405,212.591702 164.29504,213.481319 172.159936,214.45853 C173.971627,214.683611 175.530793,214.799226 175.639648,214.717197 L141.541118,117.979583 L141.541118,117.997412 L138.385008,109.092091 C135.301146,100.390615 133.242069,94.5713945 120.852658,59.5419732 C117.521259,50.1228832 114.694332,42.1337783 114.570412,41.7884163 L114.344924,41.160477 L97.2417849,41.160477 L80.1390021,41.160477 Z"
          fill="#E50914"
        ></path>
      </g>
    </svg>
  );
};

const jobs = [
  {
    id: 1,
    company: "Apple",
    title: "Mid Fullstack Developer",
    skills: ["JavaScript", "Ansible", "Angular", "C#"],
    logo: AppleLogo,
    salary: "$15k/month",
    posted: "2 hours ago",
    applicants: "+102 Applicants",
    description:
      "Applicants must have once fixed a bug so mysterious, it became an urban legend in developer communities. Are you ready to code like no one's watching and create software that could impress even the most critical cats on the internet? We're looking for a developer who considers coffee a primary food group and has dreams in binary. Bonus points if you've ever hacked a mainframe with nothing but a toothpick and a bowl of ramen.",
  },
  {
    id: 2,
    company: "Dropbox",
    title: "IT Software Consultant",
    skills: ["C#", "Azure", "Fullstack"],
    logo: DropboxLogo,
    salary: "$13k/month",
    posted: "2 hours ago",
    applicants: "+79 Applicants",
    description:
      "Can you multitask like an octopus and juggle tasks with more arms than a mythical Greek god? If so, you're perfect for the role! Are you ready to code like no one's watching and create software that could impress even the most critical cats on the internet? We value team players who can telecommute via astral projection and participate in code reviews with friendly ghosts. We prefer candidates who have written code that not only passed the tests but also wrote a heartfelt thank you note afterwards.",
  },
  {
    id: 3,
    company: "IBM",
    title: "Backend .Net Developer",
    logo: IBMLogo,
    skills: ["SQL", "Linux", "Azure"],
    salary: "$13k/month",
    posted: "24 mins ago",
    applicants: "+172 Applicants",
    description:
      "Applicants must have once fixed a bug so mysterious, it became an urban legend in developer communities. Our ideal candidate can find their way out of a virtual maze while blindfolded and only using keyboard shortcuts. Experience whispering to servers to coax out their best performance is a definite plus. We're looking for a developer who considers coffee a primary food group and has dreams in binary.",
  },
  {
    id: 4,
    company: "Dropbox",
    title: "Full Stack Developer",
    skills: ["SQL", "Azure", "Angular", "C#"],
    logo: DropboxLogo,
    salary: "$13k/month",
    posted: "2 hours ago",
    applicants: "+161 Applicants",
    description:
      "Experience whispering to servers to coax out their best performance is a definite plus. Our company culture embraces those who can recite the entire ASCII table while sleep-coding. Bonus points if you've ever hacked a mainframe with nothing but a toothpick and a bowl of ramen. Can you multitask like an octopus and juggle tasks with more arms than a mythical Greek god? If so, you're perfect for the role!",
  },
  {
    id: 5,
    company: "Facebook",
    title: "Platforms Engineer",
    skills: ["Node.js", "JavaScript", "Fullstack", "Angular"],
    logo: FacebookLogo,
    salary: "$13k/month",
    posted: "18 mins ago",
    applicants: "+152 Applicants",
    description:
      "Our company culture embraces those who can recite the entire ASCII table while sleep-coding. Are you ready to code like no one's watching and create software that could impress even the most critical cats on the internet? Bonus points if you've ever hacked a mainframe with nothing but a toothpick and a bowl of ramen. Experience whispering to servers to coax out their best performance is a definite plus.",
  },
  {
    id: 6,
    company: "Netflix",
    title: "IT Software Consultant",
    skills: ["SQL", "Angular", "Node.js", "Azure"],
    logo: NetflixLogo,
    salary: "$15k/month",
    posted: "6 mins ago",
    applicants: "+151 Applicants",
    description:
      "Are you ready to code like no one's watching and create software that could impress even the most critical cats on the internet? Bonus points if you've ever hacked a mainframe with nothing but a toothpick and a bowl of ramen. We prefer candidates who have written code that not only passed the tests but also wrote a heartfelt thank you note afterwards. We value team players who can telecommute via astral projection and participate in code reviews with friendly ghosts.",
  },
];
