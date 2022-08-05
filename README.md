# Welcome to Video builder!

## Components

VideoComponent
- Setup Video container
- Dynamic Height, Width
- Dynamic length

## Helper
- Animation
- Text to speech
- Speech to text
- Audio
- Download
- AudioGram
- BackgroundPicker

## Templates
- WikiPedia summary
- LinkedIn profile summary
- News template

----
# Deployment instructions

Modify DB conneciton details in .env file.
Run database migration to create necessary DB tables.
> `yarn rw prisma migrate dev`

Generate session secret using
`yarn rw g secret` command & copy it to SESSION_SECRET in .env file.

Start the server
> `yarn rw dev`
