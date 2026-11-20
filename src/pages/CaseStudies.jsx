import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Media from '../components/Media';
import { Eyebrow } from '../components/sections';
import { usePageMotion } from '../motion/usePageMotion';

const oxygenChallenges = [
  { icon: 'chart', text: 'Oxygen demand surged sharply during pandemic waves' },
  { icon: 'solidMedicalBag', text: 'Supply had to reach 10+ kiosks and hospitals across the state' },
  { icon: 'solidGear', text: 'The state-built oxygen plant required ongoing management and upkeep' },
  { icon: 'solidBuilding', text: 'The plant eventually needed a smooth handover back to the government' },
];

const vaccineChallenges = [
  { icon: 'truck', text: '117 public and private facilities needed coordinated vaccine delivery' },
  { icon: 'vial', text: 'Cold-chain vials required careful, zero-damage handling throughout' },
  { icon: 'deliveryTime', text: 'Delivery speed mattered — facilities needed vials within hours of request' },
  { icon: 'foldedMap', text: 'Coverage had to extend across all 20 local governments in the state' },
];

const deliveryItems = [
  {
    title: 'Facility supply',
    text: 'Supplied oxygen cylinders to the Infectious Disease Centre and 10 kiosks.',
    slot: 'case-study.oxygen.facility',
  },
  {
    title: 'Plant management',
    text: 'Operated and maintained the Lagos State-built oxygen plant.',
    slot: 'case-study.oxygen.plant',
  },
  {
    title: 'Surge response',
    text: 'Scaled supply sharply during the pandemic’s second wave.',
    slot: 'case-study.oxygen.surge',
  },
  {
    title: 'Government handover',
    text: 'Handed the plant back to the Ministry of Health on schedule.',
    slot: 'case-study.oxygen.handover',
  },
];

const vaccineDeliveryItems = [
  {
    title: 'Facility onboarding',
    text: 'Extended distribution to 117 public and private facilities.',
    slot: 'case-study.vaccines.facility',
  },
  {
    title: 'Cold-chain handling',
    text: 'Delivered every vial without damage across 627 trips.',
    slot: 'case-study.vaccines.cold-chain',
  },
  {
    title: 'Rapid turnaround',
    text: 'Delivered vials within 12 hours of request, on average.',
    slot: 'case-study.vaccines.turnaround',
  },
  {
    title: 'Statewide coverage',
    text: 'Reached all 20 local governments across Lagos State.',
    slot: 'case-study.vaccines.coverage',
  },
];

const sampleTripsDeliveryItems = [
  {
    title: 'Multi-state coverage',
    text: 'Ran collection and delivery trips across 20 Nigerian states.',
    slot: 'case-study.sample-trips.coverage',
  },
  {
    title: '48-hour delivery',
    text: 'Delivered samples to testing labs within a 48-hour window.',
    slot: 'case-study.sample-trips.delivery',
  },
  {
    title: 'Trip management',
    text: 'Completed 6,785 trips with a strong, growing success rate.',
    slot: 'case-study.sample-trips.management',
  },
  {
    title: 'Zero-casualty handling',
    text: 'Maintained a 100% safe-delivery record across all trips.',
    slot: 'case-study.sample-trips.safe',
  },
];

const surgeStaffDeliveryItems = [
  {
    title: 'Personnel assessment',
    text: 'Assessed and right-sized surge personnel across all airports.',
    slot: 'case-study.surge-staff.assessment',
  },
  {
    title: 'Digitised attendance',
    text: 'Implemented a fully digitised attendance monitoring system.',
    slot: 'case-study.surge-staff.attendance',
  },
  {
    title: 'Multi-airport oversight',
    text: 'Managed personnel across five international airports.',
    slot: 'case-study.surge-staff.airports',
  },
  {
    title: 'Accountability controls',
    text: 'Curbed absenteeism through consistent digital tracking.',
    slot: 'case-study.surge-staff.accountability',
  },
];

const impactMetrics = [
  { icon: 'solidDatabase', label: <>30,000+<br />cylinders</> },
  { icon: 'solidBuilding', label: <>Plant<br />management</> },
  { icon: 'solidCheckCircle', label: <>Smooth<br />handover</> },
];

const milestones = [
  { date: 'Dec 2020', detail: 'Supply began at IDH Yaba & kiosks' },
  { date: 'Jul 2021', detail: '14,000+ cylinders for 2nd wave', above: true },
  { date: 'Dec 2021', detail: '20,917 total supplies reached' },
  { date: 'Feb 2024', detail: '30,000 supply milestone reached', above: true },
  { date: 'Mar 2024', detail: 'Plant handed back to government' },
];

const vaccineMilestones = [
  { date: 'Nov 2021', detail: 'Bulk & retail distribution begins' },
  { date: 'Dec 2021', detail: 'Private facilities included', above: true },
  { date: 'Jan 2022', detail: 'Facilities reached grows to 117' },
  { date: 'Mar 2022', detail: '1,000+ vials distributed', above: true },
  { date: 'Nov 2022', detail: '500+ trips completed' },
  { date: 'Mar 2023', detail: '6,000+ vials distributed', above: true },
];

// The Figma reference visibly provides these facility totals; keep labels
// data-led so the chart does not introduce unverified facility names.
const facilityCounts = [565, 334, 55, 20, 10, 10, 10];
const facilityBarHeights = [100, 76, 51, 21, 11, 11, 11];
const facilityNames = ['GBAGADA GH', 'ALIMOSHO GH', 'LASAMBUSS', 'IFAKO IJAIYE GH', 'AMUWO ODOFIN', 'APAPA GH', 'ETI-OSA GH'];

const vaccineFacilityCounts = [367, 311, 212, 210, 210, 183, 220];
const vaccineFacilityBarHeights = [100, 85, 58, 57, 57, 50, 60];
const vaccineFacilityNames = [
  'ARRIVE ALIVE MED.',
  'EVERCARE HOSP.',
  'ALAUSA STAFF CLINIC',
  'ALAUSA PHC',
  'AMUWO ODOFIN',
  'BOLA TINUBU PHC',
  '9GMC IKEJA',
];

const oxygenAchievementStats = [
  { icon: 'database', value: '30,000+', label: <>Cylinders supplied<br />(to Feb 2024)</> },
  { icon: 'check', value: '14,000+', label: <>Cylinders supplied at<br />pandemic peak</> },
];

const vaccineAchievementStats = [
  { icon: 'vial', value: '6,685', label: 'Vials delivered' },
  { icon: 'solidBuilding', value: '117', label: 'Facilities reached' },
  { icon: 'solidCheckCircle', value: '0', label: 'Vials damaged' },
];

const vaccineImpactMetrics = [
  { icon: 'solidBuilding', label: <>117<br />facilities</> },
  { icon: 'solidCheckCircle', label: <>Zero<br />damage</> },
  { icon: 'deliveryTime', label: <>12-hour<br />turnaround</> },
];

const sampleTripsAchievementStats = [
  { icon: 'truck', value: '6,785', label: 'Total trips completed' },
  { icon: 'vial', value: '37,000+', label: 'Samples transported' },
  { icon: 'deliveryTime', value: '99.9%', label: <>On-time delivery<br />rate</> },
];

const surgeStaffAchievementStats = [
  { icon: 'solidUsers', value: '347', label: <>Surge personnel<br />managed nationwide</> },
  { icon: 'network', value: '5', label: <>International airports<br />covered</> },
];

const surgeStaffFacilityCounts = [70, 82, 31, 43, 14];
const surgeStaffFacilityBarHeights = [85, 100, 38, 52, 17];
const surgeStaffFacilityNames = ['MMIA', 'NAIA', 'PHIA', 'MAKIA', 'AIAA'];

const caseStudyPages = {
  oxygen: {
    name: 'Oxygen',
    heroTitle: <>Carter Biggs collaboration on Oxygen<br className="case-studies__hero-title-break" />Supply &amp; Plant Management</>,
    heroDescription: <>Supplying medical oxygen and managing a state-owned plant<br className="case-studies__hero-copy-break" /> across a multi-year pandemic response.</>,
    heroSlot: 'solutions.proof.oxygen',
    clientDescription: 'Carter Biggs supplied medical oxygen to the Infectious Disease Centre, Yaba, and 10 oxygen kiosks across Lagos State.',
    start: 'Dec 2020',
    end: 'Mar 2024',
    timelineDots: 5,
    challengeTitle: 'Meeting surging oxygen demand',
    challengeCopy: 'Pandemic waves drove sudden surges in oxygen demand across many facilities, while the state plant had to keep running.',
    challenges: oxygenChallenges,
    deliveryTitle: 'Oxygen supply and plant management',
    deliveryItems,
    milestones,
    achievementTitle: 'Sustained oxygen supply, at scale',
    achievementStats: oxygenAchievementStats,
    achievementImpact: 'Infectious Disease Hospital, Yaba was the largest recipient of oxygen supplies throughout the project.',
    facilityHeading: 'Cylinders supplied, by facility',
    facilityCounts,
    facilityBarHeights,
    facilityNames,
    overallImpactTitle: <>Uninterrupted oxygen supply,<br />through every pandemic wave.</>,
    overallMetrics: impactMetrics,
    overallImpactCopy: <>30,000+ oxygen cylinders were delivered across Lagos State over three years, with the state plant returned fully operational to government in 2024.</>,
    ctaSlot: 'case-study.oxygen.cta',
    ctaLead: 'The Oxygen Supply Project shows how Carter Biggs sustains life-critical supply through sustained public health emergencies.',
  },
  vaccines: {
    name: 'Vaccines',
    heroTitle: <>Carter Biggs collaboration on Vaccine<br className="case-studies__hero-title-break" />Bulk Distribution for Lagos State</>,
    heroDescription: <>Distributing vaccine vials to 117 public and private health<br className="case-studies__hero-copy-break" /> facilities across Lagos State.</>,
    heroSlot: 'case-study.vaccines.hero',
    clientDescription: 'Carter Biggs distributed vaccine vials in bulk and at retail level to health facilities across Lagos State, on behalf of the Primary Health Care Board.',
    start: 'Nov 2021',
    end: 'Mar 2023',
    timelineDots: 7,
    challengeTitle: 'Zero-damage delivery, at scale',
    challengeCopy: <>Vaccines had to reach 117 facilities across the state quickly, without<br className="case-studies__hero-copy-break" /> a single vial being damaged in transit.</>,
    challenges: vaccineChallenges,
    deliveryTitle: 'Bulk and retail vaccine distribution',
    deliveryItems: vaccineDeliveryItems,
    milestones: vaccineMilestones,
    achievementTitle: 'Zero damage, every delivery',
    achievementStats: vaccineAchievementStats,
    achievementImpact: '627 trips were completed across 20 local governments, with an average delivery time of 12 hours.',
    facilityHeading: 'Vials delivered, by top facilities',
    facilityCounts: vaccineFacilityCounts,
    facilityBarHeights: vaccineFacilityBarHeights,
    facilityNames: vaccineFacilityNames,
    overallImpactTitle: <>Vaccine access, extended to<br />117 facilities without loss.</>,
    overallMetrics: vaccineImpactMetrics,
    overallImpactCopy: '6,685 vaccine vials were delivered to 117 public and private facilities across Lagos State, with zero vials damaged in transit.',
    ctaSlot: 'case-study.oxygen.cta',
    ctaLead: 'The Vaccine Distribution Project shows how Carter Biggs protects cold-chain integrity across large-scale health logistics.',
  },
  'sample-trips': {
    name: 'Sample Trips',
    heroTitle: <>Carter Biggs collaboration on NCDC<br className="case-studies__hero-title-break" />Sample Management</>,
    heroDescription: <>Nationwide, time-critical delivery of medical samples to testing<br className="case-studies__hero-copy-break" /> laboratories on behalf of the NCDC.</>,
    heroSlot: 'case-study.sample-trips.hero',
    clientName: 'Nigeria Centre for Disease Control',
    clientDescription: 'Carter Biggs manages the delivery of medical samples across Nigeria on behalf of the NCDC, transporting samples to testing laboratories nationwide.',
    start: 'Jan 2023',
    end: 'Present',
    endDescription: 'Ongoing',
    timelineDots: 7,
    challengeTitle: 'Time-critical logistics, nationwide',
    challengeCopy: 'Samples had to reach testing laboratories within 48 hours, across many states, with zero losses.',
    challenges: [
      { icon: 'deliveryTime', text: 'Samples needed to arrive at labs within a strict 48-hour window' },
      { icon: 'foldedMap', text: 'Coverage spanned 20 states with very different trip volumes' },
      { icon: 'solidCheckCircle', text: 'Reliability had to stay high month over month, with no casualties' },
      { icon: 'chart', text: 'Trip volumes grew substantially between 2023 and 2024' },
    ],
    deliveryTitle: 'Nationwide sample logistics',
    deliveryItems: sampleTripsDeliveryItems,
    milestones: [
      { date: 'Jan 2023', detail: 'Operations commence nationwide' },
      { date: '2024', detail: 'Trip volume nearly doubles' },
    ],
    achievementTitle: 'Reliability that keeps improving',
    achievementStats: sampleTripsAchievementStats,
    achievementImpact: '100% success rate in sample deliveries, with zero casualties recorded across the project.',
    monthlyTrips: [
      { month: 'Jan', year2024: 200, year2023: 86 },
      { month: 'Feb', year2024: 247, year2023: 111 },
      { month: 'Mar', year2024: 191, year2023: 98 },
      { month: 'Apr', year2024: 119, year2023: 66 },
      { month: 'May', year2024: 124, year2023: 60 },
      { month: 'Jun', year2024: 220, year2023: 57 },
      { month: 'Jul', year2024: 294, year2023: 106 },
      { month: 'Aug', year2024: 188, year2023: 154 },
      { month: 'Sep', year2024: 163, year2023: 113 },
      { month: 'Oct', year2024: 170, year2023: 164 },
    ],
    overallImpactTitle: <>A nationwide sample network that<br />keeps getting more reliable.</>,
    overallMetrics: [
      { icon: 'foldedMap', label: <>Nationwide<br />coverage</> },
      { icon: 'solidCheckCircle', label: <>Zero<br />casualties</> },
      { icon: 'chart', label: <>Improving<br />reliability</> },
    ],
    overallImpactCopy: 'Over 6,785 trips and 37,000+ samples transported nationwide, with a 99.9% on-time delivery rate and zero casualties recorded.',
    ctaSlot: 'case-study.oxygen.cta',
    ctaLead: 'The NCDC Sample Management Project shows how Carter Biggs runs time-critical health logistics reliably, at national scale.',
  },
  'surge-staff': {
    name: 'Surge Staff',
    heroTitle: <>Carter Biggs collaboration on Port<br className="case-studies__hero-title-break" />Health Surge Staff Management</>,
    heroDescription: <>Managing surge personnel and attendance across Nigeria’s<br className="case-studies__hero-copy-break" /> international airports.</>,
    heroSlot: 'case-study.surge-staff.hero',
    clientName: 'Port Health Services, Nigeria',
    clientDescription: 'Carter Biggs managed surge personnel deployed at Nigeria’s international airports for Port Health Services.',
    start: 'Apr 2022',
    end: 'Dec 2022',
    timelineDots: 7,
    challengeTitle: 'Right-sizing a nationwide workforce',
    challengeCopy: 'Surge staffing needed right-sizing across five airports, plus a way to curb absenteeism from duty.',
    challenges: [
      { icon: 'solidUsers', text: 'Surge personnel numbers needed assessment and right-sizing' },
      { icon: 'deliveryTime', text: 'Absenteeism from duty was a risk without digital tracking' },
      { icon: 'foldedMap', text: 'Coverage spanned five separate international airports nationwide' },
      { icon: 'check', text: 'Consistent attendance standards had to apply across all locations' },
    ],
    deliveryTitle: 'Nationwide surge staff management',
    deliveryItems: surgeStaffDeliveryItems,
    milestones: [
      { date: 'Apr 2022', detail: 'Project commences' },
      { date: 'Apr 2022', detail: 'Personnel assessment & right-sizing', above: true },
      { date: 'May 2022', detail: 'Digital attendance system launched' },
    ],
    achievementTitle: 'A right-sized, accountable workforce',
    achievementStats: surgeStaffAchievementStats,
    achievementImpact: 'A fully digitised attendance system was implemented across every airport to curb absenteeism.',
    facilityEyebrow: 'Facility usage breakdown',
    facilityHeading: 'Surge personnel deployed, by airport',
    facilityCounts: surgeStaffFacilityCounts,
    facilityBarHeights: surgeStaffFacilityBarHeights,
    facilityNames: surgeStaffFacilityNames,
    facilityCountUnit: 'personnel',
    facilityChartNote: 'MMIA = Lagos, NAIA = Abuja, PHIA = Port Harcourt, MAKIA = Kano, AIAA = Enugu.',
    overallImpactTitle: <>A digitised, accountable surge<br />workforce nationwide.</>,
    overallMetrics: [
      { icon: 'globe', label: <>5<br />airports</> },
      { icon: 'solidUsers', label: <>347<br />personnel</> },
      { icon: 'solidPhone', label: <>Digitised<br />accountability</> },
    ],
    overallImpactCopy: '347 surge personnel were supported across five international airports, with digital attendance tracking strengthening workforce accountability.',
    ctaSlot: 'case-study.oxygen.cta',
    ctaLead: 'The Surge Staff Management Project shows how Carter Biggs brings accountability to distributed public health workforces.',
  },
  biobank: {
    name: 'Biobank',
    heroTitle: <>Carter Biggs collaboration on Medical<br className="case-studies__hero-title-break" />Delivery for the Lagos Biobank</>,
    heroDescription: <>The logistics backbone of Lagos State’s COVID-19 testing<br className="case-studies__hero-copy-break" /> protocol, statewide.</>,
    heroSlot: 'case-study.biobank.hero',
    clientName: 'Lagos State Ministry of Health',
    clientDescription: 'Carter Biggs delivered COVID-19 test samples and aliquots between private laboratories, surge teams, and the Lagos State Biobank.',
    start: 'Jul 2020',
    end: 'Mar 2022',
    timelineDots: 7,
    challengeTitle: 'Sample logistics as testing backbone',
    challengeCopy: 'Sample and aliquot logistics had to run reliably across every local government and a whole consortium of private labs.',
    challenges: [
      { icon: 'truck', text: 'Samples needed collection from 57 LCDAs on behalf of LASG' },
      { icon: 'solidBuilding', text: 'A whole consortium of private laboratories needed coordinated logistics' },
      { icon: 'deliveryTime', text: 'Delivery speed directly affected the state’s COVID-19 testing turnaround' },
      { icon: 'chart', text: 'Volumes scaled into the hundreds of thousands over the project’s life' },
    ],
    deliveryTitle: 'Statewide sample logistics backbone',
    deliveryItems: [
      {
        title: 'LCDA sample collection',
        text: 'Collected COVID-19 samples from 57 LCDAs on behalf of LASG.',
        slot: 'case-study.biobank.lcda',
      },
      {
        title: 'Lab consortium logistics',
        text: 'Moved samples between private laboratories and the Biobank.',
        slot: 'case-study.biobank.consortium',
      },
      {
        title: 'Surge team transport',
        text: 'Transported surge teams statewide to collect patient samples.',
        slot: 'case-study.biobank.surge',
      },
      {
        title: 'Rapid turnaround',
        text: 'Delivered samples within an average of 2 hours of request.',
        slot: 'case-study.biobank.turnaround',
      },
    ],
    milestones: [
      { date: '26 May 2021', detail: 'Became the backbone of sample logistics' },
      { date: '1 Jul 2021', detail: '100,000+ samples delivered', above: true },
      { date: '15 Aug 2021', detail: 'Samples collected from 57 LCDAs' },
      { date: '15 Mar 2022', detail: '200,000+ samples delivered', above: true },
    ],
    achievementTitle: 'A statewide sample logistics network',
    achievementStats: [
      { icon: 'vial', value: '252,572', label: <>COVID-19 samples<br />collected &amp; delivered</> },
      { icon: 'solidDatabase', value: '444,015', label: <>Used aliquots returned<br />to the Biobank</> },
      { icon: 'deliveryTime', value: '2 hrs', label: <>Average delivery<br />turnaround</> },
    ],
    achievementImpact: 'All facilities in the private laboratory consortium were reached, across every local government in Lagos State.',
    projectTotals: [
      { metric: 'COVID-19 samples collected & delivered', value: '252,572' },
      { metric: 'Used aliquots returned to Lagos Biobank', value: '444,015' },
      { metric: 'Average delivery turnaround', value: '2 hours after request' },
      { metric: 'LCDAs covered', value: '27' },
      { metric: 'Facilities reached', value: 'All consortium facilities statewide' },
    ],
    overallImpactTitle: <>The logistics backbone behind<br />Lagos State&apos;s COVID-19 testing.</>,
    overallMetrics: [
      { icon: 'vial', label: <>250,000+<br />samples</> },
      { icon: 'globe', label: <>57<br />LCDAs</> },
      { icon: 'deliveryTime', label: <>2-hour<br />turnaround</> },
    ],
    overallImpactCopy: 'Over 250,000 samples and 444,000 used aliquots moved through the Biobank pipeline, with a consistent 2-hour average delivery turnaround.',
    ctaSlot: 'case-study.biobank.cta',
    ctaLead: 'The Lagos Biobank Sample Delivery Project shows how Carter Biggs builds the invisible logistics backbone behind public health testing.',
  },
  edutrace: {
    name: 'EduTrace',
    heroTitle: <>Carter Biggs collaboration with the<br className="case-studies__hero-title-break" /> Federal Ministry of Education</>,
    heroDescription: 'A national inventory management and asset tracking system for the education sector.',
    heroSlot: 'case-study.edutrace.hero',
    clientName: 'Federal Ministry of Education, Nigeria',
    clientDescription: 'The Ministry provides strategic leadership, policy direction, and oversight of Nigeria’s education sector across many layers of government.',
    stakeholders: [
      'Federal Ministry of Education',
      'State Ministries & Parastatals, UBEC',
      'SUBEBs & Local Government Education Authorities',
      'Schools & programme teams',
    ],
    challengeTitle: 'Visibility without a system',
    challengeCopy: 'No single, reliable view connected federal, state, local government, programme, and school-level stakeholders.',
    challengeVariant: 'edutrace',
    challenges: [
      { icon: 'solidArchive', text: 'Fragmented, largely manual inventory management processes' },
      { icon: 'pin', text: 'Limited tracking of asset location, condition, and movement' },
      { icon: 'deliveryTime', text: 'Little real-time data for monitoring, evaluation, and audit' },
      { icon: 'solidBuilding', text: 'Weak accountability across multiple levels of government' },
      { icon: 'network', text: 'Users across many locations needed capacity to run a national system' },
    ],
    deliveryTitle: 'Digital education asset management, end to end',
    deliveryItems: [
      {
        title: 'Digital asset registration',
        text: 'Tablets, laptops, TLMs, ICT and classroom equipment, furniture and other assets, registered and managed through their full lifecycle.',
        slot: 'case-study.edutrace.registration',
      },
      {
        title: 'QR code identification',
        text: 'Individual assets uniquely tagged and linked to their digital record, supporting verification, inventory, and audit.',
        slot: 'case-study.edutrace.qr',
      },
      {
        title: 'GPS and geolocation',
        text: 'Assets associated with their real-world location, enabling visibility of distribution across the education system.',
        slot: 'case-study.edutrace.geolocation',
      },
      {
        title: 'Real-time dashboards',
        text: 'Executive dashboards deliver analytics and reporting on distribution, utilisation, condition, and movement.',
        slot: 'case-study.edutrace.dashboard',
      },
    ],
    governanceTitle: 'Built for every level of government',
    governanceCopy: 'Role-based access and dedicated portals let each stakeholder group act on its responsibilities, while the Ministry keeps one coordinated, national view.',
    governanceStakeholders: [
      'Federal Ministry of Education',
      'State Ministries & Parastatals, UBEC',
      'SUBEBs & LGEAs',
      'Schools & programme teams',
    ],
    implementationTitle: 'Implementation approach',
    implementationSubtitle: 'Seven phases, one national rollout.',
    implementationPhases: [
      { date: '01', detail: 'Platform design & development' },
      { date: '02', detail: 'Technical deployment', above: true },
      { date: '03', detail: 'Asset onboarding' },
      { date: '04', detail: 'Tagging & tracking', above: true },
      { date: '05', detail: 'Training & capacity building' },
      { date: '06', detail: 'Documentation & SOPs', above: true },
      { date: '07', detail: 'Post-deployment support' },
    ],
    implementationSummary: 'An end-to-end approach: technology deployment, asset onboarding, stakeholder engagement, training, documentation, and ongoing support.',
    outcomesTitle: 'What changed for the Ministry',
    outcomes: [
      { area: 'Asset management', outcome: 'Digitalised registration and lifecycle management' },
      { area: 'Identification', outcome: 'QR code-enabled tagging of individual assets' },
      { area: 'Location visibility', outcome: 'GPS and geolocation-enabled monitoring' },
      { area: 'Monitoring', outcome: 'Clearer view of distribution, condition, and movement' },
      { area: 'Reporting', outcome: 'Real-time dashboards and analytics' },
      { area: 'Governance', outcome: 'Multi-tier portals with role-based access' },
      { area: 'Capacity Building', outcome: 'Nationwide training and onboarding' },
    ],
    overallImpactTitle: <>A scalable digital foundation for national<br />education asset accountability.</>,
    overallMetrics: [
      { icon: 'check', label: <>Stronger<br />transparency</> },
      { icon: 'users', label: <>Stronger<br />accountability</> },
      { icon: 'solidBuilding', label: <>National asset<br />visibility</> },
    ],
    overallImpactCopy: 'EduTrace turned asset management from a manual inventory task into a complete, transparent, technology-enabled lifecycle process.',
    impactVariant: 'edutrace',
    ctaSlot: 'case-study.biobank.cta',
    ctaLead: 'EduTrace shows what’s possible when technology, governance design, and field-level training come together at national scale.',
  },
  carepacks: {
    name: 'CarePacks',
    heroTitle: <>Carter Biggs collaboration with the Lagos State COVID-19 Carepack Distribution Project</>,
    heroDescription: <>Delivering LASG COVID-19 care packs to patients across all 20 local governments in Lagos State.</>,
    heroSlot: 'case-study.carepacks.hero',
    clientName: 'Lagos State Government',
    clientDescription: 'Carter Biggs delivered LASG COVID-19 care packs across Lagos State to patients with mild or moderate symptoms, as directed by LASG EkoTelemed.',
    start: 'Nov 2020',
    end: 'May 2022',
    timelineDots: 7,
    challengeTitle: 'Reaching every local government, fast',
    challengeCopy: 'Care packs had to reach patients with mild or moderate symptoms across all 20 local governments, at very different demand levels.',
    challenges: [
      { icon: 'chart', text: 'Uneven demand across local governments, from under 1,000 to 6,000 packs' },
      { icon: 'solidUsers', text: 'Coordination required with pharmaceutical partners and LASG EkoTelemed' },
      { icon: 'solidMedicalBag', text: 'Two central warehouses in Lekki and Ikeja needed to serve the entire state' },
      { icon: 'deliveryTime', text: 'Delivery had to stay fast and reliable as case numbers changed' },
    ],
    deliveryTitle: 'Statewide care-pack logistics, end to end',
    deliveryItems: [
      {
        title: 'Warehouse receipt',
        text: 'Received and managed 50,700 care packs across Lekki and Ikeja warehouses.',
        slot: 'case-study.carepacks.warehouse',
      },
      {
        title: 'Statewide distribution',
        text: 'Delivered care packs to patients across all 20 local governments.',
        slot: 'case-study.carepacks.distribution',
      },
      {
        title: 'Partner coordination',
        text: 'Coordinated evacuation and handling with pharmaceutical partners.',
        slot: 'case-study.carepacks.partner',
      },
      {
        title: 'Demand-based routing',
        text: 'Prioritised delivery routes based on real-time local government demand.',
        slot: 'case-study.carepacks.routing',
      },
    ],
    milestones: [
      { date: '5 Oct 2020', detail: '50,700 packs received at Lekki & Ikeja' },
      { date: '1 Nov 2020', detail: 'Distribution begins statewide', above: true },
      { date: '15 Mar 2021', detail: '18,000 patients reached' },
      { date: '7 May 2022', detail: '34,000 patients reached', above: true },
      { date: '26 May 2022', detail: 'Warehouse evacuation by partners' },
      { date: '29 May 2022', detail: 'Project closed by LASG', above: true },
    ],
    achievementTitle: 'Statewide reach, on time',
    achievementStats: [
      { icon: 'solidArchive', value: '34,000', label: <>Care packs<br />delivered</> },
      { icon: 'globe', value: '20', label: <>Local governments<br />reached</> },
      { icon: 'deliveryTime', value: '24 hrs', label: <>Average delivery<br />time</> },
    ],
    achievementImpact: 'Eti-Osa received the most care packs (6,000); Ajeromi-Ifelodun received the fewest (950).',
    facilityEyebrow: 'Facility usage breakdown',
    facilityHeading: 'Care packs delivered, by local government',
    facilityCounts: [6000, 2800, 3000, 2500, 2500, 2000, 2000, 2000],
    facilityBarHeights: [100, 47, 50, 42, 42, 33, 33, 33],
    facilityNames: ['ETI-OSA', 'MUSHIN', 'ALIMOSHO', 'OSHODI ISOLO', 'SOMOLU', 'SURULERE', 'KOSOFE', 'AGEGE'],
    overallImpactTitle: <>Statewide COVID-19 relief, delivered<br />reliably to every local government.</>,
    overallMetrics: [
      { icon: 'globe', label: <>Statewide<br />coverage</> },
      { icon: 'deliveryTime', label: <>Fast<br />turnaround</> },
      { icon: 'truck', label: <>Reliable<br />delivery</> },
    ],
    overallImpactCopy: '34,000 care packs reached patients across all 20 local governments in Lagos State, from first delivery through to project close in May 2022.',
    ctaSlot: 'case-study.biobank.cta',
    ctaLead: 'The Carepack Distribution Project shows how Carter Biggs turns statewide health logistics into fast, reliable, last-mile delivery.',
  },
  'cash-collect': {
    name: 'Inbound Passenger Testing',
    heroTitle: <>Carter Biggs collaboration on Inbound Passenger Testing: Registration, Payments and Data Management.</>,
    heroDescription: <>Nationwide PCR test payment collection across Nigeria’s international airports.</>,
    heroSlot: 'case-study.cash-collect.hero',
    clientName: 'Nigeria’s International Airports',
    clientDescription: 'Carter Biggs established PCR test payment collection operations across Nigeria’s international airports, supporting out-of-state passengers.',
    start: 'Sep 2020',
    end: 'Dec 2022',
    timelineDots: 7,
    challengeTitle: 'A payment system for a moving target',
    challengeCopy: 'Airports, prices, and travel protocols kept changing — the collection system had to keep pace nationwide.',
    challenges: [
      { icon: 'globe', text: 'Needed operations across multiple international airports simultaneously' },
      { icon: 'solidArchive', text: 'Pricing and protocols changed repeatedly as policy evolved' },
      { icon: 'solidUsers', text: 'Required coordination across federal, state, and private stakeholders' },
      { icon: 'deliveryTime', text: 'Some airport operations had to be added or closed on short notice' },
    ],
    deliveryTitle: 'Nationwide payment operations, coordinated',
    deliveryItems: [
      {
        title: 'Multi-airport rollout',
        text: 'Established operations at every major international airport in Nigeria.',
        slot: 'case-study.cash-collect.airports',
      },
      {
        title: 'Stakeholder partnership',
        text: 'Partnered with federal, state, and private-sector stakeholders.',
        slot: 'case-study.cash-collect.partners',
      },
      {
        title: 'Pricing administration',
        text: 'Managed price reviews as PCR test costs changed over time.',
        slot: 'case-study.cash-collect.pricing',
      },
      {
        title: 'Protocol adaptation',
        text: 'Adjusted operations as travel and vaccination protocols evolved.',
        slot: 'case-study.cash-collect.protocol',
      },
    ],
    milestones: [
      { date: 'Sep 2020', detail: 'Operations begin at Lagos (MMIA)' },
      { date: 'Sep 2021', detail: 'Nigeria Travel Portal partnership', above: true },
      { date: 'Nov 2021', detail: 'Abuja airport operations begin' },
      { date: 'Dec 2021', detail: 'Port Harcourt, Kano & Enugu operations begin', above: true },
      { date: 'Jan 2022', detail: 'PCR price reviewed downward' },
      { date: 'Dec 2022', detail: 'Project closes nationwide', above: true },
    ],
    achievementTitle: 'Payments processed, at scale',
    achievementStats: [
      { icon: 'solidArchive', value: '25,344', label: <>PCR test payments<br />processed</> },
      { icon: 'solidBuilding', value: 'All', label: <>International airports<br />reached nationwide</> },
    ],
    achievementImpact: 'Payments were collected across Nigeria’s international airports as travel protocols and pricing changed.',
    yearlyPayments: [
      { year: '2020', value: 6221 },
      { year: '2021', value: 10671 },
      { year: '2022', value: 8392 },
    ],
    overallImpactTitle: <>A nationwide payment system,<br />built for a fast-changing environment.</>,
    overallMetrics: [
      { icon: 'globe', label: <>Nationwide<br />reach</> },
      { icon: 'users', label: <>Multi-<br />stakeholder</> },
      { icon: 'gear', label: <>Adaptive<br />operations</> },
    ],
    overallImpactCopy: 'Carter Biggs kept PCR payment collection running smoothly across Nigeria’s international airports, adapting to new sites, prices, and protocols throughout.',
    ctaSlot: 'case-study.biobank.cta',
    ctaLead: 'The Cash Payment Collection Project shows how Carter Biggs keeps complex, fast-changing payment operations running at national scale.',
  },
};

export default function CaseStudies() {
  const root = useRef(null);
  const { slug = 'oxygen' } = useParams();
  const page = caseStudyPages[slug] || caseStudyPages.oxygen;
  const maxYearlyPayment = page.yearlyPayments
    ? Math.max(...page.yearlyPayments.map(({ value }) => value))
    : 1;
  usePageMotion(root);

  return (
    <div className="case-studies" ref={root}>
      <section className="hero hero--split case-studies__hero" data-theme="dark">
        <div className="container hero__grid">
          <div className="hero__content">
            <Eyebrow>Case study</Eyebrow>
            <h1 className="h1 h1--sm" data-split="words">{page.name}</h1>
            <h2 className="case-studies__hero-title">{page.heroTitle}</h2>
            <p className="case-studies__hero-copy" data-split="lines">{page.heroDescription}</p>
          </div>
          <Media
            slot={page.heroSlot}
            className="hero__media case-studies__hero-media"
            delay={0.25}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="case-studies__timeline" data-theme="light" aria-label="Programme timeline">
        <div className="container case-studies__timeline-inner">
          <div className="case-studies__client">
            <Eyebrow>The client</Eyebrow>
            <h2>{page.clientName || 'Lagos State Primary Health Care Board'}</h2>
            <p>{page.clientDescription}</p>
          </div>
          {page.stakeholders ? (
            <ol className="case-studies__stakeholder-flow" aria-label="EduTrace stakeholder network">
              {page.stakeholders.map((stakeholder) => <li key={stakeholder}>{stakeholder}</li>)}
            </ol>
          ) : (
            <>
              <div className="case-studies__timeline-track" aria-hidden="true">
                {Array.from({ length: page.timelineDots }, (_, index) => <span key={index} />)}
              </div>
              <div className="case-studies__timeline-dates">
                <div><strong>{page.start}</strong><span>Project start period</span></div>
                <div><strong>{page.end}</strong><span>{page.endDescription || 'Project end period'}</span></div>
              </div>
            </>
          )}
        </div>
      </section>

      <section className={`section case-studies__challenge${page.challengeVariant ? ` case-studies__challenge--${page.challengeVariant}` : ''}`} data-theme="sky">
        <div className="container">
          <div className="case-studies__challenge-intro">
            <Eyebrow className="eyebrow--on-color">The challenge</Eyebrow>
            <h2 className="h2" data-split="words">{page.challengeTitle}</h2>
            <p className="case-studies__challenge-copy">{page.challengeCopy}</p>
          </div>
          <ul className={`case-studies__challenge-grid${page.challengeVariant ? ` case-studies__challenge-grid--${page.challengeVariant}` : ''}`}>
            {page.challenges.map((challenge) => (
              <li key={challenge.text}>
                <Icon name={challenge.icon} className="case-studies__challenge-icon" />
                <p>{challenge.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {page.deliveryItems && <>
      <section className="case-studies__delivery" data-theme="light">
        <div className="container case-studies__delivery-inner">
          <div className="case-studies__delivery-head">
            <Eyebrow>What Carter Biggs provided</Eyebrow>
            <h2>{page.deliveryTitle || 'Oxygen supply and plant management'}</h2>
          </div>
          <div className="case-studies__delivery-grid">
            {(page.deliveryItems || deliveryItems).map((item) => (
              <article className="case-studies__delivery-card" key={item.title}>
                {item.slot ? (
                  <Media slot={item.slot} className="case-studies__delivery-image" />
                ) : (
                  <div className="case-studies__delivery-image case-studies__delivery-image--placeholder" aria-hidden="true" />
                )}
                <div className="case-studies__delivery-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      </>}

      {page.governanceStakeholders && <section className="case-studies__governance" data-theme="dark">
        <div className="container case-studies__governance-inner">
          <div className="case-studies__governance-head">
            <Eyebrow>{page.governanceEyebrow || 'Multi-tier governance'}</Eyebrow>
            <h2>{page.governanceTitle}</h2>
            <p>{page.governanceCopy}</p>
          </div>
          <ol className="case-studies__governance-flow" aria-label="EduTrace governance levels">
            {page.governanceStakeholders.map((stakeholder) => <li key={stakeholder}>{stakeholder}</li>)}
          </ol>
        </div>
      </section>}

      {page.implementationPhases && <section className="case-studies__implementation" data-theme="dark">
        <div className="container case-studies__implementation-inner">
          <div className="case-studies__implementation-head">
            <h2>{page.implementationTitle}</h2>
            <p>{page.implementationSubtitle}</p>
          </div>
          <ol className="case-studies__milestone-track case-studies__implementation-track" style={{ '--milestone-count': page.implementationPhases.length }}>
            {page.implementationPhases.map((phase) => (
              <li className={phase.above ? 'case-studies__milestone case-studies__milestone--above' : 'case-studies__milestone'} key={phase.date}>
                <div className="case-studies__milestone-copy">
                  <strong>{phase.date}</strong>
                  <span>{phase.detail}</span>
                </div>
                <span className="case-studies__milestone-dot" aria-hidden="true" />
              </li>
            ))}
          </ol>
          <p className="case-studies__implementation-summary">{page.implementationSummary}</p>
        </div>
      </section>}

      {page.outcomes && <section className={`case-studies__outcomes${page.impactVariant ? ` case-studies__outcomes--${page.impactVariant}` : ''}`} data-theme="light">
        <div className="container case-studies__outcomes-inner">
          <div className="case-studies__outcomes-head">
            <Eyebrow>Results &amp; outcomes</Eyebrow>
            <h2>{page.outcomesTitle}</h2>
          </div>
          <table className="case-studies__outcomes-table">
            <thead>
              <tr><th scope="col">Area</th><th scope="col">Outcome</th></tr>
            </thead>
            <tbody>
              {page.outcomes.map((row) => (
                <tr key={row.area}><th scope="row">{row.area}</th><td>{row.outcome}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>}

      {page.milestones && <>
      <section className="section case-studies__milestones" data-theme="dark">
        <div className="container">
          <div className="section__head case-studies__milestones-head">
            <Eyebrow>Key milestones</Eyebrow>
            <p>How the project unfolded</p>
          </div>
          <ol className="case-studies__milestone-track" style={{ '--milestone-count': page.milestones.length }}>
            {page.milestones.map((milestone) => (
              <li className={milestone.above ? 'case-studies__milestone case-studies__milestone--above' : 'case-studies__milestone'} key={milestone.date}>
                <div className="case-studies__milestone-copy">
                  <strong>{milestone.date}</strong>
                  <span>{milestone.detail}</span>
                </div>
                <span className="case-studies__milestone-dot" aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>
      </section>
      </>}

      {page.achievementStats && <>
      <section className="section case-studies__impact" data-theme="light">
        <div className="container case-studies__achievements-inner">
          <div className="case-studies__achievements-head">
            <Eyebrow>Key achievements</Eyebrow>
            <h2>{page.achievementTitle}</h2>
          </div>
          <div className={`case-studies__achievement-stats${page.achievementStats.length === 2 ? ' case-studies__achievement-stats--two' : ''}`}>
            {page.achievementStats.map((stat) => (
              <div className="case-studies__achievement-stat" key={stat.value}>
                <Icon name={stat.icon} aria-hidden="true" />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="case-studies__impact-label">
            <Icon name="chart" aria-hidden="true" />
            <h3>Achievements &amp; impact</h3>
            <p>{page.achievementImpact}</p>
          </div>
        </div>
      </section>
      </>}

      {page.projectTotals && <>
      <section className="case-studies__project-totals" data-theme="sky" aria-labelledby="project-totals-title">
        <div className="container case-studies__project-totals-inner">
          <div className="case-studies__project-totals-head">
            <Eyebrow className="eyebrow--on-color">Project totals</Eyebrow>
            <h2 id="project-totals-title">What moved through the Biobank pipeline</h2>
          </div>
          <table className="case-studies__project-totals-table">
            <thead>
              <tr><th scope="col">Metric</th><th scope="col">Value</th></tr>
            </thead>
            <tbody>
              {page.projectTotals.map((row) => (
                <tr key={row.metric}><th scope="row">{row.metric}</th><td>{row.value}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      </>}

      {page.yearlyPayments && <>
      <section className="case-studies__facilities case-studies__yearly-payments" data-theme="sky" aria-labelledby="yearly-payments-title">
        <div className="container case-studies__facilities-inner">
          <div className="case-studies__facilities-head">
            <Eyebrow className="eyebrow--on-color">Yearly breakdown</Eyebrow>
            <h2 id="yearly-payments-title">Payments processed, by year</h2>
          </div>
          <div className="case-studies__yearly-chart" role="list" aria-label="PCR payments processed by year">
            {page.yearlyPayments.map(({ year, value }) => (
              <div className="case-studies__yearly-column" role="listitem" key={year}>
                <strong>{value.toLocaleString()}</strong>
                <span className="case-studies__yearly-bar" style={{ '--bar-height': `${(value / maxYearlyPayment) * 82}%` }} />
                <span>{year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </>}

      {page.monthlyTrips && <>
      <section className="case-studies__facilities case-studies__monthly-trips" data-theme="sky" aria-labelledby="monthly-trips-title">
        <div className="container case-studies__facilities-inner">
          <div className="case-studies__facilities-head">
            <Eyebrow className="eyebrow--on-color">Monthly trip volume</Eyebrow>
            <h2 id="monthly-trips-title">Monthly trip volume</h2>
            <div className="case-studies__monthly-legend" aria-label="Chart legend">
              <span><i className="case-studies__monthly-swatch case-studies__monthly-swatch--2024" />2024</span>
              <span><i className="case-studies__monthly-swatch case-studies__monthly-swatch--2023" />2023</span>
            </div>
          </div>
          <div className="case-studies__monthly-chart-scroll">
            <div className="case-studies__monthly-chart" role="list" aria-label="Monthly trip volume in 2024 and 2023">
              {page.monthlyTrips.map(({ month, year2024, year2023 }) => (
                <div className="case-studies__monthly-group" role="listitem" key={month}>
                  <div className="case-studies__monthly-bars">
                    <div className="case-studies__monthly-bar-wrap">
                      <strong>{year2024}</strong>
                      <span className="case-studies__monthly-bar case-studies__monthly-bar--2024" style={{ '--bar-height': `${(year2024 / 294) * 85}%` }} />
                    </div>
                    <div className="case-studies__monthly-bar-wrap">
                      <strong>{year2023}</strong>
                      <span className="case-studies__monthly-bar case-studies__monthly-bar--2023" style={{ '--bar-height': `${(year2023 / 294) * 85}%` }} />
                    </div>
                  </div>
                  <span className="case-studies__monthly-month">{month}</span>
                </div>
              ))}
            </div>
          </div>
          {page.monthlyTripsNote && (
            <p className="case-studies__monthly-note"><span aria-hidden="true">i</span>{page.monthlyTripsNote}</p>
          )}
        </div>
      </section>
      </>}

      {(page.facilityCounts || page.facilityChartNote) && <>
      <section className="case-studies__facilities" data-theme="sky" aria-labelledby="facility-chart-title">
        <div className="container case-studies__facilities-inner">
          <div className="case-studies__facilities-head">
            <Eyebrow className="eyebrow--on-color">{page.facilityEyebrow || 'Facilities supplied'}</Eyebrow>
            <h2 id="facility-chart-title">{page.facilityHeading}</h2>
          </div>
          <div
            className="case-studies__facility-chart"
            style={{ '--facility-chart-columns': page.facilityCounts?.length || 7 }}
            role={page.facilityCounts ? 'list' : undefined}
            aria-label={page.facilityCounts ? `${page.facilityHeading} chart` : undefined}
          >
            {page.facilityCounts?.map((count, index) => (
              <div className="case-studies__facility-column" role="listitem" key={`${count}-${index}`} aria-label={`${count} ${page.facilityCountUnit || 'items'}`}>
                <strong>{count}</strong>
                <span className="case-studies__facility-bar" style={{ '--bar-height': `${page.facilityBarHeights[index]}%` }} />
                <span className="case-studies__facility-name">{page.facilityNames[index]}</span>
              </div>
            ))}
            {page.facilityChartNote && <p className="case-studies__facility-chart-note">{page.facilityChartNote}</p>}
          </div>
        </div>
      </section>
      </>}

      {page.overallMetrics && <>
        <section className={`case-studies__overall-impact${page.impactVariant ? ` case-studies__overall-impact--${page.impactVariant}` : ''}`} data-theme="light">
        <div className="container case-studies__overall-impact-inner">
          <div className="case-studies__overall-impact-head">
            <Eyebrow>Overall impact</Eyebrow>
            <h2>{page.overallImpactTitle}</h2>
          </div>
          <ul className="case-studies__impact-metrics">
            {page.overallMetrics.map((metric) => (
              <li key={metric.icon}>
                <Icon name={metric.icon} />
                <span>{metric.label}</span>
              </li>
            ))}
          </ul>
          <div className="case-studies__overall-impact-rule" />
          <p className="case-studies__overall-impact-copy">{page.overallImpactCopy}</p>
        </div>
      </section>
      </>}

      {page.ctaSlot && <>
      <section className="section section--tight case-studies__cta" data-theme="sky">
        <div className="container case-studies__cta-inner">
          <Media
            slot={page.ctaSlot}
            className="case-studies__cta-image"
          />
          <div className="case-studies__cta-copy">
            <h2>Partner with Carter Biggs</h2>
            <p className="case-studies__cta-lead">{page.ctaLead}</p>
            <p>
              Carter Biggs Investment Limited: healthcare logistics, supply chain, and strategic investment expertise
              for organisations across West Africa.
            </p>
            <Button to="/contact" variant="navy">Let&apos;s discuss your next project</Button>
          </div>
        </div>
      </section>
      </>}
    </div>
  );
}
