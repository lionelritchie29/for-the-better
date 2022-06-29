import { Project } from './Project';

export interface Data {
  donation_link: string;
  email: string;
  instagram: string;
  phone: string;
  address: string;
  full_address: string;
  projects: Project[];
}
