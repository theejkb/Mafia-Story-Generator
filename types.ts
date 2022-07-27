export interface Medium {
  url: string;
  originalUrl: string;
  thumbnailUrl: string;
  fileType: string;
  fileSize: number;
}

export interface Attribute {
  trait_type: string;
  value: string;
}

export interface Rarity {
  avgRarity: number;
  statRarity: number;
  rarityScore: number;
  rarityScoreNormed: number;
  usedTraitsCount: number;
}

export interface Metadata {
  description: string;
  dna: string;
  attributes: Attribute[];
  rarity: Rarity;
  compiler: string;
}

export interface NFT {
  identifier: string;
  collection: string;
  timestamp: number;
  attributes: string;
  nonce: number;
  type: string;
  name: string;
  creator: string;
  royalties: number;
  uris: string[];
  url: string;
  media: Medium[];
  isWhitelistedStorage: boolean;
  tags: string[];
  metadata: Metadata;
  owner: string;
  supply: string;
  ticker: string;
}
