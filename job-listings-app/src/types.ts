export interface ListingInterface {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: Array<string>;
  tools: Array<string>;
  filters?: Array<string>;
}

export interface ListingProps {
  data: ListingInterface;
  stateChanger: any;
}

export interface RemoveFilter {
  filters: Array<string>;
  removeFilter: any;
  clearFilters: any;
}
