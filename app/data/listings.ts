export type Condition = "LIKE NEW" | "GOOD" | "FAIR";
export type Season = "summer" | "winter";

export interface SportMeta {
  label: string;
  emoji: string;
  itemTypes: string;
  season: Season;
}

export interface Listing {
  id: string;
  sport: string;
  name: string;
  description: string;
  condition: Condition;
  price: number;
}

export const SPORTS_META: Record<string, SportMeta> = {
  // ── Summer ──────────────────────────────────────────────────
  soccer: {
    label: "SOCCER",
    emoji: "⚽",
    itemTypes: "Shin guards · Balls · Cleats",
    season: "summer",
  },
  baseball: {
    label: "BASEBALL",
    emoji: "⚾",
    itemTypes: "Bats · Gloves · Helmets",
    season: "summer",
  },
  softball: {
    label: "SOFTBALL",
    emoji: "🥎",
    itemTypes: "Bats · Gloves · Helmets",
    season: "summer",
  },
  tennis: {
    label: "TENNIS",
    emoji: "🎾",
    itemTypes: "Rackets · Balls",
    season: "summer",
  },
  volleyball: {
    label: "VOLLEYBALL",
    emoji: "🏐",
    itemTypes: "Balls · Knee pads",
    season: "summer",
  },
  golf: {
    label: "GOLF",
    emoji: "⛳",
    itemTypes: "Balls · Clubs · Tees",
    season: "summer",
  },
  lacrosse: {
    label: "LACROSSE",
    emoji: "🥍",
    itemTypes: "Sticks · Helmets · Pads",
    season: "summer",
  },
  swimming: {
    label: "SWIMMING",
    emoji: "🏊",
    itemTypes: "Goggles · Fins · Caps",
    season: "summer",
  },
  track: {
    label: "TRACK & FIELD",
    emoji: "🏃",
    itemTypes: "Spikes · Racing flats",
    season: "summer",
  },
  cycling: {
    label: "CYCLING",
    emoji: "🚴",
    itemTypes: "Helmets · Gloves · Shorts",
    season: "summer",
  },
  skateboarding: {
    label: "SKATEBOARDING",
    emoji: "🛹",
    itemTypes: "Decks · Helmets · Pads",
    season: "summer",
  },
  // ── Winter ──────────────────────────────────────────────────
  hockey: {
    label: "HOCKEY",
    emoji: "🏒",
    itemTypes: "Sticks · Helmets · Gloves · Pads",
    season: "winter",
  },
  basketball: {
    label: "BASKETBALL",
    emoji: "🏀",
    itemTypes: "Balls",
    season: "winter",
  },
  football: {
    label: "FOOTBALL",
    emoji: "🏈",
    itemTypes: "Cleats · Footballs · Pads",
    season: "winter",
  },
  skiing: {
    label: "SKIING",
    emoji: "⛷️",
    itemTypes: "Skis · Poles · Boots · Helmets",
    season: "winter",
  },
  snowboarding: {
    label: "SNOWBOARDING",
    emoji: "🏂",
    itemTypes: "Boards · Boots · Helmets",
    season: "winter",
  },
  iceskating: {
    label: "ICE SKATING",
    emoji: "⛸️",
    itemTypes: "Skates",
    season: "winter",
  },
  sledding: {
    label: "SLEDDING",
    emoji: "🛷",
    itemTypes: "Sleds · Snow tubes",
    season: "winter",
  },
};

export const LISTINGS: Listing[] = [
  // ── Soccer ──────────────────────────────────────────────────
  { id: "s1", sport: "soccer", name: "Youth Shin Guards", description: "Fits ages 8–12. Light surface scratches, solid protection.", condition: "GOOD", price: 8 },
  { id: "s2", sport: "soccer", name: "Size 5 Soccer Ball", description: "Full-size match ball. Holds air perfectly, good grip.", condition: "GOOD", price: 12 },
  { id: "s3", sport: "soccer", name: "Youth Soccer Cleats — Size 4", description: "Nike cleats, barely worn. Great traction on grass.", condition: "LIKE NEW", price: 15 },
  { id: "s4", sport: "soccer", name: "Goalkeeper Gloves", description: "Size 7. Grippy palms still fully intact. Good wrist wrap.", condition: "FAIR", price: 7 },
  // ── Baseball ────────────────────────────────────────────────
  { id: "bb1", sport: "baseball", name: 'Youth Baseball Bat — 28"', description: "Aluminum alloy. No dents, full pop.", condition: "GOOD", price: 20 },
  { id: "bb2", sport: "baseball", name: "Fielder's Glove", description: "Broken in perfectly. Right hand throw. 11\" pocket.", condition: "GOOD", price: 15 },
  { id: "bb3", sport: "baseball", name: "Batting Helmet", description: "Youth size. Single ear flap. No cracks or deep marks.", condition: "LIKE NEW", price: 12 },
  { id: "bb4", sport: "baseball", name: "Catcher's Mitt", description: "32.5\". Well broken in, good padding in pocket.", condition: "FAIR", price: 16 },
  // ── Softball ────────────────────────────────────────────────
  { id: "sb1", sport: "softball", name: 'Softball Bat — 30"', description: "Aluminum. Good pop, no dents.", condition: "GOOD", price: 18 },
  { id: "sb2", sport: "softball", name: "Softball Glove", description: "12\" mitt. Broken in, right hand throw.", condition: "GOOD", price: 14 },
  { id: "sb3", sport: "softball", name: "Batting Helmet", description: "Youth. Dual ear flap. No cracks.", condition: "LIKE NEW", price: 11 },
  // ── Tennis ──────────────────────────────────────────────────
  { id: "t1", sport: "tennis", name: "Youth Tennis Racket — 25\"", description: "Good strings, light frame. Ages 9–10.", condition: "GOOD", price: 16 },
  { id: "t2", sport: "tennis", name: "Tennis Racket — Full Size", description: "Wilson. Restrung recently, grip in good shape.", condition: "GOOD", price: 22 },
  { id: "t3", sport: "tennis", name: "Tennis Balls — 3 Pack", description: "Pressurized, still have good bounce.", condition: "GOOD", price: 4 },
  // ── Volleyball ──────────────────────────────────────────────
  { id: "v1", sport: "volleyball", name: "Indoor Volleyball", description: "Official size. Good leather, holds pressure.", condition: "GOOD", price: 14 },
  { id: "v2", sport: "volleyball", name: "Knee Pads — Youth M", description: "Good padding, elastic still works.", condition: "FAIR", price: 7 },
  // ── Golf ────────────────────────────────────────────────────
  { id: "g1", sport: "golf", name: "Golf Balls — 6 Pack", description: "Mixed brands (Titleist, Callaway). All round, no cracks.", condition: "GOOD", price: 8 },
  { id: "g2", sport: "golf", name: "Junior Golf Club Set", description: "6 clubs + bag. Built for ages 8–12. Good flex shafts.", condition: "GOOD", price: 35 },
  { id: "g3", sport: "golf", name: "Golf Tees — 50 Pack", description: "Mixed sizes. Standard wooden tees, all unbroken.", condition: "LIKE NEW", price: 3 },
  { id: "g4", sport: "golf", name: "Sand Wedge — Junior", description: "56° loft. Good face grooves. Perfect for learning.", condition: "GOOD", price: 14 },
  // ── Lacrosse ────────────────────────────────────────────────
  { id: "lx1", sport: "lacrosse", name: "Youth Lacrosse Stick", description: "42\". Good mesh, solid shaft. No cracks.", condition: "GOOD", price: 18 },
  { id: "lx2", sport: "lacrosse", name: "Lacrosse Helmet", description: "Youth large. All padding intact, cage included.", condition: "GOOD", price: 30 },
  { id: "lx3", sport: "lacrosse", name: "Lacrosse Gloves — Youth M", description: "Good palm padding, all velcro works.", condition: "FAIR", price: 12 },
  // ── Swimming ────────────────────────────────────────────────
  { id: "sw1", sport: "swimming", name: "Swim Goggles", description: "Anti-fog lenses. Good seal. Youth size.", condition: "LIKE NEW", price: 6 },
  { id: "sw2", sport: "swimming", name: "Training Fins", description: "Short blade. Size S/M. Good rubber, no tears.", condition: "GOOD", price: 10 },
  { id: "sw3", sport: "swimming", name: "Swim Cap — Silicone", description: "One size. No tears, still stretchy.", condition: "LIKE NEW", price: 4 },
  // ── Track & Field ───────────────────────────────────────────
  { id: "tr1", sport: "track", name: "Track Spikes — Size 5", description: "Nike Zoom. 6mm spikes included. Light wear.", condition: "GOOD", price: 20 },
  { id: "tr2", sport: "track", name: "Racing Flats — Size 6", description: "Adidas. Good cushion, barely used.", condition: "LIKE NEW", price: 18 },
  // ── Cycling ─────────────────────────────────────────────────
  { id: "cy1", sport: "cycling", name: "Youth Bike Helmet", description: "Fits 52–56cm. All pads inside, buckle works.", condition: "GOOD", price: 14 },
  { id: "cy2", sport: "cycling", name: "Cycling Gloves — Youth S", description: "Gel palm padding. Good grip.", condition: "GOOD", price: 8 },
  // ── Skateboarding ───────────────────────────────────────────
  { id: "sk1", sport: "skateboarding", name: "Complete Skateboard — 7.75\"", description: "Trucks, wheels, deck. Skated but solid.", condition: "FAIR", price: 25 },
  { id: "sk2", sport: "skateboarding", name: "Skate Helmet", description: "Youth M. Multi-impact certified. Good condition.", condition: "GOOD", price: 16 },
  { id: "sk3", sport: "skateboarding", name: "Knee + Elbow Pad Set", description: "All 4 pads. Good foam, straps work.", condition: "GOOD", price: 12 },
  // ── Hockey ──────────────────────────────────────────────────
  { id: "h1", sport: "hockey", name: "Hockey Stick — Junior", description: "58\". Right-handed. Good flex, no cracks in shaft.", condition: "GOOD", price: 22 },
  { id: "h2", sport: "hockey", name: "Hockey Helmet", description: "Youth medium. Full cage included. All buckles work.", condition: "GOOD", price: 28 },
  { id: "h3", sport: "hockey", name: "Hockey Gloves — Youth M", description: "Good padding throughout. All velcro and cuffs intact.", condition: "FAIR", price: 14 },
  { id: "h4", sport: "hockey", name: "Shin Guards + Knee Pads", description: "Youth size. Full set. Straps all work, foam solid.", condition: "GOOD", price: 18 },
  // ── Basketball ──────────────────────────────────────────────
  { id: "b1", sport: "basketball", name: "Spalding NBA Basketball", description: "Size 7 official. Full grip, holds air, no flat spots.", condition: "GOOD", price: 18 },
  { id: "b2", sport: "basketball", name: "Youth Basketball — Size 5", description: "Perfect for ages 5–8. Barely used.", condition: "LIKE NEW", price: 12 },
  { id: "b3", sport: "basketball", name: "Youth Basketball — Size 6", description: "Women's / youth size. Good bounce, clean surface.", condition: "GOOD", price: 14 },
  // ── Football ────────────────────────────────────────────────
  { id: "f1", sport: "football", name: "Youth Football — Size 7", description: "Good grip, holds pressure. Ready for backyard games.", condition: "GOOD", price: 14 },
  { id: "f2", sport: "football", name: "Football Cleats — Size 5", description: "Adidas. Light turf wear on soles, uppers are clean.", condition: "GOOD", price: 16 },
  { id: "f3", sport: "football", name: "Youth Shoulder Pads", description: "Fits 50–80 lbs. All straps and buckles intact.", condition: "GOOD", price: 20 },
  { id: "f4", sport: "football", name: "Youth Football Helmet", description: "Riddell. Facemask included. No cracks in shell.", condition: "FAIR", price: 22 },
  // ── Skiing ──────────────────────────────────────────────────
  { id: "ski1", sport: "skiing", name: "Youth Ski Helmet", description: "Fits 52–56cm. Goggle clip works, all vents open.", condition: "GOOD", price: 24 },
  { id: "ski2", sport: "skiing", name: "Youth Ski Poles — 95cm", description: "Aluminum. Grips good, baskets intact.", condition: "GOOD", price: 12 },
  { id: "ski3", sport: "skiing", name: "Ski Gloves — Youth M", description: "Waterproof shell. Warm lining, wrist strap works.", condition: "GOOD", price: 14 },
  // ── Snowboarding ────────────────────────────────────────────
  { id: "snb1", sport: "snowboarding", name: "Snowboard Helmet — Youth", description: "Fits 54–58cm. Good impact foam inside.", condition: "GOOD", price: 26 },
  { id: "snb2", sport: "snowboarding", name: "Snowboard Wrist Guards", description: "Size youth M. Solid plastic splint, straps work.", condition: "LIKE NEW", price: 10 },
  // ── Ice Skating ─────────────────────────────────────────────
  { id: "ice1", sport: "iceskating", name: "Figure Skates — Youth Size 3", description: "White boot, good blade. Laces included.", condition: "GOOD", price: 22 },
  { id: "ice2", sport: "iceskating", name: "Hockey Skates — Youth Size 4", description: "Black boot. Blade sharpened recently.", condition: "GOOD", price: 24 },
  // ── Sledding ────────────────────────────────────────────────
  { id: "sl1", sport: "sledding", name: "Classic Sled — 42\"", description: "Metal runners, wood slats. All bolts tight.", condition: "GOOD", price: 18 },
  { id: "sl2", sport: "sledding", name: "Snow Tube — Large", description: "48\" diameter. Good vinyl, holds air.", condition: "GOOD", price: 14 },
];

export function getListingsBySport(sport: string): Listing[] {
  return LISTINGS.filter((l) => l.sport === sport);
}

export function getSportsBySeason(season: Season): [string, SportMeta][] {
  return Object.entries(SPORTS_META).filter(([, meta]) => meta.season === season);
}
