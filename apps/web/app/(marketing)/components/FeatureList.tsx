import { Reveal } from './Reveal';

export function FeatureList() {
  return (
    <div className="inner section-block">
      <Reveal index={0}>
        <div className="section-heading">
          <div className="kicker">Why hunkAI</div>
          <h2>Built for the failure modes that plain diffs and chatbots miss.</h2>
          <p>A focused review layer for teams that need precise findings, clear confidence, and less noise around every pull request.</p>
        </div>
      </Reveal>
      <div className="feat-list">
        <Reveal index={1}><div className="feat card-surface"><div className="num">01</div><h3>Structural diff pass</h3><p>AST-aware analysis separates real logic changes from formatting noise before anything gets scored.</p></div></Reveal>
        <Reveal index={2}><div className="feat card-surface"><div className="num">02</div><h3>Calibrated rubric</h3><p>Each finding cites a concrete signal instead of a vague vibe score, so reviewers can trust the output.</p></div></Reveal>
        <Reveal index={3}><div className="feat card-surface"><div className="num">03</div><h3>Inline, in GitHub</h3><p>Comments land on the exact line through the Reviews API, with no extra tool for the team to babysit.</p></div></Reveal>
      </div>
    </div>
  );
}
