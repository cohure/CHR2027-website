# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo-based static website for the Computational Humanities Research (CHR) 2027 conference. The site uses a custom theme called "chr" and outputs to the `docs/` directory for GitHub Pages hosting.

## Development Commands

- **Build site**: `npm run build` or `hugo`
- **Local development server**: `npm run serve` or `hugo server`  
- **Create new content**: `npm run create <path>` or `hugo new <path>`

## Architecture

### Hugo Configuration
- **Config**: `config.toml` - Main Hugo configuration with menu structure, theme settings, and site parameters
- **Theme**: Custom theme located in `themes/chr/`
- **Output**: Site builds to `docs/` directory (configured via `publishDir`)
- **Base URL**: Currently set to `http://2027.computational-humanities-research/`

### Content Structure
- **Main content**: `content/` directory contains all markdown files
- **Homepage**: `content/_index.md` with embedded CSS styling
- **Papers**: Individual paper files in `content/papers/` directory
- **Announcements**: Located in `content/announcements/`
- **Venue information**: `content/venue/` with subpages for location details

### Theme Architecture
- **Layout templates**: `themes/chr/layouts/` contains HTML templates
  - `baseof.html`: Base template with header/footer structure
  - `_default/`: Default layouts for single pages and lists
  - `partials/`: Reusable components (header, footer, head, sidebar)
- **Static assets**: `themes/chr/static/` mirrors to site root
  - CSS in `static/css/main.css`
  - Images in `static/images/`
  - JavaScript in `static/js/`

### Key Features
- Menu configuration in `config.toml` (many items currently commented out)
- Custom CSS styling embedded in homepage (`content/_index.md`)
- Card-based layout system with responsive design
- Image optimization and background styling
- GitHub Pages deployment via `docs/` directory

### Content Management
- Markdown files use front matter for metadata
- `draft: true` prevents publication
- Hugo shortcodes available (e.g., `colorize.html`)
- Unsafe HTML rendering enabled in markup configuration

## File Organization
- Configuration files in root
- All markdown content in `content/`
- Theme assets and templates in `themes/chr/`
- Built site outputs to `docs/`
- Static data files in `data/`