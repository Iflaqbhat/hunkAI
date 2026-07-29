import { createElement } from 'react';

export function TerminalMock() {
  return createElement(
    'div',
    { className: 'inner section-block' },
    createElement(
      'div',
      { className: 'section-heading section-heading-wide' },
      createElement('div', { className: 'kicker' }, 'Inline review view'),
      createElement('h2', null, 'A diff view that looks like an actual control surface.'),
      createElement('p', null, 'The mock below should feel like a live review: clear hierarchy, clear findings, and a high-contrast surface that still reads on both dark and light themes.')
    ),
    createElement(
      'div',
      { className: 'term card-surface' },
      createElement(
        'div',
        { className: 'term-bar' },
        createElement('span', { className: 'tdot t1' }),
        createElement('span', { className: 'tdot t2' }),
        createElement('span', { className: 'tdot t3' }),
        createElement('span', { className: 'title' }, 'hunkAI review - #482 fix: memoize selector for dashboard totals')
      ),
      createElement(
        'div',
        { className: 'term-body' },
        createElement('div', { className: 'ln ctx' }, createElement('span', { className: 'gutter' }, '41'), createElement('span', { className: 'sign' }, ' '), createElement('span', { className: 'code' }, '  const totals = useMemo(() => {')),
        createElement('div', { className: 'ln del' }, createElement('span', { className: 'gutter' }, '42'), createElement('span', { className: 'sign' }, '−'), createElement('span', { className: 'code' }, '    return computeTotals(orders);')),
        createElement('div', { className: 'ln add' }, createElement('span', { className: 'gutter' }, '42'), createElement('span', { className: 'sign' }, '+'), createElement('span', { className: 'code' }, '    return computeTotals(orders, userId);')),
        createElement('div', { className: 'ln add' }, createElement('span', { className: 'gutter' }, '43'), createElement('span', { className: 'sign' }, '+'), createElement('span', { className: 'code' }, '  }, [orders]);')),
        createElement('div', { className: 'finding' }, createElement('b', null, 'Correctness risk'), 'computeTotals now depends on userId, but the dependency array wasn\'t updated — stale totals on user switch.'),
        createElement('div', { className: 'ln ctx' }, createElement('span', { className: 'gutter' }, '44'), createElement('span', { className: 'sign' }, ' '), createElement('span', { className: 'code' }, '  const [cache, setCache] = useState({});')),
        createElement('div', { className: 'ln add' }, createElement('span', { className: 'gutter' }, '45'), createElement('span', { className: 'sign' }, '+'), createElement('span', { className: 'code' }, '  window.__totalsCache = cache;')),
        createElement('div', { className: 'finding ai' }, createElement('b', null, 'AI-authored · high confidence'), 'Debug artifact left in the diff. Pattern matches unreviewed AI output — flag before merge.')
      ),
      createElement(
        'div',
        { className: 'term-foot' },
        createElement('span', null, '3 findings · 1 blocking'),
        createElement('span', null, 'Risk score ', createElement('span', { className: 'score' }, '72 / 100'))
      )
    )
  );
}
