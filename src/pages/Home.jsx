import { useRef } from 'react';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Marquee from '../components/Marquee';
import Media from '../components/Media';
import { Eyebrow } from '../components/sections';
import Showcase from '../components/Showcase';
import { usePageMotion } from '../motion/usePageMotion';

const headlineStats = [
  { slot: 'home.stat.specimen', value: 180000, suffix: '+', label: 'Specimen transported' },
  { slot: 'home.stat.carepacks', value: 15600, label: 'Covid-19 Care packs Delivered' },
  { slot: 'home.stat.oxygen', value: 48000, suffix: '+', label: 'Oxygen supplied' },
  { slot: 'home.stat.people', value: 100000, suffix: '+', label: 'People Reached' },
];

const reachStats = [
  { icon: 'pin', value: 3, suffix: ' States', label: 'connected through BESDA AF-TESS' },
  { icon: 'database', value: 60000, suffix: '+', label: 'Digital assets monitored through Track & Trace' },
  { icon: 'heartPulse', value: 1, label: 'National e-Purchase Platform for Healthcare Commodities' },
  { icon: 'folder', value: 1, label: 'Digital ecosystem connecting healthcare supply chain stakeholders' },
];

const quality = [
  'One partner, end to end',
  'Technology built on real operations',
  'Healthcare roots, high standards',
  'Visibility and accountability',
  'Integrity at the center',
];

const solutions = [
  {
    slot: 'home.solution.logistics',
    title: 'Healthcare Logistics',
    lead: 'Lagos first correspondent for the COVID-19 pandemic',
    text: 'Medical supply chains, healthcare infrastructure.',
    cta: { label: 'Explore Logistics Solutions', to: '/solutions#medical-logistics' },
  },
  {
    slot: 'home.solution.education',
    title: 'Education',
    lead: 'EduTrace (Federal Ministry of Education)',
    text: 'Digital solutions and technology-enabled programmes.',
    cta: { label: 'Explore Technology Solutions', to: '/solutions#technology-solutions' },
  },
  {
    slot: 'home.solution.infrastructure',
    title: 'Healthcare Infrastructure',
    lead: 'Medipool — Nigeria’s first medical Group Purchasing Organization',
    text: 'Medical supply chains, healthcare infrastructure.',
    cta: { label: 'Explore Healthcare Solutions', to: '/solutions#medical-logistics' },
  },
];

const format = new Intl.NumberFormat('en-US');
const statText = ({ value, prefix = '', suffix = '' }) => `${prefix}${format.format(value)}${suffix}`;

function Count({ stat, className }) {
  return (
    <span className={className} data-count={stat.value} data-prefix={stat.prefix} data-suffix={stat.suffix}>
      {statText(stat)}
    </span>
  );
}

export default function Home() {
  const root = useRef(null);
  usePageMotion(root);

  return (
    <div className="home page--condensed" ref={root}>
      <section className="hero hero--full" data-theme="dark">
        <div className="hero__bg" data-anim="hero-bg">
          <Media slot="home.hero" reveal={false} className="media--flat" loading="eager" fetchPriority="high" />
        </div>
        <div className="hero__top-shade" aria-hidden="true" />
        <div className="hero__shade" />
        <div className="container hero__content hero__content--center">
          <h1 className="h1" data-split="words">
            Making complex systems work
          </h1>
          <p className="lead" data-split="lines" data-delay="0.35">
            From medical logistics to technology and project management, Carter Biggs helps organisations turn complex
            requirements into solutions that work.
          </p>
          <div className="hero__actions" data-anim="fade" data-delay="0.7">
            <Button href="#solutions" variant="light">
              Explore our capabilities
            </Button>
            <Button to="/contact" variant="ghost">
              Get in touch
            </Button>
          </div>
        </div>
      </section>

      <section className="section" data-theme="light">
        <div className="container split">
          <Media slot="home.who" className="split__media media--tall" />
          <div className="split__body">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="h2" data-split="words">
              Complex systems rarely have simple challenges.
            </h2>
            <p className="copy" data-split="lines">
              Carter Biggs is a Lagos-based solutions company that helps organizations run their operations better.
              We began in medical logistics, moving critical healthcare supplies where they are needed, and have grown
              into a multi-disciplinary partner across four areas: logistics, technology, project management, and
              advisory and consulting.
            </p>
            <p className="copy" data-anim="fade">
              What connects these services is a simple conviction: operations improve when practical experience is
              combined with the right technology. We build the systems, manage the projects, advise on the strategy
              and run the logistics, so our clients work with one accountable partner rather than several.
            </p>
          </div>
        </div>
      </section>

      <section className="section" data-theme="sky">
        <div className="container">
          <div className="section__head home__insights-head">
            <Eyebrow className="eyebrow--on-color">Insights</Eyebrow>
            <h2 className="h2" data-split="words">
              <span className="insights__line">Providing for the</span>
              <span className="insights__line">community and the nation at large</span>
            </h2>
          </div>

          <ul className="tiles tiles--4">
            {headlineStats.map((stat, index) => (
              <li key={stat.label}>
                <Media slot={stat.slot} className="tile" delay={index * 0.35}>
                  <div className="tile__body">
                    <Count stat={stat} className="tile__value" />
                    <span className="tile__label">{stat.label}</span>
                  </div>
                </Media>
              </li>
            ))}
          </ul>

          <ul className="reach" data-anim="stagger">
            {reachStats.map((stat) => (
              <li className="reach__item" key={stat.label}>
                <Icon name={stat.icon} className="reach__icon" />
                <Count stat={stat} className="reach__value" />
                <span className="reach__label">{stat.label}</span>
                <span className="reach__rule" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section home__why-section" data-theme="light">
        <div className="container">
          <Media slot="home.why" className="media--wide" />
          <div className="why">
            <Eyebrow>Why Carter Biggs</Eyebrow>
            <div className="why__intro">
              <h2 className="h2" data-split="words">
                Complex challenges need a partner who connects the pieces.
              </h2>
              <div className="why__copy">
                <p className="copy" data-split="lines">
                  Real operational problems cut across logistics, technology, projects and strategy. We bring technical
                  capability together with on-the-ground execution, so we don’t just design solutions; we help
                  organizations implement them, manage the delivery, and make them work.
                </p>
              </div>
            </div>
            <ul className="bullets" data-anim="stagger">
              {quality.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--flush-bottom home__solutions-section" id="solutions" data-theme="light">
        <div className="container section__head section__head--center">
          <span className="rule" data-anim="line" />
          <h2 className="h2" data-split="words">
            Solutions built around real-world needs
          </h2>
        </div>
        <Showcase items={solutions} />
      </section>

      <section className="section section--tight home__partners-section" data-theme="light">
        <div className="container partners">
          <div className="partners__intro">
            <h2 className="h3" data-split="words">
              Our Partners
            </h2>
          </div>
          <Marquee className="partners__marquee" />
        </div>
      </section>
    </div>
  );
}
