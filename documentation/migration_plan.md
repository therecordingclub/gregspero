# Content Migration & Implementation Plan

## Goal Description
Migrate all content from the existing `gregspero.com` Wix site to the new Next.js application. This ensures no content is lost while upgrading the design and performance. The primary focus is recreating the "Spirit Fingers" landing page and organizing the global site architecture.

## User Review Required
> [!IMPORTANT]
> **Spirit Fingers Page Design**: The Spirit Fingers page currently uses a unique video background implementation. We will recreate this using Next.js/React, ensuring it is responsive and performant.

## Proposed Site Architecture

### 1. Main Landing Page (`/`)
*Already Implemented*
- **Hero**: Branding & Video
- **Bio**: Short & Long form
- **Music**: Discography
- **Projects**: Tiny Room, Artist AI, The Recording Club
- **Contact**: Booking & Management
- **Footer**: Socials & Newsletter

### 2. Sub-Pages (New)
#### `spirit-fingers/` [`/src/app/spirit-fingers/page.tsx`]
- **Design**: Replicate the "Landing Page" feel with full-screen video background.
- **Content**:
  - Video Background (Looping studio footage)
  - Neon "SPIRIT FINGERS" Logo Overlay
  - "Listen to 'PEACE' Now" CTA Button
  - Social Links & Mailing List specific to Spirit Fingers
- **Assets**:
  - Download & host background video locally or via CDN.
  - Re-create or download Neon Logo.

### 3. External Links (No Migration Needed)
- **The Recording Club**: Link to `therecording.club`
- **Artist AI**: Link to `joinartistai.com`
- **Tiny Room Studio**: Link to `tinyroomstudios.com` (if applicable) or keep as section.

## Content Mapping

| Existing Section | New Location | Status |
| :--- | :--- | :--- |
| Home / Bio | `/#bio` | ✅ Complete |
| Music | `/#music` | ✅ Complete |
| Spirit Fingers (Splash) | `/spirit-fingers` | ⏳ Pending |
| Tiny Room Sessions | `/#projects` | ✅ Complete |
| Contact | `/#contact` | ✅ Complete |
| Press / Media | `/#press` (or integrate into Bio) | ⏳ Pending |

## Implementation Steps

### Phase 1: Spirit Fingers Page (`/spirit-fingers`)
1.  **Asset Acquisition**:
    - Download background video: `https://video.wixstatic.com/video/92ceff_d9385c9ee7de4d799ec354cdaec745e4/720p/mp4/file.mp4`
    - Download Spirit Fingers Logo & Album Art.
2.  **Page Construction**:
    - Create `src/app/spirit-fingers/page.tsx`.
    - Implement `VideoBackground` component.
    - specialized `SpiritNav` or reuse `Navbar` with different transparency settings.
3.  **Routing**:
    - Ensure `/spirit-fingers` is accessible.

### Phase 2: Refinement
- **Global Navigation**: Update Main Navbar to link to `/spirit-fingers` instead of anchor tag if desired, or keep both.
- **SEO**: Add metadata for the new sub-page.

## Verification Plan

### Automated Tests
- Build & Lint check: `npm run build`
- Link Check: Verify `/spirit-fingers` loads 200 OK.

### Manual Verification
- **Visual Check**:
  - Verify video plays automatically and loops.
  - Check text overlay visibility on mobile vs desktop.
  - Verify links (Listen to Peace, Socials) work.
