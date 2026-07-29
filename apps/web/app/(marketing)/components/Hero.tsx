import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section className="hero-shell">
      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal index={0}><div className="eyebrow"><span className="d" />Early access PR reviews</div></Reveal>
          <Reveal index={1}><h1>Review PRs before they <em>ship.</em></h1></Reveal>
          <Reveal index={2}><p className="sub">hunkAI reads pull requests the way a senior reviewer would. It spots logic regressions, security smells, missing tests, and AI-generated code that looks plausible but breaks under load.</p></Reveal>
        </div>

        <Reveal index={3} className="hero-visual-wrap">
          <div className="hero-device">
            <img src="/images/hunkai-hero-review.png" alt="hunkAI review dashboard preview" />
            <div className="hero-command-card">
              <span className="prompt">/pr</span>
              <strong>review prod-ui#482</strong>
              <button type="button">Review</button>
            </div>
            <div className="hero-command-chips">
              <span>GitHub App comments</span>
              <span>AST-aware filtering</span>
              <span>Eval report attached</span>
            </div>
          </div>
        </Reveal>

        <Reveal index={4} className="hero-integrations-wrap">
          <div className="hero-integrations-label">hunkAI review signal</div>
          <div className="hero-integrations">
            <span>72 risk score</span>
            <span>3 findings</span>
            <span>1 blocker</span>
          </div>
        </Reveal>

        <Reveal index={5} className="hero-workspace-wrap">
          <div className="review-workspace" aria-label="hunkAI pull request review workspace">
            <div className="workspace-bar">
              <div className="window-controls" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="workspace-title">hunkAI review / prod-ui#482</span>
              <span className="workspace-status">live eval attached</span>
            </div>
            <div className="workspace-grid">
              <aside className="workspace-sidebar" aria-label="Review queue">
                <div className="workspace-label">Review queue</div>
                <div className="queue-list">
                  <div className="queue-item active">
                    <span>prod-ui#482</span>
                    <strong>72</strong>
                  </div>
                  <div className="queue-item">
                    <span>billing#119</span>
                    <strong>31</strong>
                  </div>
                  <div className="queue-item">
                    <span>api#644</span>
                    <strong>48</strong>
                  </div>
                </div>
                <div className="workspace-label">Checks</div>
                <div className="check-list">
                  <span>Correctness</span>
                  <span>Security</span>
                  <span>Tests</span>
                </div>
              </aside>
              <div className="workspace-main">
                <div className="workspace-tabs">
                  <span className="active">Diff</span>
                  <span>Findings</span>
                  <span>Tests</span>
                </div>
                <div className="diff-surface" aria-label="Diff finding">
                  <div className="diff-line muted"><span>41</span><code>const totals = useMemo(() =&gt; {'{'}</code></div>
                  <div className="diff-line removed"><span>42</span><code>- return computeTotals(orders);</code></div>
                  <div className="diff-line added"><span>42</span><code>+ return computeTotals(orders, userId);</code></div>
                  <div className="diff-line added"><span>43</span><code>+ {'}'}, [orders]);</code></div>
                  <div className="finding-row">
                    <span>Correctness risk</span>
                    <p>computeTotals now depends on userId, but the memo dependency list was not updated.</p>
                  </div>
                </div>
              </div>
              <aside className="workspace-panel" aria-label="Eval transparency">
                <div className="workspace-label">Eval transparency</div>
                <h3 className="workspace-panel-title">Every rubric ships with a precision / recall report.</h3>
                <p className="workspace-panel-copy">Readable signal without the loud meter colors.</p>
                <div className="workspace-meters">
                  <div><span>Precision</span><i style={{ width: '74%' }} /></div>
                  <div><span>Recall</span><i style={{ width: '68%' }} /></div>
                  <div><span>Signal / noise</span><i style={{ width: '81%' }} /></div>
                </div>
                <div className="workspace-note">Report attached to every new review run.</div>
              </aside>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
