type RoleProps = {
  contract: boolean;
  title: string;
  company: string;
  description: string;
  skillset: Array<string>;
  achievements: Array<string>;
  start: number;
  end: number;
  duration: number;
};

export default RoleProps;
