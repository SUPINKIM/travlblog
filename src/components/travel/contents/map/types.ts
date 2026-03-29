import { Countries } from "@/types";

export interface Location {
  lat: number;
  lng: number;
}

export const location: Record<Countries, Location> = {
  [Countries.AUSTRALIA]: {
    // Sydney
    lat: -33.8688,
    lng: 151.2093,
  },
  [Countries.FRANCE]: {
    // Paris
    lat: 48.8566,
    lng: 2.3522,
  },
  [Countries.ENGLAND]: {
    // London
    lat: 51.5074,
    lng: -0.1278,
  },
  [Countries.VIETNAM]: {
    // Hanoi
    lat: 21.0285,
    lng: 105.8542,
  },
  [Countries.SINGAPORE]: {
    // Singapore
    lat: 1.3521,
    lng: 103.8198,
  },
  [Countries.JAPAN]: {
    // Osaka
    lat: 34.6937,
    lng: 135.5023,
  },
  [Countries.KOTA_KINABALU]: {
    // Kota Kinabalu
    lat: 5.9804,
    lng: 116.0734,
  },
  [Countries.HONG_KONG]: {
    // Hongkong
    lat: 22.3964,
    lng: 114.1099,
  },
};

export const locationTitle: Record<Countries, string> = {
  [Countries.AUSTRALIA]: "Sydney",
  [Countries.FRANCE]: "Paris",
  [Countries.ENGLAND]: "London",
  [Countries.VIETNAM]: "Hanoi",
  [Countries.SINGAPORE]: "Singapore",
  [Countries.JAPAN]: "Osaka",
  [Countries.KOTA_KINABALU]: "Kota Kinabalu",
  [Countries.HONG_KONG]: "Hongkong",
};
