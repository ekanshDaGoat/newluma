// Central content source for the whole site. All stats provided by Ekansh;
// competition data pulled from Devpost. Update here, not in the pages.

export const LATEST_COMPETITION_URL = "https://luma-hackathon-fall.devpost.com/?ref_feature=challenge&ref_medium=discover";
export const CONTACT_EMAIL = "ekanshsmail@gmail.com";
// [INSERT INTERNSHIP PROGRAM APPLICATION LINK] — using contact email until a form exists.
export const IFSL_APPLY_URL = `mailto:${CONTACT_EMAIL}?subject=Internship%20Program%20Application`;

export const homeStats = [
  { value: 2500, suffix: "+", label: "Students Completed" },
  { value: 23000, suffix: "+", prefix: "$", label: "In Prizes" },
  { value: 15, suffix: "+", label: "Sponsors" },
  { value: 50, suffix: "+", label: "Volunteers" },
  { value: 70, suffix: "+", label: "Interns Placed" },
];

export const ifslStats = [
  { value: 70, suffix: "+", label: "Interns Placed" },
  { value: 10, suffix: "+", label: "Fields Available" },
];

export interface Competition {
  name: string;
  date: string;
  participants: string;
  prizes: string;
  format: string;
  theme: string;
  url: string;
}

// Reverse chronological. Source: devpost.com — each competition's own page.
export const competitions: Competition[] = [
  {
    name: "LUMA Startathon Fall",
    date: "September 2026 – Present",
    participants: "[INSERT CURRENT COUNT]",
    prizes: "[INSERT PRIZE DETAILS]",
    format: "Virtual startup pitch competition",
    theme: "TBD — not decided yet",
    url: "https://luma-hackathon-fall.devpost.com/?ref_feature=challenge&ref_medium=discover",
  },
  {
    name: "LUMA Startathon Summer",
    date: "July 3–10, 2026",
    participants: "757 participants",
    prizes: "$[INSERT]+ in prizes",
    format: "Virtual startup pitch competition",
    theme: "Create a business that breaks down barriers to financial literacy",
    url: "https://luma-hackathon-500.devpost.com/",
  },
  {
    name: "LUMA Startathon Spring",
    date: "April 4 – May 2, 2026",
    participants: "394 participants",
    prizes: "$[INSERT]+ in prizes",
    format: "Virtual startup pitch competition",
    theme: "Build a business that solves a problem you care about",
    url: "https://luma.devpost.com/",
  },
  {
    name: "LUMA Startathon Winter",
    date: "October 18 – December 1, 2025",
    participants: "205 participants",
    prizes: "$[INSERT]+ in prizes",
    format: "Virtual startup pitch competition",
    theme: "Create a business that solves a problem in transportation, infrastructure, or education",
    url: "https://lumastartathon.devpost.com/",
  },
  {
    name: "LUMA Startathon Fall",
    date: "September 19 – October 6, 2025",
    participants: "126 participants",
    prizes: "$[INSERT]+ in prizes",
    format: "Virtual startup pitch competition",
    theme: "Create a business that solves a problem in aerospace, tourism, or security",
    url: "https://luma-startathon.devpost.com/",
  },
  {
    name: "LUMA Startathon End 2024",
    date: "November – December 2024",
    participants: "63 participants",
    prizes: "$[INSERT]+ in prizes",
    format: "Virtual startup pitch competition",
    theme: "Build a business idea that makes a difference in your community",
    url: "[INSERT URL]",
  },
  {
    name: "LUMA Startathon Mid 2024",
    date: "May – July 2024",
    participants: "42 participants",
    prizes: "$[INSERT]+ in prizes",
    format: "Virtual startup pitch competition",
    theme: "Create a business solving a problem you're passionate about",
    url: "[INSERT URL]",
  },
];

// Judging criteria as published on LUMA's Devpost pages.
export const judgingCriteria = [
  {
    name: "Technical Execution",
    weight: "25%",
    description: "Code quality, functionality, and mastery of the tech stack.",
  },
  {
    name: "Innovation & UX",
    weight: "25%",
    description: "Originality of the idea and a seamless user experience.",
  },
  {
    name: "Business & Finance",
    weight: "25%",
    description: "A realistic business model and financial sustainability.",
  },
  {
    name: "Communication",
    weight: "25%",
    description:
      "Deep product understanding, demonstrated in the video and live Q&A.",
  },
];

// Sponsors with logos and names
export const sponsors = [
  { name: "Wolfram", domain: "wolfram.com" },
  { name: "NordVPN", domain: "nordvpn.com" },
  { name: "CodeCrafters", domain: "codecrafters.io" },
  { name: "Flatlogic", domain: "flatlogic.com" },
  { name: "Boot.dev", domain: "boot.dev" },
  { name: "Interview Cake", domain: "interviewcake.com" },
  { name: "Steamoji", domain: "steamoji.com" },
  { name: "She's a Given", domain: "shesagiven.org" },
  { name: "Retrocausal", domain: "retrocausal.com" },
  { name: "Unibee", domain: "unibee.com" },
  { name: "Pantheon Prep", domain: "pantheonprep.com" },
  { name: "Code Tenderloin", domain: "codetenderloin.com" },
  { name: "Give My Certificate", domain: "givemycertificate.com" },
  { name: "AoPS", domain: "artofproblemsolving.com" },
  { name: ".xyz", domain: "gen.xyz" },
];

export const ifslFaq = [
  {
    q: "What's the internship program?",
    a: "LUMA's internship program matches high school and middle school students with real roles at nonprofits and startups. You get hands-on experience in your field while contributing to real work.",
  },
  {
    q: "Is it free?",
    a: "Yes. Like every LUMA program, internships are 100% free for students. There are no application fees and no participation costs.",
  },
  {
    q: "How long is an internship?",
    a: "LUMA internships run for 8 weeks.",
  },
  {
    q: "How are interns selected?",
    a: "We review applications and match you based on your interests, skills, and the available roles. Selection is based on your drive and fit, not pedigree.",
  },
  {
    q: "What kind of work do interns do?",
    a: "Interns are placed in real roles at nonprofits, startups, and organizations. You execute real work — whether that's social impact projects, product development, operations, or other areas depending on your placement.",
  },
  {
    q: "When does the next cohort open?",
    a: "Rolling admissions — we review applications on a rolling basis, so you can apply anytime.",
  },
];
