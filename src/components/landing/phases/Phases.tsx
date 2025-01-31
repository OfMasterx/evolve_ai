import Phase from './Phase';

const phasesData = [
  {
    title: 'PHASE 1:',
    info: 'DATA GATHERING',
    description:
      'Curate datasets to define agent behavior: personality matrices, scenario responses, and voice synthesis. Fine-tune decision trees with structured or unstructured inputs.',
  },
  {
    title: 'PHASE 2:',
    info: 'TESTING',
    description:
      'Simulate agent behavior in a sandbox environment—stress-test responses, audit for bias, and validate logic before releasing it to real-world platforms.',
  },
  {
    title: 'PHASE 3:',
    info: 'DEPLOYMENT',
    description:
      'Connect your agent to X (Twitter), Zoom, or custom APIs. Monitor its autonomous execution via real-time dashboards and performance analytics.',
  },
  {
    title: 'PHASE 4:',
    info: 'TOKENIZATION',
    description:
      'Mint an ERC-20/SPL token for your agent. Design tokenomics, deploy liquidity pools, and let token holders govern its evolution.',
  },
];

const Phases = () => {
  return (
    <div className="grid h-fit gap-[1px] sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 bg-white-25">
      {phasesData.map((phase, index) => (
        <Phase key={index} index={index + 1} {...phase} />
      ))}
    </div>
  );
};

export default Phases;
