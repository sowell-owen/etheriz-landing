export interface BannerProps {
  title: string;
  subtitle: string;
  img: string;
  link: string;
}

export interface OverviewProps {
  title: string;
  description: string;
  imgs: string[];
}

interface DeliveredItemProps {
  title: string;
  data: string[];
}
export interface DeliveredProps {
  title: string;
  challenge: DeliveredItemProps;
  result: DeliveredItemProps;
}

interface IndicatorsItemProps {
  title: string;
  subtitle: string;
}
export interface IndicatorsProps {
  indicators: IndicatorsItemProps[];
}

export interface TechStackProps {
  title: string;
  data: string[];
}

export interface FeedbackProps {
  title: string;
  clientImg: string;
  name: string;
  jobTitle: string;
  description: string;
  stars: number;
}
