export type PassType = {
  type: string;
  price: number;
  priceSuffix: string;
  is_day_pass_enabled?: boolean;
  isBulk?: boolean;
  discountMessage?: string;
  discount?: number;
  bgColor: string;
};

export type Pass = {
  PassType: PassType;
};

export interface WorkspaceI {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: any;
  rules: any;
  amenities: string[] | null;
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  facilities: any;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: DayPassDiscountsPercentage;
  manager_id: any;
  can_edit?: boolean;
}

export interface DayPassDiscountsPercentage {
  "1": N1;
  "10": N10;
}

export interface N1 {
  value: number;
  message: string;
}

export interface N10 {
  value: number;
  message: string;
}
