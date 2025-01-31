import Phase from './Phase';

const phasesData = [
  {
    title: 'PHASE 1:',
    info: 'DATA GATHERING',
    description:
      'Feed data to the agent. Everything from personality, opinion on various subjects, random scenarios reactions, goals to fulfill and of course, create its voice.',
  },
  {
    title: 'PHASE 2:',
    info: 'INTERNAL TESTING',
    description:
      "As any new product, AI agents require thorough testing before being released to the public. You will have a closed-environment to test your agent's behavior.",
  },
  {
    title: 'PHASE 3:',
    info: 'INCUBATION',
    description:
      'We help you launch your socials, add other tech stacks and design tokenomics.',
  },
  {
    title: 'PHASE 4:',
    info: 'TOKENIZATION',
    description:
      'Once you are happy and ready to release your new creation to the world.',
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
