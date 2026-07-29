import { Reveal } from './Reveal';

export function Footer() {
  return (
    <footer>
      <div className="inner section-block footer-block" id="join">
        <Reveal index={0}>
          <div className="footer-cta">
            <div>
              <div className="kicker">Get started</div>
              <div className="fmsg">Get an invite when your repo can join early access.</div>
            </div>
            <div className="askbar" style={{ margin: 0, maxWidth: 360 }}>
              <span className="prompt">@</span>
              <input type="email" placeholder="you@yourcompany.com" />
              <button type="button">Join</button>
            </div>
          </div>
        </Reveal>
        <div className="foot-links">
          <div className="footer-brand">
            <div className="logo"><span className="sq" />hunkAI</div>
            <p>Focused review automation for pull requests that need signal, not noise.</p>
          </div>
          <div className="foot-col"><div className="h">Product</div><a href="#product">Overview</a><a href="#how">How it works</a><a href="#pricing">Pricing</a></div>
          <div className="foot-col"><div className="h">Resources</div><a href="#eval">Eval report</a><a href="#">Docs</a><a href="#">Changelog</a></div>
          <div className="foot-col"><div className="h">Company</div><a href="#">About</a><a href="#">GitHub</a></div>
        </div>
      </div>
    </footer>
  );
}
