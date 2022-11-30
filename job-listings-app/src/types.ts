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
  languages: Object;
  tools: Object;
  filters?: string;
}

export interface ListingProps {
  data: ListingInterface;
  stateChanger: any;
}

export interface RemoveFilter {
  filters: any;
  removeFilter: any;
  clearFilters: any;
}
