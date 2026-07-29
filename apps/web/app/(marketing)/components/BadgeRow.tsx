import { Reveal } from './Reveal';

export function BadgeRow() {
  return (
    <Reveal index={2}>
      <div className="badges">
        <span>Free for open source</span>
        <span>GitHub Action, 10-minute install</span>
        <span>No code leaves your CI runner</span>
      </div>
    </Reveal>
  );
}
