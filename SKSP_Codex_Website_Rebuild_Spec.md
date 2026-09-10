# Shri Krishna Spun Pipes --- Website Rebuild Specification for Codex

## 0. Mission

Rebuild the current Shri Krishna Spun Pipes website as a **real,
production-quality multi-page corporate website**, not as a vertically
stacked PDF/PPT reproduction.

The provided company-profile PDF is the **primary visual and content
reference**. The existing implementation is only a reference for what
has already been attempted; do not preserve its PPT-like composition if
it conflicts with the goal below.

The final result must feel like a genuine industrial/manufacturing
company website with:

-   A strong landing/home page
-   A dedicated About page
-   A dedicated Products listing page
-   Individual Product Detail pages
-   Applications / Industries content
-   Clients / Trust section
-   Certifications / Registrations section
-   Sustainability & Innovation section
-   Contact page
-   Support / Enquiry flow
-   Proper responsive navigation
-   Proper footer
-   Real website spacing, typography, interaction, hierarchy, and
    responsive behavior

### Non-negotiable principle

**Do not turn each PDF page into a website section.**

The PDF contains presentation/profile layouts. The website must extract
the same brand language, content, imagery, product information, colors,
icons, and visual motifs and then reorganize them into a normal website
information architecture.

The PDF should be treated as a **design/content source**, not as a
page-by-page website wireframe.

------------------------------------------------------------------------

# 1. Source of Truth

Use the uploaded `SKSP Profile_merged.pdf` as the authoritative
reference for:

1.  Brand identity
2.  Logo treatment
3.  Color palette
4.  Typography direction
5.  Product names
6.  Product descriptions
7.  Product feature language
8.  Applications
9.  Company claims
10. Client names
11. Sustainability messaging
12. Contact information
13. Registration/certification information
14. Overall visual language
15. Product imagery

The PDF contains 26 pages.

Important visual/content references:

-   **Page 1:** Company profile cover / hero visual language
-   **Page 2:** About Us, presence, family firms, strengths
-   **Page 3:** Comprehensive Product Portfolio and application
    categories
-   **Pages 4--18:** Individual product/product-family information
-   **Page 19:** Esteemed Client Base
-   **Page 20:** Why Shree Krishna Spun Pipes is the Best Choice?
-   **Page 21:** Commitment to Sustainability & Innovation
-   **Page 22:** Get in Touch / contact information
-   **Pages 23--26:** Government/registration/certification documents

The PDF visually establishes a strong **navy blue + white + gold/yellow
accent** industrial identity, with angular line/border motifs,
shield/quality symbolism, engineering/construction imagery, and
condensed bold display typography.

Do not blindly reproduce the PDF borders around every component. Convert
the visual language into modern web components.

------------------------------------------------------------------------

# 2. Existing Codebase and Assets

Before changing anything:

## Inspect the entire existing repository

Determine:

-   Current framework
-   Existing React/Vite setup
-   Existing Tailwind configuration
-   Existing routing
-   Existing components
-   Existing CSS
-   Existing public/assets folders
-   Existing image files
-   Existing font files
-   Existing SVG/icon files
-   Existing logo files
-   Existing content/data files
-   Existing package dependencies

The requested target stack is:

-   **React**
-   **Vite**
-   **Tailwind CSS**
-   **React Router**

Do not unnecessarily replace a working project structure. Codex should
decide the safest way to refactor the existing codebase while retaining
useful infrastructure and removing the PPT-like implementation.

## Assets are already provided

The project contains the website images/assets, most likely under an
`images`, `public`, `assets`, or similar directory.

**Do not generate substitute images if the correct project asset
exists.**

Before implementing product cards:

1.  Inventory all image assets.
2.  Inspect filenames.
3.  Inspect dimensions/aspect ratios.
4.  Visually inspect ambiguous assets.
5.  Map each product to the correct existing image.
6.  Reuse the original images wherever possible.
7.  Do not use random stock imagery in place of supplied assets.
8.  Do not create fake product imagery when the repository already
    contains the real/reference image.

If the repository contains multiple versions of an image, choose the
highest-quality appropriate version.

If an asset is clearly intended as a logo/icon/background, preserve its
intended use.

------------------------------------------------------------------------

# 3. Design Objective

The target website should feel like:

> A premium Indian RCC / precast concrete manufacturing company website
> with an established industrial identity.

It should NOT feel like:

-   A PowerPoint deck
-   A PDF viewer
-   A collection of poster cards
-   A portfolio template
-   A generic AI-generated landing page
-   A dashboard
-   A page made entirely from bordered boxes
-   A screenshot recreation

## Visual hierarchy

The website should use:

-   Strong hero photography
-   Large editorial headlines
-   Clear section hierarchy
-   Generous whitespace
-   Controlled card usage
-   Full-width sections where appropriate
-   Asymmetric image/text layouts where useful
-   Subtle industrial textures/geometry
-   Navy as the primary brand color
-   White/light neutral surfaces
-   Gold/yellow as a controlled accent
-   High-quality product photography
-   Consistent iconography
-   Clean CTA hierarchy

The PDF has strong visual framing. Preserve that identity, but modernize
it for the web.

------------------------------------------------------------------------

# 4. Typography

Typography is a major problem in the current implementation.

Do not use generic browser/default fonts.

## First priority

Inspect the repository for:

-   `.woff`
-   `.woff2`
-   `.ttf`
-   `.otf`
-   `@font-face`
-   existing Google Font imports
-   font declarations in CSS/Tailwind

If the exact brand fonts exist, use them.

## If exact fonts are not present

Choose a typography system that visually approximates the PDF:

### Display font direction

Use a condensed/industrial sans-serif for:

-   Hero headlines
-   Page titles
-   Product names
-   Major section headings

Possible direction:

-   Oswald
-   Barlow Condensed
-   Archivo Narrow
-   another high-quality condensed grotesk available in the project

Do not add a font merely because it is convenient. First inspect the
existing project and preserve any supplied brand font.

### Body font

Use a clean modern sans-serif for:

-   Paragraphs
-   Descriptions
-   Navigation
-   Forms
-   Metadata

Possible direction:

-   Inter
-   Manrope
-   DM Sans
-   another clean neutral sans-serif

Body text must be highly readable.

## Typography rules

-   Do not uppercase every paragraph.
-   Do not use condensed display fonts for long body copy.
-   Use strong weight contrast.
-   Keep line lengths readable.
-   Use responsive type scaling.
-   Maintain consistent heading hierarchy.
-   Avoid oversized headings that consume the whole viewport.
-   Avoid tiny text copied from the PDF.

------------------------------------------------------------------------

# 5. Brand Design Tokens

Create centralized design tokens rather than scattering values
throughout components.

Approximate palette based on the PDF:

``` text
Primary Navy:
#062A5A / #082F63 range

Deep Navy:
#041A36 / #061D3A range

Gold / Accent:
#F2A900 / #FFB000 range

White:
#FFFFFF

Soft Background:
#F4F7FA / #F7F9FC

Text:
#10233D

Muted Text:
#607086

Border:
#D7E0EA
```

Do not assume these hexadecimal values are exact. Sample/derive the
final palette from the actual supplied brand assets where practical.

Create semantic tokens such as:

``` text
--color-primary
--color-primary-dark
--color-accent
--color-background
--color-surface
--color-text
--color-muted
--color-border
```

Use the gold accent sparingly. The site should remain primarily
navy/white rather than becoming yellow-heavy.

------------------------------------------------------------------------

# 6. Brand Motifs

The PDF repeatedly uses:

-   Angular blue corner lines
-   Fine gold separators
-   Shield/quality iconography
-   Engineering/construction imagery
-   Strong horizontal rules
-   Navy footer bars
-   Gold highlights
-   Geometric framing
-   Industrial photography
-   Quality/strength/durability messaging

Translate these into reusable website primitives.

Examples:

-   `SectionEyebrow`
-   `SectionHeading`
-   `GoldRule`
-   `IndustrialPattern`
-   `QualityBadge`
-   `Stat`
-   `FeatureIcon`
-   `ImageFrame`
-   `PrimaryButton`
-   `SecondaryButton`
-   `ProductCard`
-   `ProductFeature`
-   `ApplicationCard`

Do NOT place decorative borders around every component.

------------------------------------------------------------------------

# 7. Global Website Structure

Implement a persistent site shell:

``` text
App
 ├── Header
 ├── Main
 │    ├── Page content
 │    └── Floating/utility actions where appropriate
 └── Footer
```

Header:

-   Logo
-   Main navigation
-   Products dropdown or expandable Products navigation
-   Contact CTA
-   Mobile menu
-   Sticky behavior after scrolling
-   Proper active-route state

Suggested navigation:

``` text
Home
About
Products
Applications
Why SKSP
Sustainability
Clients
Certifications
Contact
```

Do not make the navbar excessively tall.

Desktop header should feel premium and compact.

Mobile header should be a real mobile navigation, not a scaled desktop
navbar.

------------------------------------------------------------------------

# 8. Routing / Information Architecture

Use React Router.

Required routes:

``` text
/
 /about
 /products
 /products/:slug
 /applications
 /why-sksp
 /sustainability
 /clients
 /certifications
 /contact
 /support
```

If a separate page would create unnecessary duplication, combine it
thoughtfully, but the core requested pages must exist.

Product detail pages are mandatory.

Every product must have a stable slug.

Example:

``` text
/products/rcc-hume-pipes
/products/u-drain
/products/box-culvert
```

Use data-driven product rendering rather than duplicating JSX manually.

------------------------------------------------------------------------

# 9. HOME PAGE

The Home page must NOT be a miniature version of all 26 PDF pages.

It should be a conversion-oriented corporate landing page.

Recommended structure:

## 9.1 Hero

Use the strongest supplied industrial/manufacturing image.

Reference the visual direction of PDF page 1.

Content direction:

**Eyebrow:** QUALITY CONCRETE SOLUTIONS

**Headline direction:** BUILT FOR THE LOAD AHEAD.

The exact copy should remain consistent with the source where
applicable.

Hero should include:

-   Full-width image
-   Dark overlay/gradient where necessary
-   Strong headline
-   Short supporting paragraph
-   Primary CTA: Explore Products
-   Secondary CTA: Talk to Us
-   Optional small trust indicators

Do not place the PDF page inside the hero.

## 9.2 Trust / capability strip

Use the PDF's recurring concepts:

-   Premium Quality
-   High Strength
-   Timely Delivery
-   Reliable Support
-   Experienced Team
-   Large Capacity

Present these as a modern horizontal trust strip.

## 9.3 About preview

Use the strongest About content from PDF page 2.

Layout:

``` text
Text content | Image
```

Not a poster.

Include:

-   50+ years / legacy claim only where supported by the source
-   Manufacturing expertise
-   Regional presence
-   Quality focus
-   CTA → About Us

## 9.4 Product categories

Use the three major categories shown on PDF page 3:

-   Infrastructure
-   Real Estate
-   Industrial

Display as large visual cards with real supplied imagery.

## 9.5 Featured products

Show a curated subset, not every product.

Suggested 6:

-   RCC Hume Pipes
-   U Drain
-   Box Culvert
-   RCC Manhole Chambers
-   Ready-made RCC Septic Tanks
-   RCC Drain Covers and Slabs

CTA:

`View All Products`

## 9.6 Applications

Use relevant applications from the PDF:

-   Roads & Highways
-   Drainage & Sewerage
-   Irrigation
-   Industrial Projects
-   Buildings & Real Estate
-   Smart City Infrastructure

Present these as clean cards/icons.

## 9.7 Why SKSP

Convert PDF page 20 into a strong website section.

Possible points from the source:

-   Legacy & excellence
-   Manufacturing capability
-   Diverse product portfolio
-   Government-approved supplier positioning where supported
-   Manufacturing facilities
-   Timely delivery / nationwide reach
-   Customizable RCC solutions

Do not copy the poster layout.

## 9.8 Sustainability

Use PDF page 21.

Show:

-   Energy-efficient manufacturing
-   Advanced quality control
-   Optimized production/logistics
-   Durable RCC products
-   Environment-friendly manufacturing practices
-   Continuous product innovation/custom engineering

CTA → Sustainability

## 9.9 Clients

Use the client names from PDF page 19.

Display them as:

-   clean text/logo-style list
-   or a trust wall
-   optionally grouped by sector

Do not create fake client logos.

## 9.10 Contact CTA

Strong final CTA:

**GET IN TOUCH WITH US TODAY**

Use source-supported contact information from PDF page 22.

## 9.11 Footer

Dark navy footer.

Include:

-   Logo
-   Company short description
-   Navigation
-   Products
-   Contact
-   Quick links
-   Certifications
-   Copyright
-   Privacy/terms if implemented

------------------------------------------------------------------------

# 10. ABOUT PAGE

Create a dedicated `/about`.

Reference PDF pages 1--2.

Structure:

## Hero

Title:

`About Shree Krishna Spun Pipes`

Supporting statement around:

-   RCC/precast manufacturing
-   infrastructure
-   quality
-   durability
-   reliable supply

## Company story

Use only information supported by the PDF.

## Company strengths

Modern feature layout:

-   Manufacturing experience
-   Quality control
-   Strong presence
-   Product breadth
-   Reliable delivery
-   Customer support

## Presence

The PDF identifies presence across:

### Rajasthan

-   Kota
-   Jhalawar
-   Udaipur

### Madhya Pradesh

-   Narsinggarh
-   Betul
-   Nagpur

Preserve these names exactly where they are source-supported.

## Family firms

PDF page 2 references:

-   Paliwal Steels
-   Nakoda Spun Pipes

Present them as affiliated/family firms only to the extent supported by
the source wording.

Do not invent corporate relationships.

------------------------------------------------------------------------

# 11. PRODUCTS PAGE

Route:

``` text
/products
```

This must be a proper product catalogue.

## Page structure

Hero:

``` text
Comprehensive Product Portfolio
```

Supporting copy based on PDF page 3.

Then:

### Category navigation/filter

Categories:

-   All
-   Infrastructure
-   Real Estate
-   Industrial
-   Custom / Specialized

The filter should be functional.

### Product grid

Use real supplied images.

Cards should include:

-   Product image
-   Product name
-   Short description
-   Category
-   Key feature tags
-   CTA: View Product

Avoid excessive card borders.

Use hover interaction:

-   subtle image scale
-   arrow movement
-   elevation
-   gold accent

No excessive animation.

------------------------------------------------------------------------

# 12. PRODUCT DATA

Create a central data source such as:

``` text
src/data/products.ts
```

or equivalent.

Each product should have a structure similar to:

``` ts
{
  slug,
  name,
  category,
  image,
  gallery,
  shortDescription,
  description,
  features,
  applications,
  benefits,
  specifications,
  cta
}
```

Populate content from the PDF.

Products represented in the supplied PDF include:

1.  RCC Hume Pipes
2.  U Drain
3.  Box Culvert
4.  RCC Manhole Chambers
5.  Paver Blocks
6.  Kerb Stones
7.  Readymade RCC Septic Tanks
8.  Readymade RCC Water Tanks
9.  RCC Fencing Poles
10. RCC Drain Covers and Slabs
11. RCC Boundary Walls & Compound Walls
12. Crusher Stone, Ballast Stone & Blanket for Railway
13. RCC Earthing Pits
14. RCC Guard Posts
15. Customized RCC Products

The PDF's page 3 portfolio also references additional product categories
such as:

-   Jacking Pipes
-   Half Round Pipes
-   RCC U Drains
-   RCC Box Culverts
-   Septic Tanks & more

Do not silently collapse distinct products if the source provides enough
information to keep them distinct.

If the source lacks enough information for a separate detail page, use
the available product information rather than inventing specifications.

------------------------------------------------------------------------

# 13. PRODUCT DETAIL PAGE

Every product needs a dedicated route.

Example:

``` text
/products/rcc-hume-pipes
```

Structure:

## Product hero

Two-column desktop layout:

``` text
Product information | Large product image
```

Include:

-   Product name
-   Short description
-   Primary CTA: Request a Quote
-   Secondary CTA: Contact Us

## Key features

Use the exact concepts from the source.

For RCC Hume Pipes, PDF page 4 includes:

-   High Durability
-   Leak Proof Design
-   Low Maintenance

It also specifies:

-   150mm--1200mm
-   NP2, NP3, NP4

Only expose these specifications because they are source-supported.

## Applications

Use source-supported application categories.

## Benefits

Convert the PDF's bottom feature strip into modern feature cards.

## Gallery

Use available product imagery from the repository.

## Related products

Show 3--4 related products.

## CTA

`Request a Quote`

------------------------------------------------------------------------

# 14. PRODUCT-SPECIFIC CONTENT

Use the PDF as the source of truth.

## RCC Hume Pipes --- PDF page 4

Source concepts:

-   IS:458 Certified
-   150mm--1200mm
-   NP2, NP3, NP4
-   Drainage
-   Irrigation
-   Highways
-   High durability
-   Leak-proof design
-   Low maintenance

## U Drain --- PDF page 5

Source concepts:

-   High-strength concrete
-   Durable & long-lasting
-   Smooth inner surface
-   Easy installation
-   Roads & Highways
-   Residential Areas
-   Industrial Areas
-   Agriculture & Irrigation
-   Strong & reliable
-   Efficient drainage
-   Cost effective

## Box Culvert --- PDF page 6

Source concepts:

-   High-strength concrete
-   Durable & long-lasting
-   Leak-proof design
-   Easy installation
-   Roads & Highways
-   Drainage & Sewerage
-   Bridges & Crossings
-   Exceptional strength
-   Efficient flow
-   Cost effective

## RCC Manhole Chambers --- PDF page 7

Source concepts:

-   High-strength concrete
-   Durable & long-lasting
-   Leak-proof design
-   Easy installation
-   Drainage & Sewerage
-   Roads & Highways
-   Urban Infrastructure
-   Industrial Areas

## Paver Blocks --- PDF page 8

Source concepts:

-   Diverse designs, shapes & colors
-   High load-bearing capacity
-   Weather resistant
-   Walkways
-   Public spaces
-   Industrial areas
-   Eco-friendly manufacturing
-   Durable & strong
-   Aesthetic flexibility

## Kerb Stones --- PDF page 9

Source concepts:

-   High-grade RCC & precision moulding
-   Weatherproof & long-lasting
-   Customizable designs
-   Roadside
-   Parking
-   Gardens
-   Aesthetic appeal
-   High strength
-   Customizable designs

## Readymade RCC Septic Tanks --- PDF page 10

Source concepts:

-   Multiple sizes & customizable capacities
-   Leak-proof construction
-   Durable & long-lasting
-   Residential
-   Commercial
-   Industrial
-   Quick installation
-   Cost-effective solution
-   Eco-friendly

## Readymade RCC Water Tanks --- PDF page 11

Source concepts:

-   High capacity & multiple sizes
-   Leak-proof & weather-resistant
-   Durable & long-lasting
-   Domestic
-   Agricultural
-   Emergency
-   Corrosion-resistant
-   Long-lasting performance
-   Versatile applications

## RCC Fencing Poles --- PDF page 12

Source concepts:

-   High-strength RCC
-   Weather-resistant & long-lasting
-   Custom sizes
-   Agricultural
-   Industrial
-   Roadside
-   Anti-corrosive & weatherproof
-   Low maintenance & cost-effective
-   Easy installation
-   Durable & reliable

## RCC Drain Covers and Slabs --- PDF page 13

Source concepts:

-   High load-bearing capacity
-   Anti-slip surface for safety
-   Corrosion-resistant & durable
-   Municipal drainage systems
-   Urban roadways
-   Commercial premises
-   Safe & secure design
-   Durable
-   Cost-effective
-   Customizable sizes

## RCC Boundary Walls & Compound Walls --- PDF page 14

Source concepts:

-   Precast, ready-to-install
-   High-strength & durable
-   Residential
-   Industrial
-   Agricultural
-   Time & cost efficiency
-   Weather-resistant & low maintenance
-   Customizable designs
-   Strong & reliable

## Crusher Stone, Ballast Stone & Blanket for Railway --- PDF page 15

This is a specialized railway/aggregate offering.

Use the three product divisions:

-   Crusher Stone
-   Ballast Stone
-   Blanket for Railway

Source concepts include:

-   High strength & durability
-   Railway track use
-   Premium quality for railway tracks
-   Ensures load distribution & track stability
-   Resistant to wear & weather
-   Conforms to Indian Railway standards where explicitly stated by
    source
-   Timely supply / pan-India delivery network

Do not invent technical railway specifications.

## RCC Earthing Pits --- PDF page 16

Source concepts:

-   High durability and strength
-   Corrosion-resistant for long-term protection
-   Precise design for easy installation
-   Industrial earthing
-   Residential earthing
-   Electrical substations
-   Reliable & safe earthing
-   Weatherproof design
-   Precast for quick deployment
-   Cost-effective solution

## RCC Guard Posts --- PDF page 17

Source concepts:

-   High-strength prefabricated posts
-   Weather-resistant & durable
-   Quick and easy installation
-   Security checkpoints
-   Gate communities
-   Institutional premises
-   Built to last
-   Cost-effective
-   Ready-to-use
-   Low maintenance

## Customized RCC Products --- PDF page 18

Source concepts:

-   Tailor-made RCC solutions
-   High-precision engineering
-   Wide range of customization options
-   Infrastructure projects
-   Industrial setups
-   Commercial spaces
-   Flexibility in design
-   Superior quality & durability
-   Dedicated technical support

------------------------------------------------------------------------

# 15. APPLICATIONS PAGE

Route:

``` text
/applications
```

Create a real applications/industries page.

Primary application areas from the PDF:

-   Roads & Highways
-   Drainage & Sewerage
-   Irrigation
-   Industrial Projects
-   Buildings & Real Estate
-   Smart City Infrastructure
-   Railways
-   Agriculture
-   Electrical Infrastructure
-   Municipal Infrastructure

Use real product imagery where available.

For each application:

-   Problem/context
-   Relevant SKSP solutions
-   Product links
-   Supporting image
-   CTA

Do not invent project case studies unless the repository contains them.

------------------------------------------------------------------------

# 16. WHY SKSP PAGE

Route:

``` text
/why-sksp
```

Transform PDF page 20 into a full web page.

Source-supported themes:

-   50+ years of legacy & excellence
-   Largest manufacturer positioning in Rajasthan & MP where the source
    states it
-   Diverse product portfolio
-   Government-approved supplier positioning where explicitly supported
-   Cutting-edge manufacturing facilities
-   Timely delivery and nationwide reach
-   Customizable RCC solutions

Important:

Claims such as "largest manufacturer", "50+ years",
"government-approved", etc. are marketing/business claims from the
supplied source. Do not strengthen them into new claims or invent
evidence.

Use a high-trust visual style.

------------------------------------------------------------------------

# 17. SUSTAINABILITY PAGE

Route:

``` text
/sustainability
```

Reference PDF page 21.

Structure:

Hero:

`Commitment to Sustainability & Innovation`

Content:

-   Energy-Efficient Manufacturing Processes
-   Advanced Quality Control & Precision Engineering
-   Optimized Production & Logistics
-   Durable RCC Products with Long Service Life
-   Environment-Friendly Manufacturing Practices
-   Continuous Product Innovation & Custom Engineering

Use the source's sustainability principles:

-   Sustainable manufacturing
-   Superior quality standards
-   Innovative engineering
-   Reduced environmental impact
-   Long-term product performance
-   Building infrastructure for tomorrow

Do not fabricate carbon-emission percentages, certifications, ESG
statistics, recycled-content percentages, or environmental claims not
found in the source.

------------------------------------------------------------------------

# 18. CLIENTS PAGE

Route:

``` text
/clients
```

Reference PDF page 19.

Client names visible in the source include:

-   Adani Power Rajasthan Ltd.
-   BSC Projects
-   Hindustan Construction Co. Ltd.
-   Nagarjuna Construction Co. Ltd.
-   Nyati Constructions & Engineers
-   Larsen & Toubro Ltd. (L&T)
-   Punj Lloyd Limited
-   ITD Cementation India
-   Sunway Construction Company
-   KMC Construction Limited
-   NTPC Limited
-   Tata Projects Limited
-   SMS Paryavaran JV Ltd.
-   Shriram EPC Limited
-   GVPR Infra Projects
-   Enrich Energy Ltd.

Preserve names accurately.

Do not fabricate logos.

If only text names are available, use a sophisticated text-based trust
wall.

------------------------------------------------------------------------

# 19. CERTIFICATIONS PAGE

Route:

``` text
/certifications
```

Reference PDF pages 23--26.

The source contains:

-   GST Registration Certificate
-   Udyam Registration Certificate
-   PAN card
-   ISO 9001:2015 certificate

For the public website:

## Important privacy/security rule

Do NOT publicly expose sensitive document information unnecessarily.

Do not display:

-   PAN number
-   Personal mobile numbers from government documents
-   Personal email addresses from registration documents
-   QR codes that expose sensitive data
-   Full government certificates at readable resolution unless
    intentionally required

Instead, show:

-   Certification/registration type
-   Issuing authority
-   Registration/certificate title
-   Relevant non-sensitive dates
-   Verification link only if an official public verification URL is
    intentionally provided
-   Sanitized certificate preview if appropriate

The PDF source states ISO 9001:2015 certification for:

`MANUFACTURING AND SUPPLY RCC HUME PIPE, PAVER BLOCKS, KERB STONES`

Do not extend certification scope beyond what the source says.

The Udyam document identifies:

`SHREE KRISHNA SPUN PIPES`

as a micro manufacturing enterprise and contains registration details.
Use only public-safe information.

------------------------------------------------------------------------

# 20. CONTACT PAGE

Route:

``` text
/contact
```

Reference PDF page 22.

Source-supported contact information includes:

Website:

`shreekrishnaspunpipes.com`

Phone:

`+91-9829039655`

Email:

`paliwalsteelskota@gmail.com`

Use the source exactly where these details are intended for public
contact.

Page structure:

-   Contact hero
-   Contact information
-   Enquiry form
-   Address/locations
-   Product interest selector
-   Message field
-   Submit button
-   Optional map only if a reliable business address is available in the
    project/source

Form should have proper:

-   Labels
-   Validation
-   Error states
-   Success state
-   Keyboard navigation
-   Mobile behavior

Do not claim that the form sends email unless a real backend/API is
configured.

If there is no backend, implement a clearly marked frontend-only flow or
prepare a clean API boundary without fake success.

------------------------------------------------------------------------

# 21. SUPPORT PAGE

Route:

``` text
/support
```

Create a useful support/enquiry page.

Include:

-   Product enquiry
-   Technical support
-   Request a quotation
-   Delivery/general enquiry
-   Custom RCC requirement
-   FAQ

The support page should reuse product data.

A user should be able to select:

``` text
Enquiry Type
Product
Quantity
Location
Project/Application
Message
Contact Details
```

Do not invent technical specifications or guarantees.

------------------------------------------------------------------------

# 22. HEADER UX

Desktop:

``` text
[LOGO]   Home  About  Products  Applications  Why SKSP  Sustainability  Clients   [Contact]
```

Products can have a dropdown/mega-menu containing product categories.

Mobile:

``` text
[LOGO] [MENU]
```

Menu opens as a proper drawer/full-screen panel.

Header behavior:

-   Transparent/overlay style on hero where appropriate
-   Solid/sticky style after scroll
-   Smooth transition
-   Active route indicator
-   Accessible focus states

------------------------------------------------------------------------

# 23. FOOTER UX

Use a dark navy footer inspired by the PDF.

Columns:

### Company

-   About
-   Why SKSP
-   Sustainability
-   Clients

### Products

-   RCC Hume Pipes
-   U Drain
-   Box Culvert
-   Manhole Chambers
-   Paver Blocks
-   View All

### Applications

-   Roads & Highways
-   Drainage & Sewerage
-   Industrial
-   Real Estate
-   Railways

### Contact

-   Phone
-   Email
-   Website
-   Locations

Bottom:

``` text
© Shree Krishna Spun Pipes. All rights reserved.
```

Do not create fake social links.

------------------------------------------------------------------------

# 24. Responsive Design

The site must be designed mobile-first.

Breakpoints should be based on content rather than arbitrary device
assumptions.

Test at:

-   320px
-   375px
-   390px
-   430px
-   768px
-   1024px
-   1280px
-   1440px
-   1920px

Requirements:

-   No horizontal scrolling
-   No clipped text
-   No overlapping content
-   Images maintain aspect ratio
-   Navigation works
-   Cards collapse properly
-   Product grids become 1/2 columns as appropriate
-   Hero remains readable
-   Buttons remain usable
-   Forms remain usable
-   Typography scales naturally

------------------------------------------------------------------------

# 25. Component Architecture

Build reusable components.

Suggested structure:

``` text
src/
  components/
    layout/
      Header
      Footer
      MobileMenu
    ui/
      Button
      SectionHeading
      Badge
      Icon
      Container
      ImageFrame
    sections/
      Hero
      TrustStrip
      AboutPreview
      ProductCategories
      FeaturedProducts
      ApplicationsGrid
      WhyChooseUs
      SustainabilityPreview
      ClientTrustWall
      ContactCTA
    products/
      ProductCard
      ProductGrid
      ProductFilters
      ProductHero
      ProductFeatures
      ProductApplications
      RelatedProducts
    forms/
      ContactForm
      EnquiryForm
  data/
    products
    applications
    clients
  pages/
    Home
    About
    Products
    ProductDetail
    Applications
    WhySKSP
    Sustainability
    Clients
    Certifications
    Contact
    Support
```

Adapt this structure to the existing repository rather than blindly
forcing it.

------------------------------------------------------------------------

# 26. Data-Driven Product System

Do NOT hardcode product information into repeated components.

Use a central product dataset.

Example conceptual structure:

``` ts
export const products = [
  {
    slug: "rcc-hume-pipes",
    name: "RCC Hume Pipes",
    category: "Infrastructure",
    image: "...",
    gallery: [],
    description: "...",
    features: [],
    applications: [],
    specifications: [],
  }
]
```

Product cards, product detail pages, related products, filters, and
navigation should all consume this dataset.

------------------------------------------------------------------------

# 27. Image Handling

Use the provided assets intelligently.

For each image:

-   `object-fit: cover` where appropriate
-   `object-fit: contain` for product cutouts
-   Proper aspect-ratio wrappers
-   Lazy loading below the fold
-   `loading="eager"` for critical hero image
-   Proper `alt` text
-   Avoid layout shift

Do not distort product images.

Do not crop away the actual product unnecessarily.

For hero backgrounds, use a readable dark gradient over bright imagery.

------------------------------------------------------------------------

# 28. Icons

The PDF uses engineering-style icons.

If icon assets exist in the repository, use them.

Otherwise use a consistent icon library such as Lucide React.

Do not mix five different icon styles.

Icons should be:

-   consistent stroke weight
-   consistent size
-   semantically relevant
-   visually subordinate to headings

------------------------------------------------------------------------

# 29. Animation

Use subtle, professional animation.

Good:

-   Fade/slide reveal on scroll
-   Image hover zoom
-   Button hover
-   Header transition
-   Product card hover
-   Smooth section transitions

Avoid:

-   Excessive parallax
-   Huge entrance animations
-   Bouncing elements
-   Continuous decorative motion
-   Slow page transitions
-   Animation that interferes with reading

Respect `prefers-reduced-motion`.

------------------------------------------------------------------------

# 30. Accessibility

Implement:

-   Semantic HTML
-   Correct heading hierarchy
-   Keyboard navigation
-   Visible focus states
-   Form labels
-   Form errors
-   Accessible mobile menu
-   Accessible dropdown
-   Alt text
-   Color contrast
-   `aria-expanded` where required
-   `aria-current` for active navigation
-   Reduced-motion support

Do not rely on color alone for state.

------------------------------------------------------------------------

# 31. SEO

Implement proper metadata for each route.

Home:

``` text
Title:
Shree Krishna Spun Pipes | RCC & Precast Concrete Products

Description:
Source-supported description of Shree Krishna Spun Pipes and its RCC/precast concrete product portfolio.
```

Product pages should dynamically use:

``` text
<Product Name> | Shree Krishna Spun Pipes
```

Add:

-   canonical URLs where appropriate
-   Open Graph metadata
-   meaningful page titles
-   descriptions
-   semantic headings

Do not keyword-stuff.

------------------------------------------------------------------------

# 32. Performance

Target a production-quality experience.

Implement:

-   Lazy image loading
-   Proper image dimensions
-   Responsive image strategy if assets permit
-   Code splitting where useful
-   Avoid unnecessary dependencies
-   Avoid giant component bundles
-   Avoid unnecessary animation libraries
-   Avoid rendering all heavy gallery images immediately

Do not sacrifice visual fidelity unnecessarily.

------------------------------------------------------------------------

# 33. What Must Be Removed From the Current Design

The current generated website looks like a PDF/PPT because it uses too
many repeated framed sections.

Explicitly eliminate:

-   Repeated page-sized cards
-   Every section being surrounded by a visible rectangle
-   PDF-style page borders
-   Tiny text blocks
-   Dense 3-column poster grids
-   Excessive horizontal rules
-   Repeated identical bottom feature bars
-   Every section looking like an individual slide
-   Excessive centered layouts
-   Uniform fixed-height panels
-   Screenshot-like composition
-   Giant empty space caused by poster proportions
-   Content compressed to fit a portrait-page visual ratio

Instead:

-   Use full-width website sections
-   Use natural content height
-   Use responsive grid systems
-   Use whitespace
-   Use large imagery
-   Use asymmetric layouts
-   Use editorial hierarchy
-   Use normal website section rhythm

------------------------------------------------------------------------

# 34. Do Not Copy the PDF Literally

The PDF's design should influence the site, but web UX takes precedence.

For example:

PDF:

``` text
Header
Huge title
Image
Feature strip
Feature strip
Feature strip
Footer strip
```

Website:

``` text
Hero
↓
Trust strip
↓
Narrative section
↓
Product showcase
↓
Applications
↓
Proof / credibility
↓
Sustainability
↓
CTA
↓
Footer
```

This distinction is central to the entire implementation.

------------------------------------------------------------------------

# 35. Visual Fidelity Requirements

Even though the site must not look like a PDF, it must still clearly
belong to the same brand.

Preserve:

-   Navy blue identity
-   Gold accent
-   Logo treatment
-   Condensed industrial headline character
-   Industrial photography
-   Concrete/RCC visual language
-   Quality/strength/durability messaging
-   Angular graphic motifs
-   Strong horizontal separators
-   Engineering icon language
-   Premium corporate tone

The user should be able to put the PDF next to the website and
immediately recognize them as the same company/brand.

------------------------------------------------------------------------

# 36. Page-Level Design Rhythm

Use a consistent rhythm:

``` text
Section eyebrow
Large heading
Short supporting copy
Content
CTA
```

Not:

``` text
Tiny title
tiny paragraph
border
icon
border
tiny title
border
icon
```

Recommended content widths:

``` text
max-width: 1200–1400px
```

Use narrower reading widths for paragraphs.

------------------------------------------------------------------------

# 37. Product Grid Rules

Desktop:

-   3-column grid for major catalogue
-   2-column where product content is substantial

Tablet:

-   2-column

Mobile:

-   1-column

Product cards should not become tiny.

Each card needs enough visual space for:

-   image
-   product name
-   short description
-   2--4 metadata/features
-   CTA

------------------------------------------------------------------------

# 38. Home Page Product Strategy

Do not put all 15+ products on the homepage.

Use:

-   Category showcase
-   6 featured products
-   Link to full catalogue

The `/products` page handles the complete catalogue.

------------------------------------------------------------------------

# 39. Contact/Conversion Strategy

Primary CTAs throughout the site:

``` text
Explore Products
View Product
Request a Quote
Get in Touch
Talk to Our Team
Send Enquiry
```

Use one primary visual CTA and one secondary CTA.

Do not make every button gold.

------------------------------------------------------------------------

# 40. Content Integrity

This is critical.

Use source-supported claims only.

Do not invent:

-   Years of experience beyond the source
-   Factory square footage
-   Production capacity numbers
-   Certifications
-   ISO scopes
-   Number of employees
-   Number of projects
-   Revenue
-   Customer counts
-   Pan-India operations unless source-supported
-   Technical specifications
-   Concrete grades
-   Load ratings
-   Dimensions
-   Delivery guarantees
-   Sustainability statistics

If a data point is absent, omit it or use a clearly generic label rather
than fabricating it.

------------------------------------------------------------------------

# 41. Government Documents

Pages 23--26 are evidence/reference documents, not normal marketing
content.

Do not make the certifications page look like a document dump.

Instead:

``` text
Certifications & Registrations
        ↓
[ ISO 9001:2015 ]
[ Udyam Registration ]
[ GST Registration ]
[ Business Registration ]
```

Each can open a sanitized modal/detail view if useful.

Sensitive identifiers should remain hidden.

------------------------------------------------------------------------

# 42. Code Quality

Use:

-   TypeScript if the existing project supports it; otherwise migrate
    where practical
-   Strong component boundaries
-   Centralized data
-   No duplicated product JSX
-   No magic numbers scattered throughout components
-   Reusable layout primitives
-   Semantic naming
-   Minimal dependencies
-   Clean imports
-   No unused components
-   No unused CSS
-   No console errors

Avoid giant monolithic page components.

------------------------------------------------------------------------

# 43. Do Not Overengineer

This is a corporate marketing website.

Do not add:

-   Redux unless genuinely required
-   complex state management
-   unnecessary backend
-   authentication
-   CMS
-   database
-   heavy animation framework
-   complex build tooling

React Router + local data + reusable components is sufficient unless the
existing project has a meaningful reason to use more.

------------------------------------------------------------------------

# 44. Browser Validation

After implementation, actually run the website.

Test:

-   `/`
-   `/about`
-   `/products`
-   at least several `/products/:slug` routes
-   `/applications`
-   `/why-sksp`
-   `/sustainability`
-   `/clients`
-   `/certifications`
-   `/contact`
-   `/support`

Check:

-   no runtime errors
-   no broken routes
-   no broken images
-   no missing assets
-   no horizontal overflow
-   no layout collapse
-   no console errors
-   no dead links
-   no impossible navigation states

If browser automation / Playwright / visual testing tools are available,
use them.

Take screenshots of major pages at desktop and mobile widths and
visually compare them against the supplied PDF's branding, while
deliberately avoiding literal PDF recreation.

------------------------------------------------------------------------

# 45. Visual QA Checklist

Before declaring completion, inspect every page for:

## Branding

-   Correct logo
-   Correct navy
-   Correct gold
-   Correct typography
-   Correct imagery

## Layout

-   Proper spacing
-   Clear hierarchy
-   Strong hero
-   Consistent container width
-   Natural section heights
-   No PPT-like boxed pages

## Product pages

-   Correct product name
-   Correct image
-   Correct features
-   Correct applications
-   Correct specifications where available
-   Working related products

## Mobile

-   Working navigation
-   Readable headings
-   No clipped cards
-   No horizontal overflow
-   Correct image cropping
-   Forms usable

## Accessibility

-   Keyboard navigation
-   Focus states
-   Labels
-   Alt text
-   Contrast

## Technical

-   No console errors
-   No broken routes
-   No missing assets
-   No dead links
-   Production build passes

------------------------------------------------------------------------

# 46. Final Acceptance Criteria

The rebuild is successful only if ALL of the following are true:

### Architecture

-   Real multi-page website
-   React + Vite + Tailwind
-   React Router
-   Data-driven product catalogue
-   Product detail routes

### Visual

-   Looks like a premium industrial corporate website
-   Clearly derived from the PDF brand
-   Does NOT look like a PPT
-   Does NOT look like a PDF
-   Does NOT consist of repeated poster-like boxes
-   Typography is intentionally selected
-   Images are the supplied assets
-   Navy/gold brand identity is preserved

### UX

-   Responsive
-   Accessible
-   Fast
-   Clear navigation
-   Clear CTAs
-   Product discovery is easy
-   Contact/enquiry flow is usable

### Content

-   Product names and information match the PDF
-   Client names match the PDF
-   Contact information matches the source
-   Certification information is represented accurately
-   No unsupported claims are invented

### Engineering

-   Clean component architecture
-   Reusable components
-   Central product data
-   No unnecessary dependencies
-   No runtime errors
-   Build succeeds
-   Routes work directly
-   Images load correctly

------------------------------------------------------------------------

# 47. Codex Execution Instructions

Execute this as an engineering task, not as a prompt-writing task.

## Phase 1 --- Audit

First inspect:

``` text
repository structure
package.json
vite config
tailwind config
src
public
assets/images
fonts
existing routes
existing components
existing CSS
```

Then inspect the supplied PDF and existing implementation.

## Phase 2 --- Asset mapping

Create an internal mapping:

``` text
PDF product → repository image asset
PDF section → website section
PDF claim → website content
PDF icon → repository icon/appropriate replacement
```

Do not guess when the correct asset can be found.

## Phase 3 --- Information architecture

Build the route structure before polishing individual sections.

## Phase 4 --- Design system

Create:

-   colors
-   typography
-   spacing
-   container
-   buttons
-   cards
-   headings
-   image frames
-   icon treatment

## Phase 5 --- Core shell

Implement:

-   Header
-   Mobile navigation
-   Footer
-   Routing
-   global styles

## Phase 6 --- Pages

Implement in this order:

1.  Home
2.  Products
3.  Product Detail
4.  About
5.  Applications
6.  Why SKSP
7.  Sustainability
8.  Clients
9.  Certifications
10. Contact
11. Support

## Phase 7 --- Responsive pass

Do a dedicated responsive pass after desktop implementation.

## Phase 8 --- Visual QA

Run the site and inspect it at multiple viewport sizes.

## Phase 9 --- Cleanup

Remove:

-   dead components
-   unused CSS
-   unused imports
-   placeholder text
-   fake content
-   broken images
-   console logs
-   unnecessary dependencies

## Phase 10 --- Final validation

Run:

``` bash
npm run build
```

and any existing lint/typecheck/test commands.

Fix all blocking errors before completion.

------------------------------------------------------------------------

# 48. Codex Skills / Available Tooling

If the current Codex environment exposes relevant skills, use them
rather than manually approximating their workflows.

Prioritize available skills/tools for:

1.  **Frontend UI implementation**
    -   React
    -   Vite
    -   Tailwind
    -   responsive design
2.  **Design analysis**
    -   screenshot/image inspection
    -   visual comparison
    -   asset inspection
3.  **Browser testing**
    -   Playwright
    -   browser automation
    -   viewport testing
4.  **Accessibility**
    -   WCAG checks
    -   semantic HTML
    -   keyboard navigation
5.  **Visual regression**
    -   screenshot comparison
    -   page-by-page visual QA
6.  **Repository inspection**
    -   dependency analysis
    -   codebase search
    -   asset discovery

Do not assume a skill exists. Inspect the available skills/tools in the
environment first and use the relevant ones that are actually available.

------------------------------------------------------------------------

# 49. Critical Instruction About the Existing Screenshot

The screenshot supplied with this task represents the current generated
website.

It is useful for identifying what is wrong.

The primary problems visible in that implementation are:

-   Each section resembles an individual PDF slide.
-   Excessive rectangular framing.
-   Too much content compressed into small areas.
-   Repeated feature strips make every section look identical.
-   The layout is portrait-document-inspired instead of web-inspired.
-   Typography does not establish enough hierarchy.
-   Product cards are too dense.
-   The page has insufficient breathing room.
-   Sections do not feel like a coherent website journey.
-   It feels like a PDF was cut into web sections.

The rebuild must explicitly solve these issues.

Do not simply restyle the current screenshot.

Re-architect the presentation.

------------------------------------------------------------------------

# 50. Definition of Done

Do not stop at "the page renders."

The final website must pass this visual test:

> If the PDF is removed from view, the site should still feel like a
> professionally designed industrial corporate website. If the PDF is
> shown next to it, the same brand identity, imagery, typography
> direction, color system, product language, and visual motifs should be
> immediately recognizable.

The website should feel like a **company's actual online presence**, not
its digital company-profile brochure.
