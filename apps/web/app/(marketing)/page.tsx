import { BadgeRow } from './components/BadgeRow';
import { CoverageGrid } from './components/CoverageGrid';
import { FeatureList } from './components/FeatureList';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { TerminalMock } from './components/TerminalMock';
import { Nav } from './components/Nav';

const plans = [
	{
		label: 'Open',
		name: 'Public repos',
		copy: 'Free for open source with inline review comments and the eval harness.',
		price: '$0',
		details: ['Unlimited public repositories', 'Inline GitHub review comments', 'Shared rubric and eval report']
	},
	{
		label: 'Team',
		name: 'Private repos',
		copy: 'For teams that want a calibrated rubric, org scoping, and dashboard history.',
		price: '$49',
		featured: true,
		details: ['Private repository reviews', 'Team-level thresholds', 'Review history and repo controls']
	},
	{
		label: 'Scale',
		name: 'Enterprise',
		copy: 'Policy controls, tenant isolation, and custom review thresholds.',
		price: 'Custom',
		details: ['Tenant isolation', 'Custom policy tuning', 'Security and compliance review']
	}
];

function PricingCards() {
	return (
		<section id="pricing">
			<div className="inner section-block">
				<div className="section-heading section-heading-wide">
					<div className="kicker">Pricing</div>
					<h2>Simple plans that map to the way teams actually adopt review automation.</h2>
					<p>Open source teams can use the public tier. Product teams start with the review layer and move to org-wide policy and evals as they scale.</p>
				</div>
				<div className="pricing-grid">
					{plans.map((plan) => (
						<article className={`card-surface pricing-card${plan.featured ? ' featured' : ''}`} key={plan.name} tabIndex={0}>
							<div className="num">{plan.label}</div>
							<h3>{plan.name}</h3>
							<p>{plan.copy}</p>
							<strong>{plan.price}</strong>
							<ul className="pricing-extra" aria-label={`${plan.name} details`}>
								{plan.details.map((detail) => (
									<li key={detail}>{detail}</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default function MarketingPage() {
	return (
		<>
			<Nav />
			<Hero />
			<section>
				<FeatureList />
			</section>
			<section>
				<CoverageGrid />
				<BadgeRow />
			</section>
			<section id="product">
				<TerminalMock />
			</section>
			<PricingCards />
			<Footer />
		</>
	);
}
