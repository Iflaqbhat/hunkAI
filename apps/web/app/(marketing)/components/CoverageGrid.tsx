import type { CSSProperties } from 'react';
import { Reveal } from './Reveal';

const riskCards = [
  {
    id: '01',
    className: 'correctness',
    title: 'Correctness risk',
    score: '0.87',
    summary: 'Dependency changes, guard removals, stale memoization, and behavior shifts that can pass a quick diff skim.',
    details: ['Missing dependencies', 'Null guard regressions', 'Changed call contracts']
  },
  {
    id: '02',
    className: 'security',
    title: 'Security smells',
    score: '0.78',
    summary: 'Loosened checks, untrusted inputs, allowlist bypasses, and secrets or debug surfaces introduced in the patch.',
    details: ['Unsanitized request data', 'Bypassed authorization', 'Leaked runtime state']
  },
  {
    id: '03',
    className: 'ai-signal',
    title: 'AI-authorship signal',
    score: '0.71',
    summary: 'Plausible-looking generated code that leaves placeholders, debug artifacts, or inconsistent branches behind.',
    details: ['Debug leftovers', 'Placeholder branches', 'Inconsistent naming']
  },
  {
    id: '04',
    className: 'coverage',
    title: 'Test coverage delta',
    score: '0.64',
    summary: 'Logic-heavy changes without matching tests, ranked against how risky the edited area looks.',
    details: ['No nearby test delta', 'Risk-weighted coverage gaps', 'Regression-prone paths']
  }
];

export function CoverageGrid() {
  return (
    <div className="inner section-block coverage-block" id="eval">
      <Reveal index={0}>
        <div className="section-heading section-heading-wide">
          <div className="kicker">What it catches</div>
          <h2>Coverage that maps to the actual classes of review failure.</h2>
          <p>Four clear risk lanes, each separated and weighted so reviewers can see what changed and why it matters.</p>
        </div>
      </Reveal>
      <div className="coverage-layout">
        <div className="stacked-risk-cards" aria-label="Risk categories">
          {riskCards.map((card, index) => (
            <Reveal
              className="risk-stack-item"
              index={index + 2}
              key={card.id}
              style={{ ['--stack-index' as string]: index } as CSSProperties}
            >
              <article className={`risk-stack-card ${card.className}`}>
                <div className="risk-card-top">
                  <span className="tag">{card.id}</span>
                  <span className="risk-score">{card.score}</span>
                </div>
                <h4>{card.title}</h4>
                <p>{card.summary}</p>
                <ul>
                  {card.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
