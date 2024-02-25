export interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

export interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export interface ResumeItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

export interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

export interface ShufflerProps {
  array: Array<any>;
  count: number;
}

export interface LinesProps {
  whiteText: boolean
  hideLG: boolean
}